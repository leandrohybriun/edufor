import { cn } from "@/lib/utils";

export function Label({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <p className={cn("text-label leading-5", className)} {...props}>
      {children}
    </p>
  );
}
