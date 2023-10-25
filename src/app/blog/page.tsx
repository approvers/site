import { Blog } from "./blog";
import { getSortedBlogMetadata } from "../lib/blog-fetch";

export default async function Page() {
  const blogs = await getSortedBlogMetadata();
  return <Blog blogs={blogs} />;
}
