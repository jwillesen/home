import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import matter from "gray-matter"
import { marked, type Tokens } from "marked"
import OpenAI from "openai"

import dotenvx from "@dotenvx/dotenvx"
dotenvx.config({ convention: "flow" })

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const OPENAI_API_KEY: string | undefined = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
  console.log("OPEN_API_KEY environment variable is required")
  process.exit(1)
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const docsDir = path.join(__dirname, "../assistant/docs")
const testFile = path.join(docsDir, "tech-react.md")

const fileContents = fs.readFileSync(testFile, "utf-8")
const result = matter(fileContents)
// const frontMatter = result.data
const tokens = marked.lexer(result.content)

type Chunk = {
  headingPath: string[]
  text: string
  embedding: number[]
}
const chunks: Chunk[] = []
let currentHeadingPath: string[] = []

const chunkTypes = ["paragraph", "list", "code", "blockquote", "table"]

tokens.forEach((token) => {
  if (token.type === "heading") {
    currentHeadingPath = updateHeadingPath(
      currentHeadingPath,
      token as Tokens.Heading,
    )
  } else if (token.type === "paragraph") {
    chunks.push({
      text: token.text,
      headingPath: [...currentHeadingPath],
      embedding: [],
    })
  } else if (chunkTypes.includes(token.type)) {
    chunks.push({
      text: token.raw,
      headingPath: [...currentHeadingPath],
      embedding: [],
    })
  }
})

for (const chunk of chunks) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: assembleChunkText(chunk),
  })
  if (embedding.data.length > 1) {
    console.warn("multiple embeddings returned for chunk, using first one")
  }
  // console.log(JSON.stringify(embedding, undefined, 2))
  chunk.embedding = embedding.data[0].embedding
}

const chunkJsons = chunks.map((chunk) => JSON.stringify(chunk))
fs.writeFileSync("output.jsonl", chunkJsons.join("\n"))

console.log("Done")

function updateHeadingPath(
  headerPath: string[],
  headingToken: Tokens.Heading,
): string[] {
  // Depth is 1-based (H1 = 1)
  // Always trim to (depth - 1), then add the new heading.
  const trimmed = headerPath.slice(0, headingToken.depth - 1)
  return [...trimmed, headingToken.text]
}

function assembleChunkText(chunk: Chunk) {
  return [...chunk.headingPath, chunk.text].join("\n")
}
