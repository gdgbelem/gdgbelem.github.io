import type { ReactNode } from "react";
import { Container, Eyebrow } from "./section";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

// Internal-page hero: breadcrumb + eyebrow + title + optional lead/aside.
// Keeps the DevFest Playground voice without repeating the home's big wordmark.
export function PageHeader({
  eyebrow,
  eyebrowTone = "bg-google-blue",
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  eyebrowTone?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-muted/40 py-12 md:py-16">
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-5 text-pretty text-lg font-light leading-relaxed text-muted-foreground">
                {lead}
              </p>
            )}
          </div>
          {children && <div className="shrink-0">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
