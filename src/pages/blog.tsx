import {Header} from '../components/header';
import {NextPage} from 'next';
import {getSortedBlogs, Blog} from '../lib/blog-fetch';
import {Layout} from '../components/layout';

const BlogPage: NextPage<{blogs: Blog[]}> = ({blogs}) => (
  <>
    <Layout>
      <Header />
      <h1>ブログ</h1>
      <section>
        {blogs.map(({id, date, title}) => (
          <div key={id}>
            {title} - {date}
          </div>
        ))}
      </section>
    </Layout>
    <style jsx>{``}</style>
  </>
);

export async function getStaticProps() {
  const blogs = await getSortedBlogs();
  return {props: {blogs}};
}

export default BlogPage;
