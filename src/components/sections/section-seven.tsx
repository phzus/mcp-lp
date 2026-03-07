import Image from "next/image";

const pilares = [
  {
    icon: "/assets/icons/pilares/01.svg",
    num: "#01",
    title: "Conteúdo do básico ao avançado de Direct Response para a gringa",
    desc: "Mentorias ao vivo no Zoom onde eu abro a tela da operação e passo com você por tudo: copy, criativos, funil, tráfego e as estratégias black da Caixa Preta. Do zero até escala agressiva.",
  },
  {
    icon: "/assets/icons/pilares/02.svg",
    num: "#02",
    title: "Acompanhamento premium",
    desc: "Calls semanais com Kauã Aníbal — oxigenação de ofertas, análise de métricas, decisões de escala em tempo real. Você traz suas campanhas e sai com o próximo passo definido.",
  },
  {
    icon: "/assets/icons/pilares/03.svg",
    num: "#03",
    title: "Programa de vantagens para afiliados",
    desc: "CPAs acima de $200, ofertas validadas com superprodução nível Netflix, criativos entregues antes de virarem tendência. Você entra no leilão já posicionado para vencer.",
  },
  {
    icon: "/assets/icons/pilares/04.svg",
    num: "#04",
    title: "Comunidade privada",
    desc: "Ambiente ultra-qualificado com Super Afiliados, mentores e gerente de afiliados dedicado. Grupo online + encontros presenciais nos principais estados do Brasil.",
  },
  {
    icon: "/assets/icons/pilares/05.svg",
    num: "#05",
    title: "Ranking de comissões",
    desc: "Quanto mais você escala, mais vantagem recebe. CPA maior (+US$200), acesso antecipado a ofertas, atendimento individual e listas de compradores para Lookalike. O sistema premia quem executa.",
  },
];

export function SectionSeven() {
  return (
    <section className="bg-black py-12 md:py-24">
      <div className="section-container">
        {/* Title */}
        <h2 className="text-gradient-hero mb-3 text-center font-tomorrow text-xl font-bold uppercase md:text-3xl">
          Entenda como vai funcionar a Mentoria Caixa Preta
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-400 md:mb-14 md:text-base">
          O programa é dividido em 5 pilares para transformar você em um Super
          Afiliado escalado no mercado americano:
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pilares.map((pilar, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border-2 border-[#EE1330]/25 p-6 md:p-8"
            >
              {/* Card background */}
              <Image
                src="/assets/backgrounds/card-pilares.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10">
                <Image
                  src={pilar.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="mb-2 font-tomorrow text-base font-bold text-white md:text-lg">
                  <span className="text-[#F2B705]">{pilar.num}</span>{" "}
                  {pilar.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
                  {pilar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
