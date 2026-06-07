import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

export type Crumb = { label: string; href?: string };

// Visible breadcrumb trail. Pair with generateBreadcrumbs() for the JSON-LD.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-google-blue">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "font-medium text-foreground" : undefined} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <IconChevronRight size={14} className="text-muted-foreground/60" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
