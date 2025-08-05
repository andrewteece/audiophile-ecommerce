import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={cn('mx-auto w-full max-w-[1110px] px-6', className)}>
      {children}
    </Component>
  );
}
