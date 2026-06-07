import { stats } from "@/lib/site";
import { getNumeros } from "@/lib/content";
import { Container } from "./section";

const notch =
  "polygon(0 0, calc(100% - 38px) 0, 100% 38px, 100% 100%, 38px 100%, 0 calc(100% - 38px))";

export function Stats() {
  const items = getNumeros();
  return (
    <section id="numeros" className="scroll-mt-20 pb-8">
      <Container>
        <div
          className="relative overflow-hidden bg-google-blue px-7 py-14 text-white sm:px-12 md:px-16"
          style={{ clipPath: notch }}
        >
          <div
            className="pointer-events-none absolute right-10 top-8 grid grid-cols-5 gap-3 opacity-35"
            aria-hidden
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="size-1.5 rounded-full bg-white" />
            ))}
          </div>

          <h2 className="mb-9 text-2xl font-semibold md:text-3xl">{stats.title}</h2>

          <div className="grid grid-cols-2 gap-7 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-extrabold leading-none tracking-tight tabular-nums md:text-5xl lg:text-6xl">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-light text-white/90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
