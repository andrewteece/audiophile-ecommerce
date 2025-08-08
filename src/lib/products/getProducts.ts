import { products } from '@/data/products';
import type { Product } from '@/types/product'; // adjust to your type

export async function getProducts(): Promise<Product[]> {
  // in real life this could hit a DB or CMS
  return products;
}
