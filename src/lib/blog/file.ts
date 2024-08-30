import { readFile, readdir } from "node:fs/promises";
import { BlogRepository } from "../blog-fetch";
import path from "node:path";

const POSTS_DIRECTORY = path.join(process.cwd(), "data", "blogs");

export const fileBlogRepo: BlogRepository = {
  blogFiles: async () => {
    console.log(`Reading all blog infos from ${POSTS_DIRECTORY}`);
    const fileNames = await readdir(POSTS_DIRECTORY);
    return Promise.all(
      fileNames.map(async (fileName) => {
        const fullPath = path.join(POSTS_DIRECTORY, fileName);
        console.log(`Reading a blog from ${fullPath}`);
        const content = await readFile(fullPath, "utf8");
        return { fileName, content };
      }),
    );
  },
};
