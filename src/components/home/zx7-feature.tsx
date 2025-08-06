'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import ResponsiveImage from '@/components/ui/responsiveImage';
import { getBlurDataURL } from '@/lib/blurData';

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

          {/* Background Image */}
          <ResponsiveImage
            alt='ZX7 Speaker – modern speaker on neutral background'
            priority
            placeholder='blur'
            blurDataURL={getBlurDataURL(
              '/assets/home/mobile/image-speaker-zx7.jpg'
            )}
            images={{
              mobile: '/assets/home/mobile/image-speaker-zx7.jpg',
              tablet: '/assets/home/tablet/image-speaker-zx7.jpg',
              desktop: '/assets/home/desktop/image-speaker-zx7.jpg',
            }}
            objectPosition='center'
            className='absolute inset-0 object-cover'
          />
        </div>
      </Container>
    </section>
  );
}
