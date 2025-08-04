'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Zx7Feature() {
  return (
    <section className='py-24'>
      <Container>
        <div className='relative min-h-[320px] rounded-lg overflow-hidden bg-neutral-200 px-4 sm:px-6 py-16 lg:py-24 lg:px-24 flex flex-col lg:flex-row items-center justify-between'>
          {/* Text */}
          <div className='text-center lg:text-left z-10'>
            <h2 className='text-3xl md:text-4xl font-bold uppercase tracking-wide text-neutral-900'>
              ZX7 Speaker
            </h2>
            <Button
              asChild
              variant='outline'
              className='mt-8 border-black text-black hover:bg-neutral-300 uppercase tracking-wide text-sm'
            >
              <Link
                href='/product/zx7-speaker'
                aria-label='See ZX7 Speaker product page'
              >
                See Product
              </Link>
            </Button>
          </div>

          {/* Background Image */}
          <Image
            src='/assets/home/desktop/image-speaker-zx7.jpg'
            alt='ZX7 Speaker'
            fill
            className='absolute inset-0 object-cover opacity-20 pointer-events-none'
            priority
          />
        </div>
      </Container>
    </section>
  );
}
