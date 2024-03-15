import { readFile, readdir } from "fs/promises";
import { BlogRepository } from "../blog-fetch";
import path from "path";

const POSTS_DIRECTORY = path.join(process.cwd(), "data", "blogs");

export const fileBlogRepo: BlogRepository = {
  fetchContent: async (fileName: string) => {
    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    console.log(`Reading a blog from ${fullPath}`);
    const fileContents = await readFile(fullPath, "utf8");
    return fileContents;
  },
  fileNames: async () => {
    console.log(`Reading all blog infos from ${POSTS_DIRECTORY}`);
    const fileNames = await readdir(POSTS_DIRECTORY);
    return fileNames;
  },
};
