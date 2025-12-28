import type { BlogRepository } from "../blog-fetch";

const ENDPOINT = "https://api.github.com";
const BLOG_PATH = "/repos/approvers/site-data/contents/data/blogs/";
const TOKEN_ENV_KEY = "GITHUB_TOKEN";

export const githubBlogRepo: BlogRepository = {
  blogFiles: async () => {
    const githubToken = process.env[TOKEN_ENV_KEY];
    const headers: HeadersInit = githubToken
      ? {
          Authorization: `Bearer ${githubToken}`,
        }
      : {};
    const res = await fetch(new URL(BLOG_PATH, ENDPOINT), { headers });
    if (!res.ok) {
      throw new Error(await res.text());
    }

    const fileNames: { name: string }[] = await res.json();
    return Promise.all(
      fileNames.map(async ({ name: fileName }) => {
        const res = await fetch(new URL(BLOG_PATH + fileName, ENDPOINT), {
          headers,
        });
        if (!res.ok) {
          throw new Error(await res.text());
        }

        const { content: contentBase64 }: { content: string } = await res.json();
        const content = Buffer.from(contentBase64, "base64").toString();
        return { fileName, content };
      }),
    );
  },
};
