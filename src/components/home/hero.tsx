'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Hero() {
  return (
    <section className='bg-primary text-primary-foreground overflow-hidden'>
      <Container className='flex flex-col-reverse items-center justify-between gap-10 py-24 md:flex-row md:gap-20 lg:py-32'>
        {/* Text */}
        <div className='text-center md:text-left max-w-md'>
          <p className='uppercase text-sm tracking-[10px] opacity-75 mb-4'>
            New Product
          </p>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight'>
            XX99 Mark II <br /> Headphones
          </h1>
          <p className='mt-6 text-muted-foreground'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate listener.
          </p>
          <Button asChild className='mt-8 uppercase tracking-wide text-sm'>
            <Link href='/product/xx99-mark-two-headphones'>See Product</Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3]'>
          <Image
            src='/assets/home/mobile/image-header.jpg' // Update path if needed
            alt='XX99 Mark II Headphones'
            fill
            className='object-contain'
            priority
          />
        </div>
      </Container>
    </section>
  );
}
