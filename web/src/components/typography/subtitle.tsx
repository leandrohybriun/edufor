import { cn } from "@/lib/utils";

export function Subtitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <h4
      className={cn("text-subtitle font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h4>
  );
}
