import { env } from "process";
import { fileBlogRepo } from "./blog/file";
import { githubBlogRepo } from "./blog/github";
import matter from "gray-matter";

export type BlogPostId = string;

export type Metadata = {
  id: BlogPostId;
  date: string;
  title: string;
  author: string;
  authorId: string;
};

export type Blog = {
  content: string;
  prevId: BlogPostId;
  nextId: BlogPostId;
} & Metadata;

export interface BlogRepository {
  fetchContent: (fileName: string) => Promise<string>;
  fileNames: () => Promise<string[]>;
}

const repo: BlogRepository = env.NODE_ENV === "development" ? fileBlogRepo : githubBlogRepo;

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
  if (typeof (value as Metadata).authorId !== "string") {
    console.error("`authorId` is not in `value`");
    return false;
  }
  return true;
};

const metadataFromFile = async (repo: BlogRepository, fileName: string): Promise<Metadata> => {
  const { data } = matter(await repo.fetchContent(fileName));
  const id = fileName.replace(/\.md$/, "");
  sanitizeMetadata(id, data);
  if (!validateMetadata(data)) {
    throw new Error("invalid metadata");
  }
  return { ...data };
};

export async function getSortedBlogMetadata(): Promise<Metadata[]> {
  const fileNames = await repo.fileNames();
  console.log(`Files in posts directory are: ${fileNames}`);
  const allPostsData = await Promise.all(
    fileNames.map((fileName) => metadataFromFile(repo, fileName)),
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type BlogInfo = {
  id: string;
};

export type BlogInfos = BlogInfo[];

const markdownPattern = /\.md$/;

const blogInfoFromFileName = async (fileName: string): Promise<BlogInfo> => {
  return {
    id: fileName.replace(markdownPattern, ""),
  };
};

export async function getAllBlogInfos(): Promise<BlogInfos> {
  return Promise.all(
    (await repo.fileNames()).map((fileName: string) => blogInfoFromFileName(fileName)),
  );
}

export async function getBlogFromId(id: string): Promise<Blog> {
  const matterResult = matter(await repo.fetchContent(`${id}.md`));
  const { data, content } = matterResult;
  sanitizeMetadata(id, data);
  if (!validateMetadata(data)) {
    throw new Error("invalid metadata");
  }

  const blogInfos = await getAllBlogInfos();
  const idx = blogInfos.findIndex((e) => e.id === id);

  return {
    content,
    ...data,
    prevId: blogInfos[idx - 1]?.id ?? "",
    nextId: blogInfos[idx + 1]?.id ?? "",
  };
}
