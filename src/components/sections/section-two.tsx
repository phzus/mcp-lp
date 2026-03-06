import Image from "next/image";
import { CtaButtonRed } from "@/components/ui/cta-button-red";

export function SectionTwo() {
  return (
    <section className="relative bg-black py-12 md:py-24">
      {/* Decorative center SVG */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <Image
          src="/assets/backgrounds/section-2-center.svg"
          alt=""
          width={600}
          height={600}
          className="max-w-full"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Title */}
        <h2 className="mb-8 text-center font-tomorrow text-xl font-bold uppercase leading-tight text-white md:mb-12 md:text-3xl">
          Aplique Para a Primeira Mentoria à Prova de Falhas Para Afiliados de
          Nutra no Mercado Americano
        </h2>

        {/* Copy paragraphs */}
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-gray-300 md:text-base">
          <p>
            Nós vamos abrir a tela da operação que já ultrapassou R$100 milhões
            em faturamento para te mostrar a{" "}
            <strong className="text-highlight-gold">EXATA MANEIRA</strong> que
            nossos afiliados escalam{" "}
            <strong className="text-highlight-gold">+R$100K/dia</strong> — os
            criativos, as decisões de escala, os timings, tudo.
          </p>

          <p>
            Porque mais importante do que saber rodar tráfego,{" "}
            <strong className="text-highlight-green underline">
              é ter acesso.
            </strong>
          </p>

          <p>
            Copiar criativos do mercado qualquer um faz. Agora imagina operar{" "}
            <strong className="text-highlight-gold">POR DENTRO</strong> de uma
            máquina que produz VSLs de múltiplos 8 dígitos, receber os ativos
            antes de virarem tendência e saber exatamente o CPC, a taxa de
            conversão e o momento certo de apertar o botão de escala?
          </p>

          <p>
            É por isso que não existe nenhum programa no Brasil HOJE que
            posicione o afiliado com essa vantagem. É a primeira vez que um
            produtor que fatura múltiplos 7 dígitos por dia vai sentar com você,
            abrir o processo inteiro sem filtro e transformar você em parceiro da
            operação — não em mais um aluno largado às traças.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-md md:mt-14">
          <CtaButtonRed href="https://pay.kiwify.com.br/oJsHT18">Eu quero aplicar AGORA</CtaButtonRed>
        </div>
      </div>
    </section>
  );
}
