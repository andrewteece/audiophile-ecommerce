type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={'mx-auto w-full max-w-[1110px] px-6 ${className}'}>
      {children}
    </div>
  );
}
