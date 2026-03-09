export function FinalCTA() {
  return (
    <section className="relative bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container relative z-10 text-center">
        {/* Urgency text */}
        <p className="font-['Helvetica',_Arial,_sans-serif] text-lg md:text-2xl font-bold uppercase text-white leading-tight mb-1">
          NÃO PERCA MAIS TEMPO, REALIZE A SUA INSCRIÇÃO
        </p>
        <p className="font-['Helvetica',_Arial,_sans-serif] text-lg md:text-2xl font-bold uppercase leading-tight mb-6 md:mb-8 text-[#F2B705]">
          AGORA MESMO ANTES QUE AS 200 VAGAS ACABEM!
        </p>

        {/* Price inline — all Red Gradient, larger */}
        <p className="font-['Helvetica',_Arial,_sans-serif] text-[2.5rem] md:text-[3.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#E62E2E] mb-2 md:mb-4 tracking-tight leading-none">
          por 12x de R$ 258,25
        </p>

        {/* À vista text — all white with bold white highlights */}
        <p className="font-['Helvetica',_Arial,_sans-serif] text-xl md:text-2xl text-gray-300 mb-8 md:mb-12">
          ou apenas <strong className="font-bold text-white">R$ 2.497,00</strong> à vista!
        </p>

        {/* Green CTA — lighter hover + subtle green glow */}
        <div className="mx-auto max-w-lg">
          <a
            href="https://pay.kiwify.com.br/NCzEsQ8"
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-[#32CD32] hover:bg-[#5AE05A] transition-all py-5 md:py-6 px-8 font-['Helvetica',_Arial,_sans-serif] text-lg md:text-xl font-bold uppercase text-black shadow-[0_0_20px_rgba(50,205,50,0.25)] hover:shadow-[0_0_30px_rgba(50,205,50,0.4)]"
          >
            GARANTIR MINHA VAGA! <span className="font-black text-xl md:text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
