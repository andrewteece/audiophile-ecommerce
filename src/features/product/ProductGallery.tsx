import Image from 'next/image';
import type { Product } from '@/types/product';

export default function ProductGallery({ product }: { product: Product }) {
  const { first, second, third } = product.gallery;
  const src = (p: string) => p.replace('./', '/');

  return (
    <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {[first, second, third].map((g, i) => (
        <div
          key={i}
          className='relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-muted'
        >
          <Image
            src={src(g.desktop)}
            alt={`${product.name} gallery ${i + 1}`}
            fill
            className='object-cover'
          />
        </div>
      ))}
    </section>
  );
}
