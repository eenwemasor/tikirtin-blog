import { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link from "next/link";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const buttonStyles = cva(
  [
    "font-medium",
    "whitespace-nowrap",
    "flex",
    "items-center",
    "justify-center",
    "gap-[6px]",
    "rounded-md",
    "transition-all",
    "duration-500",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary", "text-white", "hover:bg-primary/90", "disabled:bg-primary/50"],
        outline: ["bg-white", "text-primary", "border", "border-primary", "hover:bg-white/90", "disabled:bg-white", "disabled:border-gray-100", "disabled:text-primary/50", "disabled:cursor-not-allowed"],
        link: [
          "bg-transparent",
          "text-primary",
          "font-normal",
          "rounded-none",
          "p-0",
          "inline-flex",
          "hover:text-primary/90",
          "disabled:text-primary/50",
          "disabled:cursor-not-allowed"
        ],
        secondary: ["bg-primary/10", "text-primary", "disabled:bg-gray-100", "disabled:text-primary/50", "disabled:cursor-not-allowed"],
        danger: [
          "text-danger",
          "hover:bg-danger/10",
          "hover:text-primary",
          "disabled:text-danger/50",
          "disabled:cursor-not-allowed"
        ],
      },
      size: {
        sm: ["text-xs sm:text-sm", "h-7 sm:h-8", "px-2 sm:px-3", "py-1"],
        md: ["text-sm sm:text-base", "h-10 sm:h-[44px]", "px-4 sm:px-6", "py-2 sm:py-[6px]"],
        lg: ["text-base sm:text-lg", "h-11 sm:h-12", "px-6 sm:px-8", "py-2 sm:py-3"],
        xl: ["text-lg sm:text-xl", "h-12 sm:h-[56px]", "px-8 sm:px-10", "py-3 sm:py-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"span">;

export interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  inlineLoader?: boolean;
}

export default function Button({
  className,
  intent,
  size = "md",
  loading,
  disabled,
  children,
  href,
  inlineLoader = true,
  ...props
}: ButtonProps) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "span" : "button";

  const content = (
    <ButtonOrLink className={cn(buttonStyles({ intent, size, className }))} disabled={disabled || loading} {...props}>
      {loading && inlineLoader && <LoadingSpinner />}
      {loading && !inlineLoader ? <LoadingSpinner /> : children}
    </ButtonOrLink>
  );

  if (isLink) return <Link href={href}>{content}</Link>;

  return content;
}
