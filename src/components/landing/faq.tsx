import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-2 rounded-full bg-google-yellow" />
            Dúvidas frequentes
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Perguntas comuns</h2>
        </div>

        <Accordion multiple={false} className="mt-10">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="font-light text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
