'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { responsiveImageWrapper } from './ResponsiveImage.variants';

type Ratio = 'auto' | 'square' | 'wide' | 'tall';

type Props = {
  alt: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  className?: string;
  objectPosition?: string;
  ratio?: Ratio;
  priority?: boolean;
  blurDataURL?: string;
  placeholder?: 'blur' | 'empty';
  fill?: boolean;
};

export default function ResponsiveImage({
  alt,
  images,
  className = '',
  objectPosition = 'center',
  ratio = 'auto',
  priority = false,
  blurDataURL,
}: Props) {
  const sharedProps = {
    fill: true,
    priority,
    placeholder: blurDataURL ? ('blur' as const) : ('empty' as const),
    ...(blurDataURL && { blurDataURL }),
    style: { objectPosition },
    className: cn('object-cover', className),
  };

  const wrapperClass =
    ratio === 'auto' ? '' : responsiveImageWrapper({ ratio });

  return (
    <>
      {/* Mobile */}
      <div className={cn(wrapperClass, 'md:hidden')}>
        <Image src={images.mobile} alt={alt} {...sharedProps} />
      </div>

      {/* Tablet */}
      <div className={cn(wrapperClass, 'hidden md:block lg:hidden')}>
        <Image src={images.tablet} alt={alt} {...sharedProps} />
      </div>

      {/* Desktop */}
      <div className={cn(wrapperClass, 'hidden lg:block')}>
        <Image src={images.desktop} alt={alt} {...sharedProps} />
      </div>
    </>
  );
}
