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
  author: string;
};

export type Blog = {
  content: string;
  prevId: BlogPostId;
  nextId: BlogPostId;
} & Metadata;

function sanitizeMetadata(id: BlogPostId, value: { [key: string]: unknown }) {
  value.id = id;
  if ((value as { date: unknown }).date instanceof Date) {
    (value as Metadata).date = (value as { date: Date }).date.toISOString().substring(0, 10);
  }
}

const validateMetadata = (value: unknown): value is Metadata => {
  if (typeof value !== "object" || value === null) {
    console.error("`value` is not an object");
    return false;
  }
  if (typeof (value as Metadata).id !== "string") {
    console.error("`id` is not in `value`");
    return false;
  }
  if (typeof (value as Metadata).date !== "string") {
    console.error("`date` is not in `value`");
    return false;
  }
  if ((value as Metadata).date.length < 10 || Number.isNaN(Date.parse((value as Metadata).date))) {
    console.error(`\`date\` is an invalid form: ${(value as Metadata).date}`);
    return false;
  }
  if (typeof (value as Metadata).title !== "string") {
    console.error("`title` is not in `value`");
    return false;
  }
  if (typeof (value as Metadata).author !== "string") {
    console.error("`author` is not in `value`");
    return false;
  }
  return true;
};

const metadataFromFile = async (fileName: string): Promise<Metadata> => {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data;
  const id = fileName.replace(/\.md$/, "");
  sanitizeMetadata(id, data);
  if (!validateMetadata(data)) {
    throw new Error("invalid metadata");
  }
  return { ...data };
};

export async function getSortedBlogMetadata(): Promise<Metadata[]> {
  console.log(`Reading all sorted blog metadata from ${postsDirectory}`);
  const fileNames = await readdir(postsDirectory);
  console.log(`Files in posts directory are: ${fileNames}`);
  const allPostsData = await Promise.all(fileNames.map(metadataFromFile));

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type BlogInfo = {
  id: string;
};

export type BlogInfos = { params: BlogInfo }[];

const markdownPattern = /\.md$/;

const blogInfoFromFileName = async (fileName: string): Promise<BlogInfo> => {
  return {
    id: fileName.replace(markdownPattern, ""),
  };
};

export async function getAllBlogInfos(): Promise<BlogInfos> {
  console.log(`Reading all blog infos from ${postsDirectory}`);
  const fileNames = await readdir(postsDirectory);

  return Promise.all(
    fileNames.map(async (fileName: string) => ({
      params: await blogInfoFromFileName(fileName),
    })),
  );
}

export async function getBlogFromId(id: string): Promise<Blog> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  console.log(`Reading a blog from ${fullPath}`);
  const fileContents = await readFile(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const { data, content } = matterResult;
  sanitizeMetadata(id, data);
  if (!validateMetadata(data)) {
    throw new Error("invalid metadata");
  }

  const blogInfos = await getAllBlogInfos();
  const idx = blogInfos.findIndex((e) => e.params.id === id);

  return {
    content,
    ...data,
    prevId: blogInfos[idx - 1]?.params.id ?? "",
    nextId: blogInfos[idx + 1]?.params.id ?? "",
  };
}
