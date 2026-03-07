import Image from "next/image";
import { cn } from "@/lib/utils";

interface CtaButtonBlueProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * CTA Button — Blue Variant (moldura flutuante)
 *
 * Same floating border technique as Red, but with blue gradient.
 * Used in Seção 3 (Brecha) and other light-background sections.
 */
export function CtaButtonBlue({
  children,
  href = "#pricing",
  className,
  onClick,
}: CtaButtonBlueProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-b from-[#278CD4] to-[#002A72] p-[2px]",
        className
      )}
    >
      {/* Black gap between frame and button */}
      <div className="rounded-[13px] bg-black p-[4px]">
        {/* Actual button */}
        <a
          href={href}
          onClick={onClick}
          className={cn(
            "flex w-full items-center justify-center gap-3 text-center",
            "rounded-lg bg-gradient-to-b from-[#278CD4] to-[#002A72]",
            "min-h-12 px-6 py-5 md:px-8",
            "text-base font-bold uppercase text-white md:text-lg md:whitespace-nowrap",
            "shadow-[0_-3px_30.459px_0_rgba(0,107,221,0.23)]",
            "transition-opacity hover:opacity-90 active:opacity-80"
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
            className="shrink-0"
          />
        </a>
      </div>
    </div>
  );
}
