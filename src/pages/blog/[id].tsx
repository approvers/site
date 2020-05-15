import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/layout";
import { Header } from "../../components/header";
import { DateString } from "../../components/date";
import { getAllBlogIds, getBlogFromId, Blog } from "../../lib/blog-fetch";
import Markdown from "markdown-to-jsx";
import styles from "../../sass/pages/blog.module.sass";

type BlogPostPageProps = {
  post: Blog;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => (
  <>
    <Layout pageName={`限界開発鯖 - ブログ - ${post.title}`}>
      <Header />
      <div className={styles.blogContents}>
        <h1 className={styles.title}>{post.title}</h1>
        <DateString dateString={post.date} />
        <div className={styles.markdown}>
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<BlogPostPageProps, { id: string }> = async ({
  params,
}) => {
  const post = await getBlogFromId(params.id);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllBlogIds();
  return { paths, fallback: false };
};

export default BlogPostPage;
