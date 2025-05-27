import type { RequestHandler } from "@sveltejs/kit"
import { OPENAI_API_KEY } from "$env/static/private"
import ASSISTANT_PROMPT from "./assistant-prompt.md?raw"

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { question } = await request.json()

    if (!question || typeof question !== "string") {
      return new Response(JSON.stringify({ error: "Invalid question" }), {
        status: 400,
      })
    }

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

    if (!response.ok) {
      const errText = await response.text()
      console.error("OpenAI error:", errText)
      return new Response(JSON.stringify({ error: "OpenAI API error" }), {
        status: 502,
      })
    }

    const json = await response.json()
    const answer = json.choices?.[0]?.message?.content || ""

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
