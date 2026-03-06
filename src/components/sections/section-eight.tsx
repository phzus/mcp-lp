import Image from "next/image";
import { CtaButtonRed } from "@/components/ui/cta-button-red";

const blueCards = [
  {
    icon: "/assets/icons/vantagens/01.svg",
    title: "OFERTAS FECHADAS RODANDO NAS MAIORES PLATAFORMAS DO MUNDO COMO CLICKBANK, DIGISTORE E CARTPANDA",
    desc: "Desenvolvidas junto com alguns dos maiores dinossauros da escala na gringa.",
  },
  {
    icon: "/assets/icons/vantagens/02.svg",
    title: "OFERTAS VALIDADAS E PRONTAS PARA RECEBER TRÁFEGO NOS MAIORES NICHOS DO MERCADO INTERNACIONAL:",
    desc: "ED, Memória, Diabetes, Emagrecimento, Constipação, Dental, Visão, Tinnitus e Fungo.",
  },
  {
    icon: "/assets/icons/vantagens/03.svg",
    title: "INÍCIO DE SAQUE EM D+7 COM ESCALA EM D+2.",
    desc: "",
  },
  {
    icon: "/assets/icons/vantagens/04.svg",
    title: "LIBERDADE TOTAL PARA APLICAR AS ESTRATÉGIAS DA CAIXA PRETA — SEM REEMBOLSO E SEM CHARGEBACK.",
    desc: "",
  },
];

export function SectionEight() {
  return (
    <section className="bg-black py-12 md:py-24">
      <div className="section-container">
        {/* Title */}
        <h2 className="mb-10 text-center font-tomorrow text-xl font-bold uppercase text-white md:mb-14 md:text-3xl">
          Vantagens para posicionar você à frente de qualquer concorrente
        </h2>

        {/* Blue cards */}
        <div className="space-y-4 md:space-y-5">
          {blueCards.map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl p-5 md:gap-6 md:p-8"
              style={{
                background: "linear-gradient(0deg, #000310 0%, #001130 100%)",
              }}
            >
              <Image src={card.icon} alt="" width={40} height={40} className="shrink-0 mt-1" />
              <div>
                <h3 className="mb-1 font-tomorrow text-sm font-bold uppercase text-white md:text-base">
                  {card.title}
                </h3>
                {card.desc && (
                  <p className="text-xs text-gray-400 md:text-sm">{card.desc}</p>
                )}
              </div>
            </div>
          ))}

          {/* Red highlight card */}
          <div
            className="rounded-xl p-5 md:p-8"
            style={{
              background: "linear-gradient(0deg, #800000 0%, #B30000 100%)",
            }}
          >
            <h3 className="font-tomorrow text-sm font-bold uppercase text-white md:text-base">
              NO PRIMEIRO ENCONTRO DA MENTORIA, 7 OFERTAS JÁ VALIDADAS SERÃO
              LIBERADAS PARA VOCÊ COMEÇAR A RODAR IMEDIATAMENTE.
            </h3>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-md md:mt-14">
          <CtaButtonRed>Desbloquear Meu Acesso à Caixa Preta</CtaButtonRed>
        </div>
      </div>
    </section>
  );
}
