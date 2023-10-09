import { BlogInfos, getAllBlogInfos, getSortedBlogMetadata } from "../lib/blog-fetch";
import { Blog } from "./blog";

export async function generateStaticParams(): Promise<BlogInfos> {
  return getAllBlogInfos();
}

export default async function Page() {
  const blogs = await getSortedBlogMetadata();
  return <Blog blogs={blogs} />;
}
