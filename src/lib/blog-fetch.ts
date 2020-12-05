import matter from "gray-matter";
import path from "path";
import { promises } from "fs";
const { readFile, readdir } = promises;

const postsDirectory = path.join(process.cwd(), "data", "blogs");

export type BlogPostId = string;

export type Metadata = {
  id: BlogPostId;
  date: string;
  title: string;
};

export type Blog = {
  content: string;
} & Metadata;

const validateMetadata = (value: unknown): value is Metadata => {
  if (typeof value !== "object" || value == null) {
    return false;
  }

  return (
    "id" in value &&
    typeof (value as Metadata).id === "string" &&
    "date" in value &&
    typeof (value as Metadata).date === "string" &&
    "title" in value &&
    typeof (value as Metadata).title === "string"
  );
};

const metadataFromFile = async (fileName: string): Promise<Metadata> => {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data;
  const id = fileName.replace(/\.md$/, "");
  data.id = id;
  if (!validateMetadata(data)) {
    throw "invalid metadata";
  }
  return { ...data };
};

export async function getSortedBlogMetadatas(): Promise<Metadata[]> {
  const fileNames = await readdir(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(metadataFromFile));

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllBlogIds(): Promise<{ params: { id: BlogPostId } }[]> {
  const fileNames = await readdir(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
}

export async function getBlogFromId(id: string): Promise<Blog> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await readFile(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const { data, content } = matterResult;
  data.id = id;
  if (!validateMetadata(data)) {
    throw "invalid metadata";
  }

  return {
    content,
    ...data,
  };
}
