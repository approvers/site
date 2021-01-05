import { decode } from "js-base64";
import matter from "gray-matter";

const endpoint = "https://api.github.com";
const blogPath = "/repos/approvers/site-data/contents/data/blogs/";

export type BlogPostId = string;

export interface Metadata {
  id: BlogPostId;
  date: string;
  title: string;
}

export interface Blog extends Metadata {
  content: string;
}

function validateMetadata(value: unknown): value is Metadata {
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
}

function decodeBase64(content: string): string {
  return decode(content);
}

const metadataFromFile = async (fileName: string): Promise<Metadata> => {
  const res = await fetch(endpoint + blogPath + fileName);
  const json = (await res.json()) as {
    name: string;
    content: string;
    sha: string;
  };
  const id = fileName.replace(/\.md$/, "");
  const content = decodeBase64(json.content);
  const { data } = matter(content);
  data.id = id;
  if (!validateMetadata(data)) {
    throw "invalid metadata";
  }
  return { ...data };
};

async function getFileNames(): Promise<{ name: string }[]> {
  return (await (await fetch(endpoint + blogPath)).json()) as {
    name: string;
  }[];
}

export async function getSortedBlogMetadatas(): Promise<Metadata[]> {
  const fileNames = await getFileNames();
  const allPostsData = await Promise.all(fileNames.map(({ name }) => metadataFromFile(name)));

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllBlogIds(): Promise<{ params: { id: BlogPostId } }[]> {
  const fileNames = await getFileNames();

  return fileNames.map(({ name }) => ({
    params: {
      id: name.replace(/\.md$/, ""),
    },
  }));
}

export async function getBlogFromId(id: string): Promise<Blog> {
  const res = (await (await fetch(endpoint + blogPath + id + ".md")).json()) as { content: string };
  const fileContents = decodeBase64(res.content);
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
