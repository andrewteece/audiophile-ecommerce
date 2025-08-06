import fs from 'fs';
import path from 'path';
import { ProductsSchema, type ProductList } from '@/types/schemas/product';

const filePath = path.join(process.cwd(), 'data', 'data.json');

export function loadProducts(): ProductList {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw);
  const result = ProductsSchema.safeParse(parsed);

  if (!result.success) {
    console.error('❌ Product data validation failed:', result.error.format());
    throw new Error('Invalid product data.');
  }

  return result.data;
}
