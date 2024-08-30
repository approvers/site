import type { BlogRepository } from "../blog-fetch";

const ENDPOINT = "https://api.github.com";
const BLOG_PATH = "/repos/approvers/site-data/contents/data/blogs/";

export const githubBlogRepo: BlogRepository = {
  blogFiles: async () => {
    const res = await fetch(ENDPOINT + BLOG_PATH);
    if (!res.ok) {
      throw new Error(await res.text());
    }

    const fileNames: { name: string }[] = await res.json();
    return Promise.all(
      fileNames.map(async ({ name: fileName }) => {
        const res = await fetch(ENDPOINT + BLOG_PATH + fileName);
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
