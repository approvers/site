import { Blog, getAllBlogInfos, getBlogFromId } from "../../lib/blog-fetch";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { DateString } from "../../components/date";
import { Layout } from "../../components/layout";
import Markdown from "markdown-to-jsx";
import emojify from "emojify-tag";
import styles from "../../scss/pages/blog/markdown.module.scss";

type BlogPostPageProps = {
  post: Blog;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => (
  <Layout pageName={`限界開発鯖 - ブログ - ${post.title}`}>
    <h1 className={styles.title}>{post.title}</h1>
    <DateString dateString={post.date} />
    <div className={styles.markdown}>
      <Markdown>{emojify`${post.content}`}</Markdown>
    </div>
  </Layout>
);

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
