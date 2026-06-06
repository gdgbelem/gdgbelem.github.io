import { about } from "@/lib/site";
import { Stair, DotGrid } from "./decorations";
import { colorClass } from "./google-dots";

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-20 overflow-hidden py-24">
      <DotGrid className="absolute right-[6%] top-16 hidden lg:grid" />
      <Stair className="absolute left-[5%] bottom-16 hidden lg:grid" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-2 rounded-full bg-google-red" />
            {about.title}
          </p>
          <p className="text-pretty text-xl font-light leading-relaxed text-muted-foreground">
            {about.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {about.highlights.map((item) => (
              <span
                key={item.title}
                className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium"
              >
                <span className={`size-2.5 rounded-full ${colorClass[item.color]}`} />
                {item.title}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className={`mb-4 inline-block size-9 rounded-lg ${colorClass[item.color]}`} aria-hidden />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
