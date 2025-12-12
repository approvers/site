import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const links = defineCollection({
  loader: file("./data/links.yaml"),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

export const collections = { links };
