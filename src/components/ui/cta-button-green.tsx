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
  href = "#",
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
          "min-h-14 px-8 py-5 md:px-10",
          "text-sm font-bold uppercase tracking-wider text-black md:text-base",
          "shadow-lg transition-opacity hover:opacity-90 active:opacity-80"
        )}
      >
        {children}
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
