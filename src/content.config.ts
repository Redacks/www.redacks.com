import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    date: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    date: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, blog };
