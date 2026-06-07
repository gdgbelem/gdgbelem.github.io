import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/site";
import { Container, Eyebrow } from "./section";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Eyebrow tone="bg-google-yellow">Dúvidas frequentes</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Perguntas comuns
          </h2>
          <p className="mt-4 max-w-sm font-light leading-relaxed text-muted-foreground">
            Tudo que você precisa saber antes de aparecer no próximo encontro.
          </p>
        </div>

        <Accordion multiple={false}>
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
      </Container>
    </section>
  );
}
