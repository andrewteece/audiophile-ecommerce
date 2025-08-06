'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { getBlurDataURL } from '@/lib/blurData';
import Link from 'next/link';

export default function BestGear() {
  return (
    <section className='pb-24 md:pb-28 lg:pb-[200px]'>
      <Container>
        <div className='grid gap-10 md:grid-cols-2 md:items-center md:gap-20 lg:gap-32'>
          {/* Image: on mobile it's first, on desktop it's second */}
          <div className='relative w-full aspect-[3/2] rounded-lg overflow-hidden order-1 md:order-2'>
            <ResponsiveImage
              alt='Man enjoying audio gear'
              priority
              placeholder='blur'
              blurDataURL={getBlurDataURL(
                '/assets/shared/mobile/image-best-gear.jpg'
              )}
              images={{
                mobile: '/assets/shared/mobile/image-best-gear.jpg',
                tablet: '/assets/shared/tablet/image-best-gear.jpg',
                desktop: '/assets/shared/desktop/image-best-gear.jpg',
              }}
              objectPosition='center'
            />
          </div>

          {/* Text: on mobile it's second, on desktop it's first */}
          <div className='text-center md:text-left order-2 md:order-1'>
            <h2 className='text-3xl font-bold leading-tight tracking-wide uppercase md:text-4xl lg:text-5xl'>
              Bringing you the <span className='text-primary'>best</span> audio
              gear
            </h2>

            <p className='mt-6 text-base text-muted-foreground lg:text-lg'>
              Located at the heart of New York City, Audiophile is the premier
              store for high-end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>

            <Button asChild className='mt-8'>
              <Link href='/'>See More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
