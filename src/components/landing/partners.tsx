import { IconArrowRight } from "@tabler/icons-react";
import { partners } from "@/lib/site";
import { Container, Eyebrow } from "./section";

// Rotation of Google colors for the placeholder marks, in canonical order.
const dotRotation = ["bg-google-blue", "bg-google-red", "bg-google-yellow", "bg-google-green"];

export function Partners() {
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
          {partners.items.map((partner, i) => {
            const Logo = partner.href ? "a" : "div";
            const linkProps = partner.href
              ? { href: partner.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={`${partner.name}-${i}`}>
                <Logo
                  {...linkProps}
                  className="flex h-24 items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-5 text-center outline-none transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:ring-4 focus-visible:ring-google-blue/30"
                >
                  <span
                    className={`size-2.5 shrink-0 rounded-full ${dotRotation[i % 4]}`}
                    aria-hidden
                  />
                  <span className="text-sm font-semibold text-muted-foreground">
                    {partner.name}
                  </span>
                </Logo>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
