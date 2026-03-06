import { CtaButtonGreen } from "@/components/ui/cta-button-green";

export function FinalCTA() {
  return (
    <section className="relative bg-black py-12 md:py-24">
      {/* Subtle green glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-[#00C853]/10 blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center">
        <p className="mb-2 text-sm font-bold uppercase text-white md:text-base">
          NÃO PERCA MAIS TEMPO, REALIZE A SUA INSCRIÇÃO
        </p>
        <p className="mb-8 font-tomorrow text-lg font-bold uppercase text-[#F2B705] md:mb-10 md:text-2xl">
          AGORA MESMO ANTES QUE AS 200 VAGAS ACABEM!
        </p>

        <p className="mb-1 font-tomorrow text-2xl font-extrabold text-[#D42727] md:text-3xl">
          por 12x de R$ 149,70
        </p>
        <p className="mb-8 text-sm text-white md:mb-10 md:text-base">
          ou apenas R$ 1.497,00 à vista!
        </p>

        <div className="mx-auto max-w-md">
          <CtaButtonGreen>Garantir Minha Vaga!</CtaButtonGreen>
        </div>
      </div>
    </section>
  );
}
