import { getSortedBlogMetadatas, Blog } from "../lib/blog-fetch";
import { DateString } from "../components/date";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import styles from "../sass/pages/blog.module.sass";

const BlogCard: FC<Blog> = ({ id, title, date }) => (
  <div className={styles.blogCard}>
    <Link href={`/blog/${id}`}>
      <a className={styles.pageLink}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <DateString dateString={date} />
      </a>
    </Link>
  </div>
);

const BlogPage: NextPage<{ blogs: Blog[] }> = ({ blogs }) => (
  <>
    <Layout pageName="限界開発鯖 - ブログ">
      <Header />
      <div className={styles.blog}>
        <h1 className={styles.title}>ブログ</h1>
        <section className={styles.memberMainContents}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </section>
      </div>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogMetadatas();
  return { props: { blogs } };
};

export default BlogPage;
