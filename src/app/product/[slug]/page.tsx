import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/loadProducts';
import { getProductBySlug } from '@/lib/loadProductBySlug';

// Optional: add ISR if you want
export const revalidate = 60;

// ✅ Fix: generate static paths
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

// ✅ Safe Metadata
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(slug);
  return {
    title: product?.name || 'Product',
    description: product?.description || '',
  };
}

// ✅ Product Page
export default async function ProductPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <main className='space-y-24'>
      <section>
        <h1 className='text-3xl font-bold'>{product.name}</h1>
        <p className='text-muted-foreground max-w-xl mt-4'>
          {product.description}
        </p>
      </section>
    </main>
  );
}
