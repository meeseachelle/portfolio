import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      company: z.string(),
      // One line a hiring manager can read in three seconds.
      summary: z.string(),
      role: z.string(),
      year: z.string(),
      // Kept short deliberately: three tags read as focus, eight read as noise.
      tags: z.array(z.string()).max(4),
      // The number that proves it worked. Optional, but push to fill it.
      impact: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Which ecosystem this work belongs to — drives related-work threading.
      habitat: z.enum(['ocean', 'land', 'built', 'systems']),
      order: z.number().default(99),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
