import type { HTMLAttributes, ReactNode } from 'react';

type FrameProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: 'cyan' | 'green' | 'gold';
};

export function Frame({ children, className = '', variant = 'cyan', ...props }: FrameProps) {
  return (
    <div className={`tech-frame tech-frame--${variant} ${className}`.trim()} {...props}>
      <span aria-hidden="true" className="tech-frame__corner tech-frame__corner--tl" />
      <span aria-hidden="true" className="tech-frame__corner tech-frame__corner--br" />
      {children}
    </div>
  );
}
