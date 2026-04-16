import { defineCollection, z } from 'astro:content';

/**
 * Content Collection Schema for Complete Catalog
 *
 * This schema defines the structure for all resources in the complete catalog.
 * Each resource is a markdown file with frontmatter metadata.
 */
const completeCatalogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Optional metadata
    author: z.string().optional(),
    publishedDate: z.coerce.date().optional(),

    // Categorization
    tags: z.array(z.string()).default([]),
    dataThemes: z.array(z.string()).default([]),
    pedagogicalTags: z.array(z.string()).default([]),
    audienceAccess: z
      .object({
        teacher: z.boolean().default(true),
        student: z.boolean().default(true),
        community: z.boolean().default(true),
      })
      .default({
        teacher: true,
        student: true,
        community: true,
      }),
    sensitive: z.boolean().default(false),

    // Resource links
    url: z.string().url().optional(),
    fileUrl: z.string().url().optional(),

    // Additional optional fields
    featured: z.boolean().default(false),
    language: z.string().optional(),
  }),
});

/**
 * Export collections
 * Collections are automatically available in Astro via the content collections API
 */
export const collections = {
  'complete-catalog': completeCatalogCollection,
};
