// import { Container } from '@/components/layout/container';
import { Hero } from '@/components/home/hero';
import { CategoryGrid } from '@/components/home/category-grid';
import { Zx9Feature } from '@/components/home/zx9-feature';
import { Zx7Feature } from '@/components/home/zx7-feature';
import { Yx1Feature } from '@/components/home/yx1-feature';
import { BestGear } from '@/components/home/best-gear';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Zx9Feature />
      <Zx7Feature />
      <Yx1Feature />
      <BestGear />
    </>
  );
}
