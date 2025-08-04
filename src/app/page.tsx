import { Container } from '@/components/layout/container';

export default function Home() {
  return (
    <section className='bg-background text-foreground'>
      <Container>
        <h1 className='text-4xl font-bold tracking-wide uppercase mb-4'>
          Welcome to Audiophile
        </h1>
        <p className='text-muted-foreground'>
          High-end audio gear. Built with Next.js.
        </p>
      </Container>
    </section>
  );
}
