import { InfoIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  content: string;
  link?: string;
  linkContent?: string;
}

export function InfoCard({ content, link, linkContent }: Props) {
  return (
    <div className="bg-muted-foreground/10 text-muted-foreground text-label p-4 rounded-xl flex items-center flex-wrap gap-4">
      <InfoIcon />
      <p>{content}</p>
      {link && (
        <Link href={link} className="text-primary underline underline-offset-2">
          {linkContent}
        </Link>
      )}
    </div>
  );
}
