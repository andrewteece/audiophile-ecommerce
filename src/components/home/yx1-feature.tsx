'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Yx1Feature() {
  return (
    <section className='pt-4 pb-16'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Image */}
          <div className='rounded-lg overflow-hidden'>
            <Image
              src='/assets/home/desktop/image-earphones-yx1.jpg'
              alt='YX1 Earphones'
              width={1080}
              height={1080}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Text Box */}
          <div className='bg-neutral-200 rounded-lg px-8 py-16 flex items-center'>
            <div className='text-center lg:text-left max-w-md mx-auto lg:mx-0'>
              <h2 className='text-3xl font-bold uppercase tracking-wide text-neutral-900'>
                YX1 Earphones
              </h2>
              <Button
                asChild
                variant='outline'
                className='mt-8 border-black text-black hover:bg-neutral-300 uppercase tracking-wide text-sm'
              >
                <Link
                  href='/product/yx1-earphones'
                  aria-label='See YX1 Earphones product page'
                >
                  See Product
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
