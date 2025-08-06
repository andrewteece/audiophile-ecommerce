'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ResponsiveImage from '@/components/ui/responsiveImage';
import { getBlurDataURL } from '@/lib/blurData';
import { Container } from '@/components/layout/container';

export default function Zx9Feature() {
  return (
    <Container>
      <section className='overflow-hidden rounded-lg bg-primary px-6 py-14 text-center text-white md:px-20 md:py-16 lg:mb-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-32 lg:py-20'>
        <div className='relative mx-auto w-full max-w-[18rem] h-[275px] md:max-w-[22rem] md:h-[315px] lg:max-w-[28rem] lg:h-[400px]'>
          <ResponsiveImage
            alt='ZX9 Speaker'
            images={{
              mobile: '/assets/home/mobile/image-speaker-zx9.png',
              tablet: '/assets/home/tablet/image-speaker-zx9.png',
              desktop: '/assets/home/desktop/image-speaker-zx9.png',
            }}
            placeholder='blur'
            blurDataURL={getBlurDataURL(
              '/assets/home/mobile/image-speaker-zx9.jpg'
            )}
            objectPosition='center'
            className='object-contain'
            ratio='auto'
            priority
          />
        </div>

        <div className='mt-10 lg:mt-0 lg:text-left'>
          <h2 className='text-4xl font-bold uppercase leading-tight tracking-wide md:text-5xl'>
            ZX9 <br /> Speaker
          </h2>
          <p className='mx-auto my-6 max-w-md text-white/75 md:my-8 lg:mx-0'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button asChild className='bg-black text-white hover:bg-neutral-800'>
            <Link href='/products/zx9-speaker'>See Product</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
