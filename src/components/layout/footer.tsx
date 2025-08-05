// components/footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';

export function Footer() {
  return (
    <footer className='bg-black text-white'>
      <Container className='flex flex-col items-center gap-8 py-14 text-center md:items-start md:text-left lg:gap-10'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/assets/shared/desktop/logo.svg'
            alt='Audiophile logo'
            width={143}
            height={25}
          />
        </Link>

        {/* Navigation */}
        <nav className='flex flex-col gap-4 text-sm uppercase tracking-widest md:flex-row md:gap-6'>
          <Link href='/'>Home</Link>
          <Link href='/headphones'>Headphones</Link>
          <Link href='/speakers'>Speakers</Link>
          <Link href='/earphones'>Earphones</Link>
        </nav>

        {/* Description */}
        <p className='max-w-md text-sm opacity-70'>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>

        {/* Bottom section */}
        <div className='flex flex-col items-center justify-between gap-6 w-full md:flex-row'>
          {/* Copyright */}
          <p className='text-sm opacity-70'>
            &copy; {new Date().getFullYear()} Audiophile. All Rights Reserved
          </p>

          {/* Social links */}
          <div className='flex gap-4'>
            <Link href='/' aria-label='Facebook'>
              <Image
                src='/assets/shared/desktop/icon-facebook.svg'
                alt='Facebook'
                width={24}
                height={24}
              />
            </Link>
            <Link href='/' aria-label='Twitter'>
              <Image
                src='/assets/shared/desktop/icon-twitter.svg'
                alt='Twitter'
                width={24}
                height={24}
              />
            </Link>
            <Link href='/' aria-label='Instagram'>
              <Image
                src='/assets/shared/desktop/icon-instagram.svg'
                alt='Instagram'
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
