import { type GatsbyNode, type NodeInput } from "gatsby";
import { getMembers } from "./src/lib/member-fetch";
import path from "path";

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
  const res = await api.graphql<{
    allMarkdownRemark: {
      nodes: {
        rawMarkdownBody: string;
        frontmatter: {
          title: string;
          author: string;
          authorId: string;
          date: string;
        };
        parent: {
          name: string;
        };
      }[];
    };
  }>(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
        nodes {
          rawMarkdownBody
          frontmatter {
            title
            author
            authorId
            date
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);
  if (res.errors) {
    api.reporter.error("querying markdown pages failed");
    return;
  }

  const pages = res.data?.allMarkdownRemark.nodes!;
  const component = path.resolve("src/templates/blog-post.tsx");
  for (let i = 0; i < pages.length; ++i) {
    const slug = path.basename(pages[i].parent.name);
    const prevSlug = i > 0 ? path.basename(pages[i - 1].parent.name) : null;
    const nextSlug = i < pages.length - 1 ? path.basename(pages[i + 1].parent.name) : null;
    api.actions.createPage({
      path: `/blog/${slug}`,
      component,
      context: {
        slug,
        content: pages[i].rawMarkdownBody,
        frontmatter: pages[i].frontmatter,
        prevSlug,
        nextSlug,
      },
    });
  }
};
