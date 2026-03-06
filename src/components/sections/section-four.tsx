export function SectionFour() {
  const checkItems = [
    "Quando aumentar o orçamento.",
    "Quando matar um criativo.",
    "Quando ressuscitar uma oferta milionária no momento exato.",
    "Qual CPC um ad precisa bater para justificar escala.",
    "A taxa de conversões mínima para não queimar budget.",
  ];

  return (
    <section className="bg-[#050505] py-12 md:py-24">
      <div className="section-container">
        {/* Title */}
        <h2 className="mb-8 text-center font-tomorrow text-xl font-bold uppercase leading-tight text-white md:mb-12 md:text-3xl">
          Os Afiliados Que Escalam Milhões Por Dia Nos EUA Têm Métodos de Escala
          Que Nenhuma Spy Tool Vai Te Mostrar.
        </h2>

        {/* Copy */}
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-gray-300 md:text-base">
          <p>
            Você pode copiar o criativo. Pode copiar a VSL. Pode copiar o funil
            inteiro.
          </p>
          <p>
            E mesmo assim, o afiliado que você copiou vai continuar escalando 9x
            mais que você.
          </p>
          <p>Porque o segredo nunca esteve na oferta.</p>
          <p>
            Está no que acontece{" "}
            <strong className="text-[#D42727]">DEPOIS</strong> do play — nas{" "}
            <strong className="text-highlight-green">decisões de tráfego</strong>
            , nos{" "}
            <strong className="text-highlight-green">
              métodos de escala e nos timings
            </strong>{" "}
            que os top affiliates da gringa usam para dominar o leilão.
          </p>
        </div>

        {/* Check list */}
        <ul className="mx-auto mt-8 max-w-2xl space-y-3">
          {checkItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-200 md:text-base">
              <span className="mt-0.5 shrink-0 text-highlight-green">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Closing */}
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
          <p>
            Esse é o jogo invisível. O que separa quem roda no escuro de quem
            controla o ROI, o ROAS e o leilão inteiro.
          </p>
          <p className="font-bold text-[#D42727]">
            E esse jogo só se aprende com quem já está dentro.
          </p>
        </div>
      </div>
    </section>
  );
}
