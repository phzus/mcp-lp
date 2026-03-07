import Image from "next/image";
import { CtaButtonRed } from "@/components/ui/cta-button-red";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* ── Background Images ── */}
      {/* Mobile background (default) */}
      <Image
        src="/assets/backgrounds/hero-mobile.webp"
        alt=""
        fill
        priority
        className="object-cover object-top md:hidden"
        sizes="100vw"
      />
      {/* Desktop background (md+) */}
      <Image
        src="/assets/backgrounds/hero-desktop.webp"
        alt=""
        fill
        priority
        className="hidden object-cover object-top md:block"
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {/* ── Content ── */}
      <div className="section-container relative z-10 flex min-h-screen flex-col items-center justify-end pb-16 pt-12 md:pb-14">
        {/* H1 — Gradient on first part, white on second */}
        <h1 className="mb-4 text-center max-w-[1100px] font-tomorrow text-[22px] font-bold uppercase leading-tight md:mb-6 md:text-3xl md:leading-tight">
          <span className="text-gradient-hero">
            Mentoria Caixa Preta da Escala Gringa
          </span>{" "}
          <span className="text-white">
            Para Você Faturar, No Mínimo, +R$100K/Dia Como Super Afiliado Nos
            EUA!
          </span>
        </h1>

        {/* Subtitle — white, larger */}
        <p className="mx-auto mb-8 max-w-4xl text-center text-base leading-relaxed text-white md:mb-10 md:text-xl">
          Revelado pela primeira vez o arsenal completo de Estratégias Black que
          os maiores afiliados gringos usam em segredo, gerando mais de R$100
          MILHÕES só nos últimos 12 meses.
        </p>

        {/* CTA Button */}
        <div className="w-full max-w-lg">
          <CtaButtonRed>Desbloquear Meu Acesso à Caixa Preta</CtaButtonRed>
        </div>
      </div>
    </section>
  );
}
