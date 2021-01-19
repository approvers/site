import matter from "gray-matter";
import path from "path";
import { promises } from "fs";
const { readFile, readdir, stat } = promises;

const postsDirectory = path.join(process.cwd(), "data", "blogs");

export type BlogPostId = string;

export type Metadata = {
  type: "validMetadata";
  id: BlogPostId;
  date: string;
  title: string;
  author: string;
};

export type FetchError = {
  type: "fetchError";
  context: string;
};

export type Blog = {
  content: string;
} & Metadata;

const validateMetadata = (value: unknown): value is Metadata => {
  const result =
    typeof value === "object" &&
    value !== null &&
    typeof (value as Metadata).id === "string" &&
    typeof (value as Metadata).date === "string" &&
    typeof (value as Metadata).title === "string" &&
    typeof (value as Metadata).author === "string";
  if (!result) {
    console.error(`invalid metadata: ${value}`);
  }
  return result;
};

const metadataFromFile = async (fileName: string): Promise<Metadata | FetchError> => {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data;
  const id = fileName.replace(/\.md$/, "");
  data.type = "validMetadata";
  data.id = id;
  if (!validateMetadata(data)) {
    return { type: "fetchError", context: "invalid metadata" };
  }
  return { ...data };
};

export async function getSortedBlogMetadatas(): Promise<Metadata[]> {
  console.log(`Reading all sorted blog metadatas from ${postsDirectory}`);
  const fileNames = await readdir(postsDirectory);
  console.log(`Files in posts directory are: ${fileNames}`);
  const allPostsData = await Promise.all(fileNames.map(metadataFromFile));

  return allPostsData
    .filter((e): e is Metadata => e.type === "validMetadata")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export interface BlogInfo {
  id: string;
  lastUpdate: string;
}

export async function getAllBlogInfos(): Promise<{ params: BlogInfo }[]> {
  console.log(`Reading all blog infos from ${postsDirectory}`);
  const fileNames = await readdir(postsDirectory);

  return Promise.all(
    fileNames.map(async (fileName) => ({
      params: {
        id: fileName.replace(/\.md$/, ""),
        lastUpdate: (await stat(path.join(postsDirectory, fileName))).mtime.toString(),
      },
    })),
  );
}

export async function getBlogFromId(id: string): Promise<Blog | FetchError> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  console.log(`Reading a blog from ${fullPath}`);
  const fileContents = await readFile(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const { data, content } = matterResult;
  data.id = id;
  if (!validateMetadata(data)) {
    return { type: "fetchError", context: "invalid metadata" };
  }

  return {
    content,
    ...data,
  };
}
