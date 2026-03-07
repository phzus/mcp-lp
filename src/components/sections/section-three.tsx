import Image from "next/image";
import { CtaButtonBlue } from "@/components/ui/cta-button-blue";

export function SectionThree() {
  return (
    <section className="relative bg-white py-12 md:py-24">
      {/* Background image */}
      <Image
        src="/assets/backgrounds/section-3.webp"
        alt=""
        fill
        className="object-cover opacity-10"
        sizes="100vw"
      />

      <div className="section-container relative z-10">
        {/* Title */}
        <h2 className="mb-8 text-center font-tomorrow text-xl font-bold leading-tight text-gray-900 md:mb-12 md:text-3xl">
          Aproveite a{" "}
          <span className="text-[#0E7BE8]">BRECHA</span> que os
          maiores afiliados dos EUA usam para escalar milhões por dia — e que
          ninguém no Brasil ensina.
        </h2>

        {/* Copy paragraphs */}
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-gray-700 md:text-base">
          <p>
            Existe uma falha no sistema de afiliação americano que os top
            affiliates exploram em silêncio: como afiliado, os seus ativos de
            tráfego não passam pela mesma revisão que a VSL do produtor.
          </p>
          <p>
            Isso significa que enquanto o produtor está preso a uma oferta
            conservadora, os afiliados que sabem disso criam presells e ângulos
            com uma agressividade cirúrgica — convertendo 2x, 3x mais com o
            mesmo funil.
          </p>
          <p>
            Esse é o segredo que separa quem fatura $1.000/dia de quem fatura
            $100.000.
          </p>
          <p>
            Não é sobre rodar mais tráfego. É sobre saber O QUE os afiliados que
            dominam o leilão fazem diferente com os mesmos ativos que você tem
            acesso.
          </p>
          <p>
            O problema? Essas estratégias nunca são compartilhadas abertamente.
            Elas circulam em grupos fechados, entre afiliados que escalam juntos.
          </p>
          <p>
            Quem está de fora, fica rodando no escuro — sem entender por que o
            concorrente escala 9x mais com o mesmo vídeo de vendas.
          </p>
          <p className="font-semibold">
            A Caixa Preta reúne mais de 100 dessas estratégias, organizadas para
            você copiar, rodar e escalar.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-md md:mt-14">
          <CtaButtonBlue>Desbloquear Meu Acesso à Caixa Preta</CtaButtonBlue>
        </div>
      </div>
    </section>
  );
}
