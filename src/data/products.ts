import { ProductsSchema, type Product } from '@/types/schemas/product';
import rawData from './data.json';

export const products: Product[] = ProductsSchema.parse(rawData);
