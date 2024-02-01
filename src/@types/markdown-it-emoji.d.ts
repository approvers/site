declare module "markdown-it-emoji" {
  import MarkdownIt from "markdown-it/lib";

  const markdownItEmoji: MarkdownIt.PluginSimple;
  export const bare: markdownItEmoji;
  export const light: markdownItEmoji;
  export const full: markdownItEmoji;
}
