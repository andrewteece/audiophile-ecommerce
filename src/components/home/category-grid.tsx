'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';

const categories = [
  {
    name: 'Headphones',
    slug: 'headphones',
    image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    name: 'Speakers',
    slug: 'speakers',
    image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    name: 'Earphones',
    slug: 'earphones',
    image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
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
              <Image
                src={image}
                alt={`Product category: ${name}`}
                fill
                className='object-contain'
                sizes='(max-width: 768px) 100px, 150px'
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
                className='transition-transform group-hover:translate-x-1'
                role='presentation'
                aria-hidden='true'
              />
            </span>
          </Link>
        ))}
      </Container>
    </section>
  );
}
