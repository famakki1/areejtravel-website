import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    intro: z.string().optional(),
    image: z.string().optional(),
    mapEmbedUrl: z.string().url().optional(),
    mapOpenUrl: z.string().url().optional(),
    order: z.number().optional(),
    featured: z.boolean().optional(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
      style: z.string().optional(),
    })).optional(),
    clients: z.array(z.object({
      name: z.string(),
      image: z.string(),
      link: z.string().url().optional(),
    })).optional(),
    airlines: z.array(z.object({
      name: z.string(),
      image: z.string(),
    })).optional(),
  }),
});

export const collections = {
  home: homeCollection,
};
