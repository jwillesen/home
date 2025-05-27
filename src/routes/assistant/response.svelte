<script lang="ts">
  import MarkdownIt from "markdown-it"

  const md = new MarkdownIt({
    breaks: true,
  })
  md.renderer.rules.strong_open = () => '<strong class="font-bold">'
  md.renderer.rules.bullet_list_open = () =>
    '<ul class="list-inside list-disc pl-5 space-y-1">'

  type Props = {
    content: string
  }
  const { content }: Props = $props()
</script>

<span class="preset-tonal max-w-8/10 rounded-lg p-2">
  {@html md.render(content)}
</span>
