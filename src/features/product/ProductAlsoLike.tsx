import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';
import { Button } from '@/components/ui/button';

export default function ProductAlsoLike({ product }: { product: Product }) {
  const src = (p: string) => p.replace('./', '/');

  return (
    <section className='space-y-10'>
      <h2 className='text-2xl font-bold uppercase text-center'>
        You may also like
      </h2>
      <div className='grid gap-8 md:grid-cols-3'>
        {product.others.map((o) => (
          <div key={o.slug} className='text-center'>
            <div className='relative w-full aspect-square rounded-lg overflow-hidden bg-muted'>
              <Image
                src={src(o.image.desktop)}
                alt={o.name}
                fill
                className='object-cover'
              />
            </div>
            <h3 className='mt-6 text-xl font-bold uppercase'>{o.name}</h3>
            <Button asChild className='mt-6'>
              <Link href={`/product/${o.slug}`}>See Product</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
