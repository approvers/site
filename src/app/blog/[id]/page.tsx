import { BlogInfo, BlogInfos, getAllBlogInfos, getBlogFromId } from "../../lib/blog-fetch";
import { Metadata } from "next";
import { Post } from "./post";

export async function generateMetadata({ params }: { params: BlogInfo }): Promise<Metadata> {
  const { title } = await getBlogFromId(params.id);
  return { title };
}

export default async function Page({ params }: { params?: BlogInfo }) {
  if (params == null) {
    throw new Error("invalid params");
  }
  const post = await getBlogFromId(params.id);
  return <Post post={post} />;
}
