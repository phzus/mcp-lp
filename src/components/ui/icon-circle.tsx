import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface IconCircleProps {
  className?: string;
  /** Size of the circle in pixels. Default: 40 */
  size?: number;
  /** Custom icon instead of default Check */
  children?: React.ReactNode;
}

/**
 * Icon Circle — Gradient circle with white check icon
 *
 * Background: linear-gradient(90deg, #EE1330, #CF1322)
 * Default icon: Lucide Check (white)
 *
 * Used in Seção 6 ("Funciona para todos") check items.
 */
export function IconCircle({
  className,
  size = 40,
  children,
}: IconCircleProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        "bg-gradient-to-r from-[#EE1330] to-[#CF1322]",
        className
      )}
      style={{ width: size, height: size }}
    >
      {children || <Check className="text-white" size={size * 0.5} strokeWidth={3} />}
    </div>
  );
}
