'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Zx9Feature() {
  return (
    <Container>
      <section className='relative overflow-hidden bg-primary rounded-xl'>
        {/* Background Circles SVG */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[944px] h-[944px] z-0 pointer-events-none'>
          <Image
            src='/assets/home/desktop/pattern-circles.svg'
            alt=''
            role='presentation'
            fill
            className='object-contain'
          />
        </div>

        {/* Content constrained and padded inside Container */}
        <div className='relative z-10 py-24 lg:py-32'>
          <div className='flex flex-col-reverse items-center justify-between gap-16 lg:flex-row'>
            {/* Text Content */}
            <div className='text-center lg:text-left max-w-md text-primary-foreground'>
              <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold uppercase leading-tight tracking-wide'>
                ZX9 <br /> Speaker
              </h2>
              <p className='mt-6 text-primary-foreground/75 text-base md:text-lg'>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button
                asChild
                className='mt-8 bg-black text-white hover:bg-neutral-800 uppercase tracking-wide text-sm'
              >
                <Link
                  href='/product/zx9-speaker'
                  aria-label='See ZX9 Speaker product page'
                >
                  See Product
                </Link>
              </Button>
            </div>

            {/* Product Image */}
            <div className='relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-96 lg:w-[410px] lg:h-[493px] z-10'>
              <Image
                src='/assets/home/desktop/image-speaker-zx9.png'
                alt='ZX9 Speaker'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
