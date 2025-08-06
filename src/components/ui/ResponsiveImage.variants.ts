// src/components/ui/ResponsiveImage.variants.ts
import { tv } from 'tailwind-variants';

export const responsiveImageWrapper = tv({
  variants: {
    ratio: {
      square: 'aspect-square',
      wide: 'aspect-[16/9]',
      tall: 'aspect-[3/4]',
    },
  },
  defaultVariants: {
    ratio: 'square', // or remove to force explicit usage
  },
});
