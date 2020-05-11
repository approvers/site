import {getSortedBlogMetadatas, Blog} from '../lib/blog-fetch';
import {DateString} from '../components/date';
import {Header} from '../components/header';
import {Layout} from '../components/layout';
import {NextPage, GetStaticProps} from 'next';
import Link from 'next/link';
import {FC} from 'react';

const BlogCard: FC<{id: string; title: string; date: string}> = ({
  id,
  title,
  date,
}) => (
  <div>
    <Link href={`/blog/${id}`}>
      <a>
        {title}
        {' - '}
        <DateString dateString={date} />
      </a>
    </Link>
  </div>
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
    <style jsx>{``}</style>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogMetadatas();
  return {props: {blogs}};
};

export default BlogPage;
