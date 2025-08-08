'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types/product';

export default function ProductHeader({ product }: { product: Product }) {
  return (
    <section className='grid gap-8 md:grid-cols-2 items-center'>
      <div className='relative w-full aspect-square rounded-lg overflow-hidden bg-muted'>
        <Image
          src={product.image.desktop.replace('./', '/')}
          alt={product.name}
          fill
          className='object-cover'
          priority
        />
      </div>

      <div>
        {product.new && (
          <p className='uppercase tracking-[0.5em] text-primary mb-4'>
            New Product
          </p>
        )}
        <h1 className='text-3xl md:text-4xl font-bold uppercase'>
          {product.name}
        </h1>
        <p className='mt-6 text-muted-foreground'>{product.description}</p>
        <p className='mt-6 font-semibold'>$ {product.price.toLocaleString()}</p>
        <Button className='mt-6'>Add to Cart</Button>
      </div>
    </section>
  );
}
