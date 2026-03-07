import Image from "next/image";
import { CtaButtonGreen } from "@/components/ui/cta-button-green";

export function SectionTen() {
  return (
    <section id="pricing" className="bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container">
        {/* Title above grid */}
        <h2 className="mb-10 text-center font-tomorrow text-lg font-bold uppercase text-white md:mb-14 md:text-2xl">
          Acesse as estratégias dos afiliados gringos que faturam mais de R$1
          milhão por dia.
        </h2>

        {/* Centered single column */}
        <div className="mx-auto max-w-2xl">
          {/* ── Center Column: Price Card ── */}
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
                R$ 258,25
              </p>
              <p className="mt-1 text-sm text-gray-600">
                ou apenas{" "}
                <span className="font-bold text-[#00C853]">R$ 2.497,00</span>{" "}
                à vista!
              </p>
            </div>

            {/* Green CTA */}
            <CtaButtonGreen href="https://pay.kiwify.com.br/NCzEsQ8">Garantir Minha Vaga!</CtaButtonGreen>
          </div>

        </div>
      </div>
    </section>
  );
}
