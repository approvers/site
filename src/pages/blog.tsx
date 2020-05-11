import {Header} from '../components/header';
import {NextPage, GetStaticProps} from 'next';
import {getSortedBlogs, Blog} from '../lib/blog-fetch';
import {Layout} from '../components/layout';
import Link from 'next/link';

const BlogPage: NextPage<{blogs: Blog[]}> = ({blogs}) => (
  <>
    <Layout>
      <Header />
      <h1>ブログ</h1>
      <section>
        {blogs.map(({id, date, title}) => (
          <div key={id}>
            <Link href={`/blog/${id}`}>
              <a>
                {title} - {date}
              </a>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
    <style jsx>{``}</style>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogs();
  return {props: {blogs}};
};

export default BlogPage;
