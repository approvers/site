import { getSortedBlogMetadatas, Metadata } from "../lib/blog-fetch";
import { DateString } from "../components/date";
import { Layout } from "../components/layout";
import { Paper } from "../components/paper";
import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import type { FC } from "react";
import styles from "../scss/pages/blog.module.scss";
import { Button } from "../components/button";

const BlogCard: FC<Metadata> = ({ id, title, date }) => (
  <Paper>
    <img src="/alternative.png" className={styles.avatar} />
    <div className={styles.cardText}>
      <h3 className={styles.blogTitle}>{title}</h3>
      <DateString dateString={date} />
      <Link href={`/blog/${id}`}>
        <Button>
          <a className={styles.pageLink}>記事を読む &rarr;</a>
        </Button>
      </Link>
    </div>
  </Paper>
);

const BlogPage: NextPage<{ blogs: Metadata[] }> = ({ blogs }) => (
  <Layout pageName="限界開発鯖 - ブログ">
    <h1 className={styles.title}>ブログ</h1>
    <section className={styles.main}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogMetadatas();
  return { props: { blogs } };
};

export default BlogPage;
