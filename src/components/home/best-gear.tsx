'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/container';

export function BestGear() {
  return (
    <section className='py-24'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Image */}
          <div className='rounded-lg overflow-hidden order-1 md:order-2'>
            <Image
              src='/assets/shared/desktop/image-best-gear.jpg'
              alt='Man enjoying audio gear'
              width={1080}
              height={1080}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Text */}
          <div className='text-center md:text-left order-2 md:order-1'>
            <h2 className='text-3xl md:text-4xl font-bold uppercase tracking-wide text-neutral-900'>
              Bringing you the <span className='text-primary'>best</span> audio
              gear
            </h2>
            <p className='mt-6 text-neutral-700 text-base leading-relaxed'>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
