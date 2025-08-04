import Link from 'next/link';
import { Container } from './container';

export function Header() {
  return (
    <header className='bg-black text-white'>
      <Container className='flex items-center justify-between py-6'>
        <Link href='/' className='text-xl  font-bold uppercase tracking-wider'>
          audiophile
        </Link>
        {/* TODO: add desktop nav + mobile nav here */}
      </Container>
    </header>
  );
}
