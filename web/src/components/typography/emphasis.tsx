import { cn } from "@/lib/utils";

export function Emphasis({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <h1
      className={cn("text-emphasis font-extrabold tracking-tight", className)}
      {...props}
    >
      {children}
    </h1>
  );
}
