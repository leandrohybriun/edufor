import { cn } from "@/lib/utils";

export function Heading({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <h2
      className={cn("text-heading font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
