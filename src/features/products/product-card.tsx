'use client';

import { Product } from '@/types/schemas/product';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { getBlurDataURL } from '@/lib/blurData';

type Props = {
  product: Product;
  reverse?: boolean;
};

export function ProductCard({ product, reverse = false }: Props) {
  const { slug, name, description, new: isNew, categoryImage } = product;

  const blur = getBlurDataURL(categoryImage.desktop);

  return (
    <section
      className={`flex flex-col-reverse gap-8 md:gap-16 md:flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center lg:gap-32`}
    >
      <div className='flex-1 w-full rounded-lg overflow-hidden'>
        <ResponsiveImage
          images={categoryImage}
          alt={name}
          priority={true}
          blurDataURL={blur}
          objectPosition='center'
          ratio='wide'
        />
      </div>

      <div className='flex-1 text-center lg:text-left px-6 md:px-0'>
        {isNew && (
          <p className='text-sm tracking-widest text-orange-500 uppercase mb-4'>
            New Product
          </p>
        )}
        <h2 className='text-3xl md:text-4xl font-bold uppercase mb-6'>
          {name}
        </h2>
        <p className='text-muted-foreground mb-6'>{description}</p>
        <Link href={`/product/${slug}`}>
          <Button>See Product</Button>
        </Link>
      </div>
    </section>
  );
}
