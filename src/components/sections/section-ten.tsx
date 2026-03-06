import Image from "next/image";
import { CtaButtonGreen } from "@/components/ui/cta-button-green";

export function SectionTen() {
  return (
    <section className="bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container">
        {/* Title above grid */}
        <h2 className="mb-10 text-center font-tomorrow text-lg font-bold uppercase text-white md:mb-14 md:text-2xl">
          Acesse as estratégias dos afiliados gringos que faturam mais de R$1
          milhão por dia.
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ── Left Column: Price Card ── */}
          <div className="rounded-2xl bg-gradient-to-b from-[#1A0000] to-[#0A0A0A] p-6 md:p-10">
            {/* Logo */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <Image
                src="/assets/branding/logo-mcp-pitch.svg"
                alt="MCP"
                width={60}
                height={60}
              />
              <span className="font-tomorrow text-sm font-bold uppercase text-white md:text-base">
                Mentoria Caixa Preta
              </span>
            </div>

            {/* Urgency text */}
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase text-white md:text-base">
                NÃO PERCA MAIS TEMPO,
              </p>
              <p className="text-gradient-hero font-tomorrow text-base font-bold uppercase md:text-lg">
                REALIZE A SUA INSCRIÇÃO
              </p>
              <p className="text-sm font-bold uppercase text-white md:text-base">
                AGORA MESMO{" "}
                <span className="text-[#D42727]">ANTES</span> QUE AS 200 VAGAS
                ACABEM!
              </p>
            </div>

            {/* Price block */}
            <div className="mb-6 rounded-xl bg-white px-6 py-5 text-center">
              <p className="text-xs text-gray-600">Por: 12x de</p>
              <p className="font-tomorrow text-3xl font-extrabold text-gray-900 md:text-4xl">
                R$ 149,70
              </p>
              <p className="mt-1 text-sm text-gray-600">
                ou apenas{" "}
                <span className="font-bold text-[#00C853]">R$ 1.497,00</span>{" "}
                à vista!
              </p>
            </div>

            {/* Green CTA */}
            <CtaButtonGreen>Garantir Minha Vaga!</CtaButtonGreen>
          </div>

          {/* ── Right Column: Urgency Card ── */}
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm md:p-10">
            <p className="mb-4 text-sm italic text-[#D42727] md:text-base">
              Mas tem mais uma coisa...
            </p>
            <p className="mb-6 text-sm italic text-[#D42727] md:text-base">
              Quem garantir a vaga enquanto essa live estiver no ar recebe duas
              vantagens que não estarão disponíveis depois:
            </p>

            <div className="mb-4 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">🔒</span>
                <p className="text-sm text-gray-300 md:text-base">
                  <strong className="text-white">
                    Acesso por apenas R$1.497
                  </strong>{" "}
                  — depois da live, o valor sobe para R$2.497. Sem exceção.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">🔒</span>
                <p className="text-sm text-gray-300 md:text-base">
                  <strong className="text-white">
                    Entrada direta com CPA de $220 nas ofertas
                  </strong>{" "}
                  — enquanto quem entrar depois começa com $170, você já entra
                  ganhando mais no leilão desde a primeira venda.
                </p>
              </div>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <p className="mb-3 text-sm italic text-[#D42727]">
              O que isso significa na prática?
            </p>
            <p className="text-sm font-bold text-[#D42727] md:text-base">
              Uma única venda como afiliado já paga o investimento inteiro na
              mentoria. E a partir da segunda, é{" "}
              <span className="underline">lucro.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
