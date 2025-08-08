import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { getProductBySlug } from '@/lib/loadProductBySlug';

// ✅ Safe Metadata
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await props?.params)?.slug; // safe usage
  const product = await getProductBySlug(slug);

  return {
    title: product?.name || 'Product',
    description: product?.description || '',
  };
}

// ✅ Product Page
export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await props?.params)?.slug; // safe usage
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Continue rendering product details */}
    </div>
  );
}
