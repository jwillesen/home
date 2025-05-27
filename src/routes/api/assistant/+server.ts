import type { RequestHandler } from "@sveltejs/kit"
import { LOG_QUESTIONS, LOG_ANSWERS, OPENAI_API_KEY } from "$env/static/private"
import ASSISTANT_PROMPT from "./assistant-prompt.md?raw"

type FetchAnswerResult = {
  response: Response
  answer?: string
}
async function fetchAnswer(question: string): Promise<FetchAnswerResult> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: ASSISTANT_PROMPT },
        { role: "user", content: question },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    }),
  })

  if (!response.ok) return { response }

  const json = await response.json()
  const answer = json.choices?.[0]?.message?.content ?? ""

  return { answer, response }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { question } = await request.json()
    if (LOG_QUESTIONS === "true") {
      console.log("User question:", question)
    }

    if (!question || typeof question !== "string") {
      return new Response(JSON.stringify({ error: "Invalid question" }), {
        status: 400,
      })
    }

    const { answer, response } = await fetchAnswer(question)
    if (!response.ok) {
      const errText = await response.text()
      console.error("OpenAI error:", errText)
      return new Response(JSON.stringify({ error: "OpenAI API error" }), {
        status: 502,
      })
    }
    if (LOG_ANSWERS === "true") {
      console.log("Assistant answer:", answer)
    }

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Server error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    })
  }
}
