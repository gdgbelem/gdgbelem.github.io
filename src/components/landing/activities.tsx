import { activities } from "@/lib/site";
import { colorClass } from "./google-dots";

export function Activities() {
  return (
    <section id="atividades" className="scroll-mt-20 bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-2 rounded-full bg-google-green" />
            O que fazemos
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Diferentes formatos para aprender e se conectar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {activities.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <span className={`block h-1.5 ${colorClass[item.color]}`} aria-hidden />
              <div className="p-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 font-light text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
