<script lang="ts">
  import { tick } from "svelte"
  import { prefersReducedMotion } from "svelte/motion"
  import Spinner from "./spinner.svelte"
  import Response from "./response.svelte"

  const maxLength = 1000

  type ConversationTurn = {
    role: "user" | "assistant"
    loading?: boolean
    content: string
  }

  type Conversation = ConversationTurn[]

  let question = $state("")
  let conversation: Conversation = $state([])

  async function scrollToLastQuestion() {
    if (prefersReducedMotion.current) return
    await tick()
    const questions = document.querySelectorAll(".question")
    console.log("questions", questions)
    const lastQuestion = questions[questions.length - 1]
    if (lastQuestion)
      lastQuestion.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  async function submitQuestion(question: string) {
    conversation.push({ role: "user", content: question })
    conversation.push({
      role: "assistant",
      loading: true,
      content: "",
    })

    await scrollToLastQuestion()

    const response = await fetch(`/api/assistant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    })
    if (!response.ok) {
      console.error("Failed to submit question:", response.statusText)
      conversation[conversation.length - 1].loading = false
      conversation[conversation.length - 1].content =
        "I'm sorry, I couldn't process your question at this time."
      return
    }

    const { answer } = await response.json()
    conversation[conversation.length - 1].loading = false
    conversation[conversation.length - 1].content = answer

    await scrollToLastQuestion()
  }

  function handleSubmit(event: Event) {
    event.preventDefault()
    if (question.trim() === "") return

    submitQuestion(question)
    question = ""
  }
</script>

<div
  class="relative flex flex-col gap-4"
  aria-live="polite"
  aria-atomic="false"
>
  {#each conversation as turn}
    <div
      class={["flex", turn.role === "user" ? "justify-end" : "justify-start"]}
    >
      {#if turn.loading}
        <Spinner />
      {:else if turn.role === "user"}
        <span
          class={[
            "question max-w-8/10 rounded-lg p-2",
            turn.role === "user" ? "preset-tonal-primary" : "preset-tonal",
          ]}>{turn.content}</span
        >
      {:else}
        <span class="answer preset-tonal max-w-8/10 rounded-lg p-2"
          ><Response content={turn.content} /></span
        >
      {/if}
    </div>
  {/each}

  <form
    class="bg-surface-50-950 border-primary-500 sticky bottom-8 m-4 rounded-xl border border-1 p-4"
    onsubmit={handleSubmit}
  >
    <label class="label">
      <span class="label-text sr-only">Ask a question</span>
      <div class="input-group grid-cols-[1fr_auto]">
        <input
          class="input"
          type="text"
          placeholder="Type your question here..."
          maxlength={maxLength}
          bind:value={question}
        />
        <button
          type="submit"
          class="ig-btn preset-filled-primary-500"
          disabled={question.length === 0 ||
            conversation[conversation.length - 1]?.loading}>Submit</button
        >
      </div>
    </label>
    <span class="text-xs opacity-70">{question.length} / {maxLength}</span>
    <p class="mt-4 text-sm italic opacity-80">
      Note: This assistant is powered by AI and may occasionally generate
      inaccurate or overly confident responses. If something seems off, please
      double-check or reach out directly—Jon would love to clarify.
    </p>
  </form>
</div>
