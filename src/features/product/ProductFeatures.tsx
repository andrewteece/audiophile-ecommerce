import type { Product } from '@/types/product';

export default function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className='grid md:grid-cols-[2fr_1fr] gap-12'>
      <div>
        <h2 className='text-2xl font-bold uppercase'>Features</h2>
        <p className='mt-6 whitespace-pre-line text-muted-foreground'>
          {product.features}
        </p>
      </div>
      <div>
        <h3 className='text-2xl font-bold uppercase'>In the Box</h3>
        <ul className='mt-6 space-y-2'>
          {product.includes.map(({ quantity, item }) => (
            <li key={item}>
              <span className='text-primary font-semibold mr-3'>
                {quantity}x
              </span>
              <span className='text-muted-foreground'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
