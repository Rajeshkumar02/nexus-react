import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',

      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',

      destructive:
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  compoundVariants: [{ variant: 'primary', size: 'default' }],
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => (
  <button
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  />
);

export { Button, buttonVariants };
