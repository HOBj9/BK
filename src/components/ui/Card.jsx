export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'default',
  as: Tag = 'div',
}) {
  const paddingClass = padding === 'lg' ? 'p-8' : 'p-7';

  return (
    <Tag
      className={`card-premium ${paddingClass} ${
        hover ? 'card-premium-hover group' : ''
      } ${className}`}
    >
      {hover && (
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-brand-50/0 via-transparent to-brand-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
      )}
      <div className="relative">{children}</div>
    </Tag>
  );
}
