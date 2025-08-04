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
    <section className='py-20 bg-background'>
      <Container className='grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 '>
        {categories.map(({ name, slug, image }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className='relative bg-muted rounded-lg py-10 flex flex-col items-center text-center group'
          >
            <div className='w-36 h-36 relative -mt-20'>
              <Image
                src={image}
                alt={name}
                fill
                className='object-contain'
                sizes='(max-width: 768px) 100px, 150px'
              />
            </div>

            <h2 className='mt-6 text-lg font-bold uppercase tracking-widest'>
              {name}
            </h2>

            <span className='mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors tracking-wide'>
              Shop &rarr;
            </span>
          </Link>
        ))}
      </Container>
    </section>
  );
}
