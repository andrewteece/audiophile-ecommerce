import type { Metadata } from 'next';
import { getMetadataBySlug } from '@/lib/getMetadatabySlug';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return getMetadataBySlug(params.slug);
}
