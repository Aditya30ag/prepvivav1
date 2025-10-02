import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'font-semibold transition-all duration-200 rounded-lg inline-flex items-center justify-center',
          {
            'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5': variant === 'primary',
            'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-300': variant === 'secondary',
            'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button


