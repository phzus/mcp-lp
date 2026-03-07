import { IconCircle } from "@/components/ui/icon-circle";
import { CtaButtonRed } from "@/components/ui/cta-button-red";

const items = [
  "Querem acesso aos segredos de escala que os maiores afiliados dos EUA usam todos os dias — e que nunca chegaram no Brasil.",
  "Já entenderam que o jogo não é SÓ acertar um criativo e jogar tráfego. É saber exatamente quando escalar, quando matar e quando ressuscitar uma oferta no timing perfeito.",
  "Têm, no mínimo, R$5.000 de caixa para colocar tráfego em cima de funis já validados.",
  "São afiliados iniciantes que precisam de acompanhamento direto com quem já fatura múltiplos 8 dígitos/mês",
  "E principalmente para quem já roda tráfego e sabe que com um CPA de +$200 e as estratégias certas, escalaria múltiplos 8 dígitos por ano como Super Afiliado.",
];

export function SectionSix() {
  return (
    <section className="bg-black py-12 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        {/* Main white card */}
        <div className="border-2 border-[#ED453F] bg-white px-4 py-6 md:px-12 md:py-16">
          {/* Title */}
          <h2 className="mb-10 text-center font-tomorrow text-xl font-bold uppercase leading-tight text-gray-900 md:mb-14 md:text-3xl">
            A <span className="text-[#ED453F]">CAIXA PRETA</span> FUNCIONA PARA
            TODOS QUE…
          </h2>

          {/* Items */}
          <div className="mx-auto max-w-3xl space-y-5 md:space-y-6">
            {items.map((text, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                <div className="shrink-0 pt-1">
                  <IconCircle />
                </div>
                <p className="text-sm font-bold leading-relaxed text-gray-800 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-10 max-w-lg md:mt-14">
            <CtaButtonRed>
              Eu quero meu plano à prova de falhas!
            </CtaButtonRed>
          </div>
        </div>
      </div>
    </section>
  );
}
