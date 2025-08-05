'use client';

import Image from 'next/image';

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
};

export function ResponsiveImage({
  alt,
  className = '',
  priority = false,
  images,
  objectPosition = 'center',
}: ResponsiveImageProps) {
  return (
    <>
      {/* Mobile */}
      <div className='relative md:hidden w-full h-full'>
        <Image
          src={images.mobile}
          alt={alt}
          fill
          className={`object-cover object-[${objectPosition}] ${className}`}
          priority={priority}
        />
      </div>

      {/* Tablet */}
      <div className='relative hidden md:block lg:hidden w-full h-full'>
        <Image
          src={images.tablet}
          alt={alt}
          fill
          className={`object-cover object-[${objectPosition}] ${className}`}
          priority={priority}
        />
      </div>

      {/* Desktop */}
      <div className='relative hidden lg:block w-full h-full'>
        <Image
          src={images.desktop}
          alt={alt}
          fill
          className={`object-cover object-[${objectPosition}] ${className}`}
          priority={priority}
        />
      </div>
    </>
  );
}
