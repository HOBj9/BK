import type { ElementType, ReactNode } from 'react';

const sizes = {
  default: '',
  narrow: 'max-w-3xl',
  wide: 'max-w-[90rem]',
  full: 'max-w-full',
} as const;

export type ContainerSize = keyof typeof sizes;

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: ElementType;
};

/**
 * Container — responsive horizontal padding + max-width.
 * Uses `.container-app` from styles/utilities.css.
 */
export default function Container({
  children,
  className = '',
  size = 'default',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={`container-app ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
