"use client";

import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Blog } from "../../lib/blog-fetch";
import { DateString } from "../../components/date";
import MarkdownIt from "markdown-it";
import { full as MarkdownItEmoji } from "markdown-it-emoji";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItFrontMatter from "markdown-it-front-matter";
import { PrevNextLink } from "../../components/prev-next-link";
import styles from "../../scss/pages/blog/markdown.module.scss";

const md = MarkdownIt({
  html: true,
  linkify: true,
})
  .use(MarkdownItFrontMatter)
  .use(MarkdownItFootnote)
  .use(MarkdownItEmoji);

export type BlogPostPageProps = {
  post: Blog;
};

export const Post = ({ post }: BlogPostPageProps) => {
  const prevNext = (
    <PrevNextLink
      prevLinkHref={post.prevId !== "" ? post.prevId : null}
      nextLinkHref={post.nextId !== "" ? post.nextId : null}
    />
  );
  const bodyHtml = md.render(post.content);
  return (
    <>
      <VStack>
        <Heading m={8} textAlign="center">
          {post.title}
        </Heading>
        <Text>
          <Link href={`https://github.com/${post.authorId}`} isExternal>
            {post.author}
          </Link>
          {" - "}
          <DateString dateString={post.date} />
        </Text>
      </VStack>
      {prevNext}
      <Container className={styles.markdown} as="article">
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </Container>
      {prevNext}
    </>
  );
};
