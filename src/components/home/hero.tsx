'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      className="relative bg-[url('/assets/home/mobile/image-header.jpg')] 
             md:bg-[url('/assets/home/tablet/image-header.jpg')] 
             lg:bg-[url('/assets/home/desktop/image-hero.jpg')] 
             bg-cover bg-[center_top_95%] md:bg-[center_top_40%] lg:bg-[center_top_45%] 
             text-white overflow-hidden"
    >
      {/* Optional dark overlay for contrast */}
      <div className='absolute inset-0 bg-black/50 z-0' />

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
