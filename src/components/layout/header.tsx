import Link from 'next/link';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Container } from './container';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Headphones', href: '/category/headphones' },
  { label: 'Speakers', href: '/category/speakers' },
  { label: 'Earphones', href: '/category/earphones' },
];

export function Header() {
  return (
    <header className='bg-background text-foreground border-b border-border'>
      <Container className='flex items-center justify-between py-6'>
        {/* Mobile Menu + Logo */}
        <div className='flex items-center gap-4 md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label='Open menu'>
                <Menu className='w-6 h-6' />
              </button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='bg-background text-foreground w-3/4 max-w-sm'
            >
              <div className='mt-10'>
                <nav className='flex flex-col gap-6 text-lg uppercase tracking-widest font-medium px-4'>
                  {navLinks.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className='hover:text-primary transition-colors'
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            href='/'
            className='text-lg font-bold uppercase tracking-widest'
          >
            Audiophile
          </Link>
        </div>

        {/* Logo (Desktop) */}
        <Link
          href='/'
          className='hidden md:block text-xl font-bold uppercase tracking-widest'
        >
          Audiophile
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium'>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className='hover:text-primary transition-colors'
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Cart Placeholder */}
        <button className='ml-4' aria-label='Cart'>
          <ShoppingCart className='w-6 h-6' />
        </button>
      </Container>
    </header>
  );
}
