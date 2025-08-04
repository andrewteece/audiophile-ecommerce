'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Zx9Feature() {
  return (
    <section className='relative max-w-screen-xl mx-auto bg-primary text-primary-foreground py-24 lg:py-32 overflow-hidden rounded-lg md:rounded-xl'>
      <Container className='px-6 sm:px-8 flex flex-col-reverse items-center justify-between gap-16 lg:flex-row'>
        {/* Text Content */}
        <div className='text-center lg:text-left max-w-md z-10'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold uppercase leading-tight tracking-wide'>
            ZX9 <br /> Speaker
          </h2>
          <p className='mt-6 text-primary-foreground/75 text-base md:text-lg'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            asChild
            className='mt-8 uppercase tracking-wide text-sm bg-black text-white hover:bg-neutral-800'
          >
            <Link
              href='/product/zx9-speaker'
              aria-label='See ZX9 Speaker product page'
            >
              See Product
            </Link>
          </Button>
        </div>

        {/* Speaker Image */}
        <div className='relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-96 lg:w-[410px] lg:h-[493px] z-10'>
          <Image
            src='/assets/home/desktop/image-speaker-zx9.png'
            alt='ZX9 Speaker'
            fill
            className='object-contain'
            priority
          />
        </div>
      </Container>

      {/* Circles Background (decorative) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[944px] w-[944px] h-[944px] z-0 pointer-events-none'>
        <Image
          src='/assets/home/desktop/pattern-circles.svg'
          alt=''
          role='presentation'
          fill
          className='object-contain'
        />
      </div>
    </section>
  );
}
