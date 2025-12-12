import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

import { getAllBlogs } from "./lib/blog-fetch";
import { getMembers } from "./lib/member-fetch";

const links = defineCollection({
  loader: file("./data/links.yaml"),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const members = defineCollection({
  loader: async () => {
    const dataset = await getMembers();
    return dataset.map((mem) => ({ ...mem, id: mem.discordId }));
  },
  schema: z.object({
    username: z.string(),
    discordId: z.string(),
    associatedLinks: z.array(
      z.union([
        z.object({
          type: z.literal("twitter"),
          name: z.string(),
        }),
        z.object({
          type: z.literal("github"),
          name: z.string(),
        }),
      ]),
    ),
  }),
});

const blogs = defineCollection({
  loader: async () => {
    const dataset = await getAllBlogs();
    return dataset.map((blog) => ({ id: blog.slug, ...blog }));
  },
  schema: z.object({
    slug: z.string(),
    markdownBody: z.string(),
    frontmatter: z.object({
      date: z.string(),
      title: z.string(),
      author: z.string(),
      authorId: z.string(),
    }),
  }),
});

export const collections = { links, members, blogs };
