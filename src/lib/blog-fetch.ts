import { promises } from "fs";
const { readFile, readdir } = promises;
import path from "path";
import matter from "gray-matter";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateMetadata = (value: any): value is Metadata => {
  return (
    "id" in value &&
    typeof value.id === "string" &&
    "date" in value &&
    typeof value.date === "string" &&
    "title" in value &&
    typeof value.title === "string"
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
  return {
    id,
    ...data,
  };
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

  // Combine the data with the id and contentHtml
  return {
    id,
    content,
    ...data,
  };
}
