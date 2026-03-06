import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Optional background image path (e.g. card-pilares.png) */
  backgroundImage?: string;
}

/**
 * Glass Card — Reusable card wrapper
 *
 * Features:
 * - Subtle red border (25% opacity)
 * - Rounded corners (rounded-xl)
 * - Optional background image
 * - Dark background
 *
 * Used in Seção 7 (5 Pilares), Seção 8 (Vantagens), Seção 9 (Estratégias).
 */
export function GlassCard({
  children,
  className,
  backgroundImage,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border-2 border-[#EE1330]/25 bg-[#1A1A1A] p-6 md:p-8",
        "overflow-hidden",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
