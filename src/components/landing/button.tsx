import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Material-flavored landing button: rounded, elevated, lifts on hover.
export const landingButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background,box-shadow,transform] duration-200 ease-out outline-none focus-visible:ring-4 focus-visible:ring-google-blue/30 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        primary:
          "bg-google-blue text-white shadow-[0_1px_2px_rgba(60,64,67,.30),0_1px_3px_1px_rgba(60,64,67,.15)] hover:bg-google-blue-dark hover:shadow-[0_1px_3px_rgba(60,64,67,.30),0_4px_8px_3px_rgba(60,64,67,.15)] hover:-translate-y-0.5 active:translate-y-0",
        white:
          "bg-white text-google-blue-dark shadow-[0_1px_2px_rgba(60,64,67,.30),0_1px_3px_1px_rgba(60,64,67,.15)] hover:shadow-[0_1px_3px_rgba(60,64,67,.30),0_4px_8px_3px_rgba(60,64,67,.15)] hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-border bg-background text-foreground hover:border-google-blue hover:text-google-blue hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = React.ComponentProps<"a"> & VariantProps<typeof landingButton>;

export function LinkButton({ className, variant, size, ...props }: Props) {
  return <a className={cn(landingButton({ variant, size }), className)} {...props} />;
}
