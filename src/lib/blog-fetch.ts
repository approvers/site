import { fileBlogRepo } from "./blog/file";
import { githubBlogRepo } from "./blog/github";
import matter from "gray-matter";

export type BlogFile = {
  fileName: string;
  content: string;
};

export interface BlogRepository {
  blogFiles: () => Promise<BlogFile[]>;
}

declare const slugNominal: unique symbol;
export type BlogSlug = string & { [slugNominal]: never };

export type Frontmatter = {
  date: string;
  title: string;
  author: string;
  authorId: string;
};

export type Blog = {
  slug: BlogSlug;
  markdownBody: string;
  frontmatter: Frontmatter;
};

const repo: BlogRepository = process.env.NODE_ENV === "development" ? fileBlogRepo : githubBlogRepo;

function sanitizeFrontmatterDate(value: { [key: string]: unknown }) {
  if ((value as { date?: unknown }).date instanceof Date) {
    (value as Frontmatter).date = (value as { date: Date }).date.toISOString().substring(0, 10);
  }
}

const validateFrontmatter = (value: unknown): value is Frontmatter => {
  if (typeof value !== "object" || value === null) {
    console.error("`value` is not an object");
    return false;
  }
  if (typeof (value as Frontmatter).date !== "string") {
    console.error("`date` is not in `value`");
    return false;
  }
  if (
    (value as Frontmatter).date.length < 10 ||
    Number.isNaN(Date.parse((value as Frontmatter).date))
  ) {
    console.error(`\`date\` is an invalid form: ${(value as Frontmatter).date}`);
    return false;
  }
  if (typeof (value as Frontmatter).title !== "string") {
    console.error("`title` is not in `value`");
    return false;
  }
  if (typeof (value as Frontmatter).author !== "string") {
    console.error("`author` is not in `value`");
    return false;
  }
  if (typeof (value as Frontmatter).authorId !== "string") {
    console.error("`authorId` is not in `value`");
    return false;
  }
  return true;
};

const MD_FILE_NAME_PATTERN = /\.md$/;

const fileNameIntoSlug = (fileName: string): BlogSlug =>
  fileName.replace(MD_FILE_NAME_PATTERN, "") as BlogSlug;

export async function getAllBlogs(): Promise<Blog[]> {
  const files = await repo.blogFiles();
  const blogs = await Promise.all(
    files.map(async ({ content, fileName }): Promise<Blog> => {
      const { data, content: markdownBody } = matter(content);
      const slug = fileNameIntoSlug(fileName);
      sanitizeFrontmatterDate(data);
      if (!validateFrontmatter(data)) {
        console.error("invalid markdown with frontmatter:", content);
        throw new Error("invalid metadata");
      }
      return { slug, markdownBody, frontmatter: data };
    }),
  );
  blogs.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return blogs;
}
