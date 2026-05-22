const sizes = {
  default: '',
  narrow: 'max-w-3xl',
  wide: 'max-w-[90rem]',
  full: 'max-w-full',
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
}) {
  return (
    <Tag className={`container-app ${sizes[size] ?? ''} ${className}`}>
      {children}
    </Tag>
  );
}
