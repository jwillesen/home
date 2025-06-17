import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-netlify"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const config = {
  runes: true,
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
    alias: {
      $src: "src",
      $convex: "src/convex",
    },
  },
  extensions: [".svelte", ".svx"],
}

export default config
