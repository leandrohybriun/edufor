import { cn } from "@/lib/utils";

export function Title({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <h3
      className={cn("text-title font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
