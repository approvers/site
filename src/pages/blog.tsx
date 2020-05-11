import {getSortedBlogMetadatas, Blog} from '../lib/blog-fetch';
import {DateString} from '../components/date';
import {Header} from '../components/header';
import {Layout} from '../components/layout';
import {NextPage, GetStaticProps} from 'next';
import Link from 'next/link';
import {FC} from 'react';
import {Card} from '../components/card';

const BlogCard: FC<Blog> = ({id, title, date}) => (
  <>
    <Link href={`/blog/${id}`}>
      <a>
        <Card>
          <h3>{title}</h3>
          <DateString dateString={date} />
        </Card>
      </a>
    </Link>
  </>
);

const BlogPage: NextPage<{blogs: Blog[]}> = ({blogs}) => (
  <>
    <Layout>
      <Header />
      <h1>ブログ</h1>
      <section>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </section>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogMetadatas();
  return {props: {blogs}};
};

export default BlogPage;
