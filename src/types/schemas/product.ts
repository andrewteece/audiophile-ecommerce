import { z } from 'zod';

export const ImageSetSchema = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

export const GallerySchema = z.object({
  first: ImageSetSchema,
  second: ImageSetSchema,
  third: ImageSetSchema,
});

export const IncludeItemSchema = z.object({
  quantity: z.number(),
  item: z.string(),
});

export const OtherProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  image: ImageSetSchema,
});

export const ProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: ImageSetSchema,
  category: z.string(),
  categoryImage: ImageSetSchema,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(IncludeItemSchema),
  gallery: GallerySchema,
  others: z.array(OtherProductSchema),
});

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type ProductList = z.infer<typeof ProductsSchema>;
