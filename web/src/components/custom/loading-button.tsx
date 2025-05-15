import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

export function LoadingButton({
  variant,
  size,
  asChild = false,
  loading = false,
  text,
  loadingText,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    text: string;
    loadingText?: string;
    loading: boolean;
  }) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={loading}
      asChild={asChild}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          {loadingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
}
