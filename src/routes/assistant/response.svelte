<script lang="ts">
  import { marked, type Renderer, type Token } from "marked"

  const renderer: Partial<Renderer> = {
    strong: ({ text }) => `<strong class="font-bold">${text}</strong>`,
    em: ({ text }) => `<em class="italic">${text}</em>`,
    list: ({ ordered, items }) => {
      const tag = ordered ? "ol" : "ul"
      return `<${tag} class="list-inside list-disc pl-5 space-y-1">
        ${items.map((item) => `<li>${item.text}</li>`).join("")}
      </${tag}>`
    },
    heading: ({ tokens, depth }) => {
      const level = Math.min(depth + 1, 6)
      return `<h${level} class="h${level}">${tokens.map((t) => t.raw).join("")}</h${level}>`
    },
  }

  type Props = {
    content: string
  }
  marked.use({ renderer })

  const { content }: Props = $props()
</script>

<span class="markdown preset-tonal max-w-8/10 rounded-lg p-2">
  {@html marked.parse(content)}
</span>

<style>
  .markdown {
    :global(p) {
      margin: 1rem 0;
    }

    :global(hr) {
      margin: 1rem 0;
    }

    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) {
      margin: 1rem 0 0.5rem 0;
    }
  }
</style>
