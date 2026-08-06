"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base outline-none transition-all disabled:pointer-events-none disabled:opacity-64 focus-visible:ring-2 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 px-4 py-2",
        icon: "h-9 w-9",
        lg: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1.5",
      },
      variant: {
        default:
          "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        ghost:
          "border-transparent text-gray-900 hover:bg-gray-100",
        link: "border-transparent underline-offset-4 hover:underline",
        outline:
          "border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100",
        secondary:
          "border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300",
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
