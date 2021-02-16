import { Blog, getAllBlogInfos, getBlogFromId } from "../../lib/blog-fetch";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { DateString } from "../../components/date";
import { Layout } from "../../components/layout";
import MarkdownIt from "markdown-it";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItFrontMatter from "markdown-it-front-matter";
import emojify from "emojify-tag";
import styles from "../../scss/pages/blog/markdown.module.scss";

const md = MarkdownIt({
  html: true,
  linkify: true,
})
  .use(MarkdownItFrontMatter)
  .use(MarkdownItFootnote);

type BlogPostPageProps = {
  post: Blog;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  const bodyHtml = md.render(emojify`${post.content}`);
  return (
    <Layout pageName={`限界開発鯖 - ブログ - ${post.title}`}>
      <header>
        <h1 className={styles.title}>{post.title}</h1>
        <div>
          {post.author}
          {" - "}
          <DateString dateString={post.date} />
        </div>
      </header>
      <article className={styles.markdown}>
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </article>
    </Layout>
  );
};

type BlogPostPagePathProps = {
  id: string;
  lastUpdate: string;
};

export const getStaticProps: GetStaticProps<BlogPostPageProps, BlogPostPagePathProps> = async ({
  params,
}) => {
  if (params == null) {
    throw new Error("invalid params");
  }

  const post = await getBlogFromId(params.id);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths<BlogPostPagePathProps> = async () => {
  const paths = await getAllBlogInfos();
  return { paths, fallback: false };
};

export default BlogPostPage;
