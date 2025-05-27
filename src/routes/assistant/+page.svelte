<script lang="ts">
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

  async function submitQuestion(question: string) {
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
  }

  function handleSubmit(event: Event) {
    event.preventDefault()
    if (question.trim() === "") return

    conversation.push({ role: "user", content: question })
    conversation.push({
      role: "assistant",
      loading: true,
      content: "",
    })
    submitQuestion(question)
    question = ""
  }
</script>

<div class="flex flex-col gap-4" aria-live="polite" aria-atomic="false">
  {#each conversation as turn}
    <div
      class={["flex", turn.role === "user" ? "justify-end" : "justify-start"]}
    >
      {#if turn.loading}
        <Spinner />
      {:else if turn.role === "user"}
        <span
          class={[
            "max-w-8/10 rounded-lg p-2",
            turn.role === "user" ? "preset-tonal-primary" : "preset-tonal",
          ]}>{turn.content}</span
        >
      {:else}
        <Response content={turn.content} />
      {/if}
    </div>
  {/each}

  <form onsubmit={handleSubmit}>
    <label class="label">
      <span class="label sr-only">Ask a question</span>
      <div class="input-group grid-cols-[1fr_auto]">
        <input
          type="text"
          bind:value={question}
          class="input"
          placeholder="Type your question here..."
          maxlength={maxLength}
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
