'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      className='relative text-white overflow-hidden min-h-[600px]'
      role='banner'
    >
      {/* Responsive background image */}
      <Image
        src='/assets/home/mobile/image-header.jpg'
        alt='Audiophile XX99 Mark II Headphones'
        fill
        className='object-cover object-[center_top_95%] md:hidden'
        priority
      />
      <Image
        src='/assets/home/tablet/image-header.jpg'
        alt='Audiophile XX99 Mark II Headphones'
        fill
        className='object-cover object-[center_top_40%] hidden md:block lg:hidden'
        priority
      />
      <Image
        src='/assets/home/desktop/image-hero.jpg'
        alt='Audiophile XX99 Mark II Headphones'
        fill
        className='object-cover object-[center_top_45%] hidden lg:block'
        priority
      />

      {/* Optional dark overlay */}
      <div className='absolute inset-0 bg-black/50 z-0' />

      {/* Text content */}
      <div className='relative z-10 flex items-center justify-center text-center lg:text-left min-h-[600px] px-6 py-24'>
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
