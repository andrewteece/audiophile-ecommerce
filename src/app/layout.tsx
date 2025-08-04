import '../styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata = {
  title: 'Audiophile',
  description: 'Premium audio gear store built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={manrope.variable}>
      <body className='font-sans bg-background text-foreground'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
