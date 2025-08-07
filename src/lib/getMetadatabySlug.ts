import { getProductBySlug } from './loadProductBySlug';
import type { Metadata } from 'next';

export async function getMetadataBySlug(slug: string): Promise<Metadata> {
  const product = await getProductBySlug(slug);

  if (!product) return {};

  return {
    title: `${product.name} | Audiophile`,
    description: product.description,
  };
}
