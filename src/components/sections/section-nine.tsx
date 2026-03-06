import Image from "next/image";
import { CtaButtonRed } from "@/components/ui/cta-button-red";

const topStrategies = [
  {
    icon: "/assets/icons/estrategias/01.svg",
    title: "ESTRATÉGIA DA MICROLEAD ILIMITADA",
    desc: (
      <>
        Um passo a passo <strong>COMPLETO</strong> de{" "}
        <strong className="text-[#F2B705] underline">
          construção de microlead utilizando Pesquisa + ChatGpt
        </strong>{" "}
        para que qualquer pessoa, com menos de 2 minutos de trabalho, acerte de
        primeira a parte mais importante de um vídeo de venda.
      </>
    ),
  },
  {
    icon: "/assets/icons/estrategias/02.svg",
    title: "ESTRATÉGIA DE PRESSEL PREVIEW",
    desc: (
      <>
        Capaz de fazer você{" "}
        <strong className="text-[#F2B705] underline">
          escalar 2X MAIS, mesmo rasgando 30% do seu dinheiro...
        </strong>{" "}
        Essa estratégia vai fazer você se sentir como um segurança de balada
        expulsando todo bêbado na porta que só vai entrar para dar problema para
        sua cabeça.
      </>
    ),
  },
  {
    icon: "/assets/icons/estrategias/03.svg",
    title: 'ESTRATÉGIA DO "AD GRATUITO"',
    desc: (
      <>
        Template capaz de captar a atenção das pessoas 182% mais do que o seu
        concorrente e <strong>fazer com que elas implorem para clicar no botão</strong>{" "}
        - Estratégia que foi capaz de{" "}
        <strong className="text-[#F2B705] underline">
          aumentar a retenção na lead de 50% para 68%
        </strong>{" "}
        sem mudar nada no Script.
      </>
    ),
  },
];

const bottomStrategies = [
  {
    icon: "/assets/icons/pitch/01.png",
    title: "ESTRATÉGIA DO FECHAMENTO AMAZON",
    desc: "Como um simples aviso de 30 segundos dentro da VSL faz com que todo afiliado de fundo de funil passe fome. O sonho de todo afiliado que deseja escalar de verdade, pois otimiza apenas as vendas do topo.",
  },
  {
    icon: "/assets/icons/pitch/02.svg",
    title: "ESTRATÉGIA DO FECHAMENTO MANIPULADO",
    desc: "Uma conversa entre mim e um dos maiores nomes da escala na gringa que resultou no fechamento mais apelativo da história dos nutracêuticos. Uma simples alteração que transcende a sofisticação inteira da sua VSL. Alerta: essa estratégia precisa ser utilizada com Cloaker porque ela é BlackHat para c*ralho.",
  },
];

export function SectionNine() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="section-container">
        {/* ── Title Block ── */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mx-auto max-w-4xl text-lg font-bold leading-snug text-gray-900 md:text-2xl">
            Além dessas entregas ABSURDAS, você vai acessar{" "}
            <span className="bg-highlight-red rounded px-2 py-0.5">
              AS ESTRATÉGIAS MAIS AGRESSIVAS
            </span>{" "}
            da{" "}
            <span className="text-gradient-red font-tomorrow">
              CAIXA PRETA DA ESCALA GRINGA
            </span>{" "}
            — as mesmas que os afiliados que escalam milhões por dia usam e que{" "}
            <span className="text-[#1962FF]">
              nunca foram compartilhadas abertamente no Brasil.
            </span>
          </p>
        </div>

        {/* ── Top 3 Strategy Cards ── */}
        <div className="mb-12 space-y-4 md:mb-16">
          {topStrategies.map((s, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#1A1A1A] p-5 md:p-8"
            >
              <Image src={s.icon} alt="" width={36} height={36} className="mb-3" />
              <h3 className="mb-2 font-tomorrow text-sm font-bold uppercase text-white md:text-base">
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Iceberg Block ── */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-6 max-w-md">
            <Image
              src="/assets/backgrounds/iceberg-desktop.png"
              alt="Iceberg"
              width={500}
              height={400}
              className="mx-auto hidden max-w-full md:block"
            />
            <Image
              src="/assets/backgrounds/iceberg-mobile.png"
              alt="Iceberg"
              width={350}
              height={300}
              className="mx-auto max-w-full md:hidden"
            />
          </div>
          <p className="mb-4 text-lg font-bold text-gray-900 md:text-xl">
            Essa é apenas a{" "}
            <span className="bg-highlight-red rounded px-2 py-0.5">
              PONTINHA
            </span>{" "}
            do iceberg da Caixa Preta.
          </p>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-600 md:text-base">
            E o melhor: você vai ver tudo acontecendo na tela. Criativos,
            estratégias e decisões de escala — tudo explicado de forma simples
            para você copiar, rodar e escalar.
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gray-300" />
          <p className="text-lg font-bold text-gray-900">E ainda tem mais...</p>
        </div>

        {/* ── Bottom 2 Strategy Cards ── */}
        <div className="mb-12 space-y-4 md:mb-16">
          {bottomStrategies.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#EE1330]/25 bg-[#1A1A1A] p-5 md:p-8"
            >
              <Image src={s.icon} alt="" width={36} height={36} className="mb-3" />
              <h3 className="mb-2 font-tomorrow text-sm font-bold uppercase text-[#E8160E] md:text-base">
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA Block ── */}
        <div className="text-center">
          <p className="mb-6 font-tomorrow text-sm font-bold uppercase text-gray-900 md:text-base">
            Acesse as estratégias dos afiliados gringos que faturam mais de R$1
            milhão por dia.
          </p>
          <div className="mx-auto max-w-md">
            <CtaButtonRed href="https://pay.kiwify.com.br/oJsHT18">Desbloquear Meu Acesso à Caixa Preta</CtaButtonRed>
          </div>
        </div>
      </div>
    </section>
  );
}
