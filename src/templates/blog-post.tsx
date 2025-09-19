import * as styles from "../scss/pages/blog/markdown.module.scss";
import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { DateString } from "../components/date";
import { ExternalLink } from "../components/link";
import { Layout } from "../components/layout";
import MarkdownIt from "markdown-it";
import { full as MarkdownItEmoji } from "markdown-it-emoji";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItFrontMatter from "markdown-it-front-matter";
import { PageProps } from "gatsby";
import { PrevNextLink } from "../components/prev-next-link";
import React from "react";

const md = MarkdownIt({
  html: true,
  linkify: true,
})
  .use(MarkdownItFrontMatter)
  .use(MarkdownItFootnote)
  .use(MarkdownItEmoji);

export default function Page({
  pageContext,
}: PageProps<
  unknown,
  {
    content: string;
    frontmatter: {
      title: string;
      author: string;
      authorId: string;
      date: string;
    };
    slug: string;
    prevSlug: string | null;
    nextSlug: string | null;
  }
>) {
  const {
    content,
    frontmatter: { author, authorId, date, title },
    prevSlug,
    nextSlug,
  } = pageContext;
  const prevNext = (
    <PrevNextLink
      prevLinkHref={prevSlug && `/blog/${prevSlug}`}
      nextLinkHref={nextSlug && `/blog/${nextSlug}`}
    />
  );
  const bodyHtml = md.render(content);
  return (
    <Layout title={title}>
      <VStack>
        <Heading m={8} textAlign="center">
          {title}
        </Heading>
        <Text>
          <ExternalLink href={`https://github.com/${authorId}`}>{author}</ExternalLink>
          {" - "}
          <DateString dateString={date} />
        </Text>
      </VStack>
      {prevNext}
      <Container className={styles.markdown} as="article">
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </Container>
      {prevNext}
    </Layout>
  );
}
