import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { getProductBySlug } from '@/lib/loadProductBySlug';

// ✅ Safe Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  return {
    title: product?.name || 'Product',
    description: product?.description || '',
  };
}

// ✅ Product Page
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Your product UI */}
    </div>
  );
}
