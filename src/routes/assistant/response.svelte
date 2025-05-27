<script lang="ts">
  import { Marked, type Renderer, type Token } from "marked"

  const renderer: Partial<Renderer> = {
    strong(this: Renderer, { text }) {
      return `<strong class="font-bold">${text}</strong>`
    },
    em(this: Renderer, { text }) {
      return `<em class="italic">${text}</em>`
    },
    list(this: Renderer, { ordered, items }) {
      const tag = ordered ? "ol" : "ul"
      const body = items.map((item) => this.listitem(item)).join("")
      return `<${tag} class="list-disc pl-5 space-y-1">
        ${body}
      </${tag}>`
    },
    heading(this: Renderer, { tokens, depth }) {
      const level = Math.min(depth + 1, 6)
      return `<h${level} class="h${level}">${this.parser.parseInline(tokens)}</h${level}>`
    },
  }

  const marked = new Marked(
    {
      gfm: true,
      breaks: true,
    },
    { renderer },
  )

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
