import Image from "next/image";
import { cn } from "@/lib/utils";

interface CtaButtonRedProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * CTA Button — Red Variant (moldura flutuante)
 *
 * Structure:
 * - Outer div: gradient border (red-light → red-dark)
 * - Middle div: black gap
 * - Inner button: gradient background + box-shadow
 *
 * Used in Hero, Seção 2, 6, 9, etc.
 */
export function CtaButtonRed({
  children,
  href = "https://pay.kiwify.com.br/oJsHT18",
  className,
  onClick,
}: CtaButtonRedProps) {
  const buttonContent = (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-b from-[#D42727] to-[#720000] p-[2px]",
        className
      )}
    >
      {/* Black gap between frame and button */}
      <div className="rounded-[10px] bg-black p-[3px]">
        {/* Actual button */}
        <a
          href={href}
          onClick={onClick}
          className={cn(
            "flex w-full items-center justify-center gap-3 text-center",
            "rounded-lg bg-gradient-to-b from-[#D42727] to-[#720000]",
            "min-h-12 px-8 py-5 md:px-10",
            "text-sm font-bold uppercase tracking-wider text-white md:text-base",
            "shadow-[0_-3px_30.459px_0_rgba(221,0,0,0.23)]",
            "transition-opacity hover:opacity-90 active:opacity-80"
          )}
        >
          {children}
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

  return buttonContent;
}
