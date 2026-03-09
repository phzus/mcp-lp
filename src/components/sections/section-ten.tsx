import Image from "next/image";

export function SectionTen() {
  return (
    <section id="pricing" className="bg-[#0A0A0A] py-12 md:py-24">
      <div className="section-container px-0 md:px-4">
        {/* Title above grid */}
        <h2 className="mb-10 max-w-2xl mx-auto text-center font-tomorrow text-lg font-bold uppercase text-white md:mb-14 md:text-2xl px-4 md:px-0">
          Acesse as estratégias dos afiliados gringos que faturam mais de R$1
          milhão por dia.
        </h2>

        {/* Centered single column */}
        <div className="mx-auto max-w-2xl px-0 md:px-0">
          {/* ── Center Column: Price Card ── */}
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#3a0606] to-[#0A0A0A] overflow-hidden flex flex-col pt-10 md:pt-14 shadow-2xl">
            {/* Logo */}
            <div className="mb-10 flex items-center justify-center">
              <Image
                src="/assets/branding/logo-mcp-pitch.svg"
                alt="MCP Logo"
                width={400}
                height={120}
                className="w-60 md:w-80 h-auto"
              />
            </div>

            {/* Urgency text */}
            <div className="mb-10 px-4 md:px-14 text-center text-white">
              <p className="font-['Helvetica',_Arial,_sans-serif] text-[1.25rem] leading-[1.3] md:text-[1.75rem] font-bold uppercase">
                NÃO PERCA MAIS TEMPO,{' '}
                <span className="text-[#32CD32]">REALIZE A SUA INSCRIÇÃO</span>{' '}
                AGORA MESMO{' '}
                <span className="text-[#32CD32]">ANTES QUE AS 200 VAGAS ACABEM!</span>
              </p>
            </div>

            {/* Price block */}
            <div className="bg-white flex flex-col pt-8 md:pt-10 text-center mt-auto rounded-t-[1.5rem] md:rounded-t-[2rem]">
              <p className="font-['Helvetica',_Arial,_sans-serif] text-xl md:text-3xl text-gray-500 mb-0">Por: 12x de</p>

              <div className="flex justify-center items-baseline gap-2 md:gap-3 font-['Helvetica',_Arial,_sans-serif] mb-0 leading-none">
                <span className="text-[4rem] md:text-[7.5rem] font-bold text-[#E62E2E] leading-[1]">R$</span>
                <span className="text-[4rem] md:text-[7.5rem] font-bold text-[#E62E2E] leading-[1]">
                  258,25
                </span>
              </div>

              <p className="font-['Helvetica',_Arial,_sans-serif] text-xl md:text-3xl text-gray-500 mt-1 mb-8 md:mb-10 px-2 whitespace-nowrap">
                ou apenas <strong className="font-bold text-gray-800">R$ 2.497,00</strong> à vista!
              </p>

              {/* Green CTA */}
              <a
                href="https://pay.kiwify.com.br/NCzEsQ8"
                className="bg-[#32CD32] hover:bg-[#28a428] transition-colors w-full py-7 md:py-10 flex items-center justify-center text-black font-['Helvetica',_Arial,_sans-serif] font-bold text-[1.25rem] md:text-3xl uppercase tracking-tight"
              >
                GARANTIR MINHA VAGA! <span className="ml-2 md:ml-3 font-black text-2xl md:text-4xl leading-none translate-y-[-2px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
