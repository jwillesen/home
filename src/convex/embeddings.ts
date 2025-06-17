import { OpenAI } from "openai"
import { v } from "convex/values"
import { action, internalQuery } from "$convex/_generated/server"
import type { Doc } from "$convex/_generated/dataModel"
import { internal } from "$convex/_generated/api"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const getEmbeddings = internalQuery({
  args: { ids: v.array(v.id("embeddings")) },
  handler: async (ctx, { ids }) => {
    const embeddings: Doc<"embeddings">[] = []
    for (const id of ids) {
      const doc = await ctx.db.get(id)
      if (doc) {
        embeddings.push(doc)
      }
    }
    return embeddings
  },
})

type PartialEmbedding = Pick<
  Doc<"embeddings">,
  "_id" | "_creationTime" | "text" | "headingPath"
> & { score: number }
export const findEmbeddingsForQuestion = action({
  args: { question: v.string() },
  handler: async (ctx, { question }): Promise<PartialEmbedding[]> => {
    const questionEmbedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
    })
    const results = await ctx.vectorSearch("embeddings", "by_embedding", {
      vector: questionEmbedding.data[0].embedding,
      limit: 16,
    })

    const embeddings = await ctx.runQuery(internal.embeddings.getEmbeddings, {
      ids: results.map((r) => r._id),
    })

    return embeddings.map((embedding, index) => ({
      _id: embedding._id,
      _creationTime: embedding._creationTime,
      text: embedding.text,
      headingPath: embedding.headingPath,
      score: results[index]._score,
    }))
  },
})
