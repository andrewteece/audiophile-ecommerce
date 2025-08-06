import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  isNew: z.boolean(),
  description: z.string(),
  price: z.number(),
  image: z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
  }),
});

export const productsSchema = z.array(productSchema);

export type Product = z.infer<typeof productSchema>;
