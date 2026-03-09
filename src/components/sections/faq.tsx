"use client";

import { useState } from "react";

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
      "No primeiro encontro da mentoria. Você recebe acesso às principais ofertas do mercado que já estão validadas e escalando, prontas para você começar a rodar.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container px-0 md:px-0 max-w-7xl">
        <h2 className="mb-10 text-center font-tomorrow text-xl font-bold uppercase text-white md:mb-14 md:text-3xl px-4 md:px-0">
          PERGUNTAS{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#E8160E]">
            FREQUENTES
          </span>
        </h2>

        {/* Two-column grid on desktop, single column on mobile */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12">
          {faqs.map((faq, i) => (
            <div key={i} className="relative">
              {/* FAQ Row */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group w-full flex items-center justify-between gap-4 border-b border-white/10 px-4 py-5 text-left transition-colors hover:bg-white/5 cursor-pointer"
              >
                <span className="font-['Helvetica',_Arial,_sans-serif] text-sm md:text-[0.95rem] font-medium text-white leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-xl md:text-2xl transition-all duration-300 ${
                    openIndex === i
                      ? "text-[#E62E2E] rotate-90"
                      : "text-white/60 group-hover:text-[#E62E2E]"
                  }`}
                >
                  ↗
                </span>
              </button>

              {/* Answer (expandable) */}
              {openIndex === i && (
                <div className="px-4 pb-4 pt-1 border-b border-white/10">
                  <p className="font-['Helvetica',_Arial,_sans-serif] text-sm leading-relaxed text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5511999999999"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] hover:bg-[#4AE07A] transition-all px-8 py-4 font-['Helvetica',_Arial,_sans-serif] text-sm md:text-base font-bold uppercase text-black shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            ENTRAR EM CONTATO PELO WHATSAPP AQUI
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
