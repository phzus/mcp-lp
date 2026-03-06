import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  "Essa mentoria funciona para iniciantes?",
  "Eu preciso falar inglês para trabalhar como afiliado nos Estados Unidos?",
  "Eu preciso de muito dinheiro para começar?",
  "Quanto tempo eu tenho acesso ao conteúdo?",
  "É possível parcelar no boleto?",
  "Quando recebo acesso às ofertas validadas?",
  "Pode entrar com sócio?",
  "Tenho outras dúvidas que não encontrei aqui, quem pode me respondê-las?",
];

const placeholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export function FAQ() {
  return (
    <section className="bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container">
        <h2 className="mb-10 text-center font-tomorrow text-xl font-bold uppercase text-white md:mb-14 md:text-3xl">
          Perguntas Frequentes
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((question, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-white/10 bg-white/5 px-5"
              >
                <AccordionTrigger className="min-h-12 py-4 text-left text-sm font-semibold text-white hover:no-underline md:text-base [&[data-state=open]>svg]:text-[#D42727]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-gray-400">
                  {placeholder}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
