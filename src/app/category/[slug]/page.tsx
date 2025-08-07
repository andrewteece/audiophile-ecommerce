import { products } from '@/data/products';
import { ProductCard } from '@/features/products/product-card';
import { notFound } from 'next/navigation';

export default async function CategoryPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const category = params.slug;
  const filtered = products.filter((p) => p.category === category);

  if (filtered.length === 0) return notFound();

  return (
    <main className='space-y-24'>
      <h1 className='text-4xl text-center uppercase py-10'>{category}</h1>
      {filtered.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          reverse={idx % 2 === 1}
        />
      ))}
    </main>
  );
}
