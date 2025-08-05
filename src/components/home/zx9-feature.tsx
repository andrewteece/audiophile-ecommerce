'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Zx9Feature() {
  return (
    <Container>
      <div className='relative overflow-hidden bg-primary text-primary-foreground rounded-lg'>
        {/* Background circles */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-0'>
          <Image
            src='/assets/home/desktop/pattern-circles.svg'
            alt='ZX9 Speaker – premium speaker with bold design and circular pattern'
            role='presentation'
            width={944}
            height={944}
            className='max-w-none'
          />
        </div>

        <div className='relative z-10 flex flex-col items-center text-center px-6 py-20 md:py-28 lg:flex-row lg:justify-between lg:items-center lg:px-24'>
          {/* Image */}
          <div className='relative w-full h-[300px] sm:h-[380px] md:h-[493px] lg:h-[493px]'>
            <Image
              src='/assets/home/desktop/image-speaker-zx9.png'
              alt='ZX9 Speaker'
              fill
              className='object-contain'
              priority
            />
          </div>

          {/* Text */}
          <div className='mt-10 lg:mt-0 lg:max-w-md text-white'>
            <h2 className='text-4xl md:text-6xl font-bold uppercase leading-tight tracking-wide'>
              ZX9 <br /> Speaker
            </h2>
            <p className='mt-6 text-primary-foreground/75 text-base md:text-lg'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
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
        </div>
      </div>
    </Container>
  );
}
