import { Blog, BlogInfo, getAllBlogInfos, getBlogFromId } from "../../lib/blog-fetch";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { DateString } from "../../components/date";
import { Layout } from "../../components/layout";
import MarkdownIt from "markdown-it";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItFrontMatter from "markdown-it-front-matter";
import { PrevNextLink } from "../../components/prev-next-link";
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
  const prevNext = (
    <PrevNextLink
      prevLinkHref={post.prevId !== "" ? post.prevId : null}
      nextLinkHref={post.nextId !== "" ? post.nextId : null}
    />
  );
  const bodyHtml = md.render(emojify`${post.content}`);
  return (
    <Layout pageName={`限界開発鯖 - ブログ - ${post.title}`}>
      <VStack>
        <Heading m={8} textAlign="center">
          {post.title}
        </Heading>
        <Text>
          {post.author}
          {" - "}
          <DateString dateString={post.date} />
        </Text>
      </VStack>
      {prevNext}
      <Container as="article" className={styles.markdown}>
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </Container>
      {prevNext}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogPostPageProps, BlogInfo> = async ({ params }) => {
  if (params == null) {
    throw new Error("invalid params");
  }
  console.dir(params);
  const post = await getBlogFromId(params.id);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<BlogInfo> = async () => {
  const paths = await getAllBlogInfos();
  return { paths, fallback: false };
};

export default BlogPostPage;
