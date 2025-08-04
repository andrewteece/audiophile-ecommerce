import { Container } from './container';

export function Footer() {
  return (
    <footer className='bg-black text-white mt-10'>
      <Container className='py-10 text-center text-sm opacity-70'>
        <p>@ {new Date().getFullYear()} Audiophile. All rights reserved.</p>
      </Container>
    </footer>
  );
}
