'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getBlurDataURL } from '@/lib/blurData';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

export function Hero() {
  return (
    <section
      className='relative text-white min-h-[600px] overflow-hidden'
      role='banner'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0 h-full'>
        <ResponsiveImage
          alt='XX99 Mark II Headphones – flagship over-ear model on dark background'
          priority
          placeholder='blur'
          blurDataURL={getBlurDataURL('/assets/shared/mobile/image-header.jpg')}
          images={{
            mobile: '/assets/home/mobile/image-header.jpg',
            tablet: '/assets/home/tablet/image-header.jpg',
            desktop: '/assets/home/desktop/image-hero.jpg',
          }}
          objectPosition='top'
          className='object-cover object-top lg:object-center'
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex items-center justify-center text-center lg:text-left h-full px-6 py-24'>
        <div className='max-w-2xl mx-auto'>
          <p className='uppercase text-sm tracking-[0.5em] text-white/70 mb-4'>
            New Product
          </p>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight'>
            XX99 Mark II <br /> Headphones
          </h1>
          <p className='mt-6 text-white/80 text-base leading-relaxed'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate listener.
          </p>
          <Button
            asChild
            className='mt-8 bg-primary text-white hover:bg-primary/90 uppercase tracking-wide text-sm'
          >
            <Link href='/product/xx99-mark-two-headphones'>See Product</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
