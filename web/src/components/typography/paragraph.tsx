import { cn } from "@/lib/utils";

export function Paragraph({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: string;
}) {
  return (
    <p className={cn("text-paragraph leading-5", className)} {...props}>
      {children}
    </p>
  );
}
