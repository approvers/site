import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import {Layout} from '../../components/layout';
import {Header} from '../../components/header';
import {getAllBlogIds, getBlogFromId, Blog} from '../../lib/blog-fetch';

type BlogPostPageProps = {
  post: Blog;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({post}) => (
  <>
    <Layout>
      <Header />
      <h1>{post.title}</h1>
      {post.id} - {post.date}
      <hr />
      <div dangerouslySetInnerHTML={{__html: post.contentHtml}} />
    </Layout>

    <style jsx>{`
      hr {
        width: 90vw;
      }
    `}</style>
  </>
);

export const getStaticProps: GetStaticProps<
  BlogPostPageProps,
  {id: string}
> = async ({params}) => {
  const post = await getBlogFromId(params.id);
  return {props: {post}};
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();
  return {paths, fallback: false};
};

export default BlogPostPage;
