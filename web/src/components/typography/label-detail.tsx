import { cn } from "@/lib/utils";

export function LabelDetail({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <p className={cn("text-label-details leading-4", className)} {...props}>
      {children}
    </p>
  );
}
