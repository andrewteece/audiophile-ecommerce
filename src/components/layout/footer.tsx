import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';

export function Footer() {
  return (
    <footer className='bg-black text-white'>
      <Container className='flex flex-col items-center gap-12 py-14 md:items-start md:gap-10 lg:gap-14'>
        {/* Top Section */}
        <div className='flex flex-col items-center gap-8 text-center md:items-start md:text-left'>
          {/* Logo */}
          <Link href='/'>
            <Image
              src='/assets/shared/desktop/logo.svg'
              alt='Audiophile logo'
              width={143}
              height={25}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className='flex flex-col gap-4 text-sm uppercase tracking-widest md:flex-row md:gap-6'>
            <Link href='/'>Home</Link>
            <Link href='/headphones'>Headphones</Link>
            <Link href='/speakers'>Speakers</Link>
            <Link href='/earphones'>Earphones</Link>
          </nav>
        </div>

        {/* Middle Section - Description */}
        <p className='max-w-md text-sm leading-relaxed opacity-70 text-center md:text-left'>
          Audiophile is an all in one stop to fulfill your audio needs. We’re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* Bottom Section */}
        <div className='flex flex-col items-center gap-8 w-full md:flex-row md:justify-between md:items-end'>
          {/* Copyright */}
          <p className='text-sm opacity-70 text-center md:text-left'>
            © {new Date().getFullYear()} Audiophile. All Rights Reserved
          </p>

          {/* Social Icons */}
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
