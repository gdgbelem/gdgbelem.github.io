import { IconArrowRight } from "@tabler/icons-react";
import { partners } from "@/lib/site";
import { getAllParceiros } from "@/lib/content";
import { Container, Eyebrow } from "./section";

const dotRotation = ["bg-google-blue", "bg-google-red", "bg-google-yellow", "bg-google-green"];

// Home preview of partners — quiet logo wall, sources from the CMS.
export function Partners() {
  const items = getAllParceiros();
  if (items.length === 0) return null;

  return (
    <section id="parceiros" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Eyebrow tone="bg-google-green">{partners.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {partners.title}
            </h2>
            <p className="mt-4 text-pretty text-lg font-light leading-relaxed text-muted-foreground">
              {partners.description}
            </p>
          </div>
          <a
            href={partners.ctaHref}
            className="group inline-flex shrink-0 items-center gap-1.5 text-base font-medium text-google-blue"
          >
            {partners.ctaLabel}
            <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((partner, i) => {
            const Logo = partner.url ? "a" : "div";
            const linkProps = partner.url
              ? { href: partner.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={partner.slug}>
                <Logo
                  {...linkProps}
                  className="flex h-24 items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-5 text-center"
                >
                  <span
                    className={`size-2.5 shrink-0 rounded-full ${dotRotation[i % 4]}`}
                    aria-hidden
                  />
                  <span className="text-sm font-semibold text-muted-foreground">{partner.name}</span>
                </Logo>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
