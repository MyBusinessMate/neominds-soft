import React, { forwardRef } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'large-cta'
  | 'outline'
  | 'ghost'
  | 'small'
  | 'icon-only'
  | 'destructive'
  | 'text-link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  fullWidthMobile?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      isLoading = false,
      fullWidthMobile = false,
      fullWidth = false,
      icon,
      iconPosition = 'right',
      children,
      className = '',
      style = {},
      disabled,
      asLink,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const variantClass = `btn-${variant}`;
    const fullMobileClass = fullWidthMobile ? 'btn-full-mobile' : '';
    const fullClass = fullWidth ? 'btn-full' : '';
    const loadingClass = isLoading ? 'btn-loading' : '';
    const combinedClassName = `btn ${variantClass} ${fullMobileClass} ${fullClass} ${loadingClass} ${className}`.trim();

    const content = (
      <>
        {isLoading && (
          <span
            className="btn-spinner"
            aria-hidden="true"
            style={{
              width: '16px',
              height: '16px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderTopColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'btnSpin 0.6s linear infinite',
              marginRight: children ? '8px' : '0',
            }}
          />
        )}
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="btn-icon-left" style={{ display: 'inline-flex', alignItems: 'center' }}>
            {icon}
          </span>
        )}
        {children && <span>{children}</span>}
        {icon && iconPosition === 'right' && !isLoading && (
          <span className="btn-icon-right" style={{ display: 'inline-flex', alignItems: 'center' }}>
            {icon}
          </span>
        )}
      </>
    );

    if (asLink && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
          style={style}
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        style={style}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
