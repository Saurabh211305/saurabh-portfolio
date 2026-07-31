import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "text-eyebrow inline-flex items-center gap-2 rounded-full border border-current/20 px-3 py-1.5",
        className
      )}
    >
      {children}
    </span>
  );
}
