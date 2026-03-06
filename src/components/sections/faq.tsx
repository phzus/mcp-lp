import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Essa mentoria funciona para iniciantes?",
    answer:
      "Sim. A Mentoria Caixa Preta foi desenhada tanto para quem está começando no mercado de afiliação na gringa quanto para quem já tem operação rodando. O conteúdo compartilha o método validado por +50 afiliados que bateram R$1 milhão por dia!",
  },
  {
    question:
      "Eu preciso falar inglês para trabalhar como afiliado nos Estados Unidos?",
    answer:
      "Não. Hoje a inteligência artificial faz todo o trabalho de tradução através de prompts que serão ensinados dentro da mentoria. Basta aplicar.",
  },
  {
    question: "Eu preciso de muito dinheiro para começar?",
    answer:
      "É recomendado que tenha, no mínimo, R$5.000 de caixa para rodar tráfego. É o valor mínimo para que consigamos extrair resultado dos seus primeiros testes com as ofertas já validadas da operação.",
  },
  {
    question: "Quanto tempo eu tenho acesso ao conteúdo?",
    answer:
      "O acesso ao conteúdo e ao Acompanhamento Premium será através de uma área de membros onde cada encontro será publicado em menos de 24h depois da mentoria ao vivo no Zoom. Você pode revisitar o conteúdo quantas vezes quiser.",
  },
  {
    question: "É possível parcelar no boleto?",
    answer: "Não. Somente PIX e Cartão de Crédito.",
  },
  {
    question: "Quando recebo acesso às ofertas validadas?",
    answer:
      "No primeiro encontro da mentoria. São 7 ofertas já validadas liberadas para você começar a rodar imediatamente nos maiores nichos do mercado americano.",
  },
  {
    question: "Pode entrar com sócio?",
    answer:
      "Não. O acesso é individual. Caso queira que o seu sócio participe junto com você, cobramos uma taxa adicional de 50% do valor do produto. Basta nos chamar no WhatsApp depois do fechamento das 200 vagas.",
  },
  {
    question:
      "Tenho outras dúvidas que não encontrei aqui, quem pode me respondê-las?",
    answer:
      "Caso a sua dúvida não tenha sido respondida nesta página, entre em contato com minha equipe de suporte através do WhatsApp.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container">
        <h2 className="mb-10 text-center font-tomorrow text-xl font-bold uppercase text-white md:mb-14 md:text-3xl">
          Perguntas Frequentes
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-white/10 bg-white/5 px-5"
              >
                <AccordionTrigger className="min-h-12 py-4 text-left text-sm font-semibold text-white hover:no-underline md:text-base [&[data-state=open]>svg]:text-[#D42727]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
