import { IconArrowRight } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";
import { site, hero } from "@/lib/site";
import { Wordmark } from "./wordmark";
import { Ecosystem } from "./ecosystem";
import { Stair, DotGrid, Triangle, Circle, Stripes } from "./decorations";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 text-center md:pt-24">
      <DotGrid className="absolute left-[6%] top-28 hidden lg:grid" />
      <Stair className="absolute right-[7%] top-24 hidden lg:grid" />
      <Triangle direction="up" className="absolute left-[4%] bottom-32 hidden opacity-90 lg:block" />
      <Circle className="absolute right-[8%] bottom-40 hidden size-5 lg:block" />
      <Stripes className="absolute -right-10 top-1/2 hidden h-40 w-44 -rotate-6 lg:block" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mb-7 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground">
          <span className="size-[7px] rounded-full bg-google-green" />
          {site.city}, {site.region} · <b className="font-semibold text-google-blue">Região Norte</b>
        </p>

        <Wordmark />

        <Ecosystem />

        <p className="mt-6 text-balance text-xl font-semibold tracking-tight md:text-2xl">
          {hero.subtitle}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg font-light text-muted-foreground">
          {hero.description}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={hero.ctaPrimary.href} className={buttonVariants({ size: "lg" })}>
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="group inline-flex items-center gap-2 px-2 text-sm font-medium transition-colors hover:text-google-blue"
          >
            {hero.ctaSecondary.label}
            <IconArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
