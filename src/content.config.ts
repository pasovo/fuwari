import { defineCollection } from "astro:content";

export const collections = {
  spec: defineCollection({
    type: "content",
    schema: undefined,
  }),
};
