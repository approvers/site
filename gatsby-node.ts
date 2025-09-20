import { type GatsbyNode, type NodeInput } from "gatsby";
import path from "path";

import { getAllBlogs } from "./src/lib/blog-fetch";
import { getMembers } from "./src/lib/member-fetch";

export const sourceNodes: GatsbyNode["sourceNodes"] = async (api) => {
  const members = await getMembers();
  for (const member of members) {
    const id = api.createNodeId(member.discordId);
    const node = {
      ...member,
      id,
      _id: member.discordId,
      parent: null,
      children: [],
      internal: {
        type: "Member",
        contentDigest: api.createContentDigest(member),
      },
    } satisfies NodeInput;
    api.actions.createNode(node);
  }

  const blogs = await getAllBlogs();
  for (const blog of blogs) {
    const id = api.createNodeId(blog.slug);
    const node = {
      ...blog,
      id,
      _id: blog.slug,
      parent: null,
      children: [],
      internal: {
        type: "Blog",
        contentDigest: api.createContentDigest(blog),
      },
    } satisfies NodeInput;
    api.actions.createNode(node);
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = (api) => {
  api.actions.createTypes(`
    enum SNSKind {
      twitter
      github
    }
    type SNSLinkInfo {
      type: SNSKind!
      name: String!
    }
    type Member implements Node {
      username: String!
      discordId: ID!
      associatedLinks: [SNSLinkInfo!]!
    }
  `);
};

export const createPages: GatsbyNode["createPages"] = async (api) => {
  const pages = await getAllBlogs();

  const component = path.resolve("src/templates/blog-post.tsx");
  api.reporter.info(`generating ${pages.length} pages`);
  for (let i = 0; i < pages.length; ++i) {
    const slug = pages[i].slug;
    const prevSlug = i > 0 ? path.basename(pages[i - 1].slug) : null;
    const nextSlug = i < pages.length - 1 ? path.basename(pages[i + 1].slug) : null;
    api.actions.createPage({
      path: `/blog/${slug}`,
      component,
      context: {
        slug,
        content: pages[i].markdownBody,
        frontmatter: pages[i].frontmatter,
        prevSlug,
        nextSlug,
      },
    });
  }
};
