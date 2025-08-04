'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Zx7Feature() {
  return (
    <section className='py-24'>
      <Container>
        <div className='relative min-h-[320px] overflow-hidden rounded-lg bg-neutral-200 px-4 sm:px-6 lg:px-24 py-16 lg:py-24 flex items-center justify-between'>
          {/* Text Content */}
          <div className='z-10 text-center lg:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold uppercase tracking-wide text-black'>
              ZX7 Speaker
            </h2>
            <Button
              asChild
              variant='outline'
              className='mt-8 border-black text-black hover:bg-neutral-300 uppercase tracking-wide text-sm'
            >
              <Link
                href='/product/zx7-speaker'
                aria-label='View ZX7 Speaker product details'
              >
                See Product
              </Link>
            </Button>
          </div>

          {/* Responsive Background Images */}
          {/* Mobile */}
          <Image
            src='/assets/home/mobile/image-speaker-zx7.jpg'
            alt='ZX7 Speaker'
            fill
            className='absolute inset-0 object-cover block sm:hidden '
            priority
          />
          {/* Tablet */}
          <Image
            src='/assets/home/tablet/image-speaker-zx7.jpg'
            alt='ZX7 Speaker'
            fill
            className='absolute inset-0 object-cover hidden sm:block lg:hidden opacity-20'
            priority
          />
          {/* Desktop */}
          <Image
            src='/assets/home/desktop/image-speaker-zx7.jpg'
            alt='ZX7 Speaker'
            fill
            className='absolute inset-0 object-cover hidden lg:block opacity-20'
            priority
          />
        </div>
      </Container>
    </section>
  );
}
