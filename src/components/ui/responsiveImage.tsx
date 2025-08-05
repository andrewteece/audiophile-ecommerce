'use client';

import Image from 'next/image';
import { responsiveImageWrapper } from './ResponsiveImage.variants';

type ResponsiveImageProps = {
  alt: string;
  className?: string;
  priority?: boolean;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  objectPosition?: string;
  ratio?: 'square' | 'wide' | 'tall' | 'auto';
  blurDataURL?: string;
};

export function ResponsiveImage({
  alt,
  className = '',
  priority = false,
  images,
  objectPosition = 'center',
  ratio = 'auto',
  blurDataURL,
}: ResponsiveImageProps) {
  const sharedProps = {
    fill: true,
    priority,
    placeholder: blurDataURL ? ('blur' as const) : ('empty' as const),
    blurDataURL,
    style: { objectPosition },
    className: `object-cover ${className}`,
  };

  return (
    <>
      {/* Mobile */}
      <div className={responsiveImageWrapper({ ratio }) + ' md:hidden'}>
        <Image src={images.mobile} alt={alt} {...sharedProps} />
      </div>

      {/* Tablet */}
      <div
        className={
          responsiveImageWrapper({ ratio }) + ' hidden md:block lg:hidden'
        }
      >
        <Image src={images.mobile} alt={alt} {...sharedProps} />
      </div>

      {/* Desktop */}
      <div className={responsiveImageWrapper({ ratio }) + ' hidden lg:block'}>
        <Image src={images.mobile} alt={alt} {...sharedProps} />
      </div>
    </>
  );
}
