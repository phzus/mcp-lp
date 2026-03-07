import { cn } from "@/lib/utils";
import Image from "next/image";

interface CtaButtonGreenProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

/**
 * CTA Button — Green Variant (checkout style with glow)
 */
export function CtaButtonGreen({
  children,
  href = "https://pay.kiwify.com.br/NCzEsQ8",
  className,
}: CtaButtonGreenProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Green glow behind */}
      <div className="absolute inset-0 rounded-xl bg-[#00C853]/20 blur-xl" />
      <a
        href={href}
        className={cn(
          "relative flex w-full items-center justify-center gap-3 text-center",
          "rounded-xl bg-gradient-to-b from-[#4CDE77] to-[#00C853]",
          "min-h-14 px-6 py-6 md:px-8",
          "text-base font-bold uppercase text-black md:text-lg md:whitespace-nowrap",
          "shadow-lg transition-opacity hover:opacity-90 active:opacity-80"
        )}
      >
        <span className="max-w-[200px] leading-tight md:max-w-none">
          {children}
        </span>
        <Image
          src="/Vector.svg"
          alt=""
          width={16}
          height={16}
          className="shrink-0 brightness-0"
        />
      </a>
    </div>
  );
}
