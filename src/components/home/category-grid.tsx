'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/container';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { getBlurDataURL } from '@/lib/blurData';
import Image from 'next/image';

const categories = [
  {
    name: 'Headphones',
    slug: 'headphones',
    image: {
      mobile: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
      tablet: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
      desktop: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
  },
  {
    name: 'Speakers',
    slug: 'speakers',
    image: {
      mobile: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
      tablet: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
      desktop: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
  },
  {
    name: 'Earphones',
    slug: 'earphones',
    image: {
      mobile: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
      tablet: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
      desktop: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
  },
];

export function CategoryGrid() {
  return (
    <section className='py-20 bg-background' aria-label='Product Categories'>
      <Container className='grid gap-12 sm:grid-cols-2 md:grid-cols-3 place-items-center'>
        {categories.map(({ name, slug, image }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className='relative bg-muted rounded-lg py-10 flex flex-col items-center text-center group w-full max-w-xs'
          >
            <div className='w-36 h-36 relative -mt-16 sm:-mt-20'>
              <ResponsiveImage
                alt={`Product category: ${name}`}
                images={image}
                placeholder='blur'
                blurDataURL={getBlurDataURL(image.mobile)}
                objectPosition='center'
              />
            </div>

            <h2 className='mt-6 text-lg font-bold uppercase tracking-widest'>
              {name}
            </h2>

            <span className='mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors tracking-wide flex items-center gap-2'>
              Shop
              <Image
                src='/assets/shared/desktop/icon-arrow-right.svg'
                alt=''
                width={8}
                height={12}
                role='presentation'
                aria-hidden='true'
                className='transition-transform group-hover:translate-x-1'
              />
            </span>
          </Link>
        ))}
      </Container>
    </section>
  );
}
