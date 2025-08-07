export async function getProductBySlug(slug: string) {
  const { products } = await import('@/data/products');
  return products.find((product) => product.slug === slug);
}
