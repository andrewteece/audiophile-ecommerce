// src/components/ui/ResponsiveImage.variants.ts
import { tv } from 'tailwind-variants';

export const responsiveImageWrapper = tv({
  base: 'relative w-full h-full',
  variants: {
    ratio: {
      square: 'aspect-square',
      wide: 'aspect-video',
      tall: 'aspect-[3/4]',
      auto: '',
    },
  },
  defaultVariants: {
    ratio: 'auto',
  },
});
