import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonBase, buttonVariants, buttonSizes } from '@/constants/buttons';

const MotionAnchor = motion.a;
const MotionButton = motion.button;

const motionProps = {
  whileHover: { scale: 1.03, y: -1 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 420, damping: 22 },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external,
  className = '',
  icon: Icon,
  type = 'button',
  pulse = false,
  ...props
}) {
  const classes = `${buttonBase} ${buttonVariants[variant] ?? buttonVariants.primary} ${buttonSizes[size] ?? buttonSizes.md} ${pulse && variant === 'emergency' ? 'animate-pulse-subtle' : ''} ${className}`;

  const content = (
    <>
      {(variant === 'emergency' || variant === 'primary') && (
        <span
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      )}
      {Icon && <Icon className="relative h-5 w-5 shrink-0" aria-hidden />}
      <span className="relative">{children}</span>
    </>
  );

  const sharedClass = `${classes} group`;

  if (href) {
    return (
      <MotionAnchor
        href={href}
        className={sharedClass}
        {...motionProps}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </MotionAnchor>
    );
  }

  if (to) {
    return (
      <Link to={to} className={sharedClass} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <MotionButton type={type} className={sharedClass} {...motionProps} {...props}>
      {content}
    </MotionButton>
  );
}
