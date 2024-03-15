import type { BlogRepository } from "../blog-fetch";

const ENDPOINT = "https://api.github.com";
const BLOG_PATH = "/repos/approvers/site-data/contents/data/blogs/";

export const githubBlogRepo: BlogRepository = {
  fetchContent: async (fileName: string) => {
    const res = await fetch(ENDPOINT + BLOG_PATH + fileName);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const json = (await res.json()) as Record<"name" | "content" | "sha", string>;
    const content = Buffer.from(json.content, "base64").toString();
    return content;
  },
  fileNames: async () =>
    ((await (await fetch(ENDPOINT + BLOG_PATH)).json()) as { name: string }[]).map(
      ({ name }) => name,
    ),
};
