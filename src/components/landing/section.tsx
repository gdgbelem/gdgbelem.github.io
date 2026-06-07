import type { ReactNode } from "react";

// Canonical horizontal container: same max-width and inline padding everywhere.
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className ?? ""}`}>{children}</div>;
}

// Section eyebrow: colored tick + uppercase label.
export function Eyebrow({ children, tone = "bg-google-blue" }: { children: ReactNode; tone?: string }) {
  return (
    <p className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
      <span className={`h-0.5 w-8 rounded ${tone}`} />
      {children}
    </p>
  );
}
