// src/app/product/[slug]/page.tsx or metadata.ts
import { getProductBySlug } from '@/lib/loadProductBySlug';
import type { Metadata } from 'next';

export async function generateMetadata(props: {
  params: { slug: string };
}): Promise<Metadata> {
  const { params } = props; // ✅ ensure it's awaited implicitly
  const product = await getProductBySlug(params.slug);

  return {
    title: product?.name || 'Product',
    description: product?.description || 'Audiophile product page',
  };
}
