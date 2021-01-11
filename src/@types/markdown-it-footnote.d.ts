declare module "markdown-it-footnote" {
  import MarkdownIt from "markdown-it/lib";

  namespace markdownItFootnote {
    type FootnotePluginOptions = (rawMeta: string) => void;
  }
  const markdownItFootnote: MarkdownIt.PluginWithOptions<markdownItFootnote.FootnotePluginOptions>;
  export = markdownItFootnote;
}
