import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

// Green pixel staircase.
export function Stair({ className, style }: Props) {
  return (
    <div
      className={`grid w-fit grid-cols-5 gap-1 ${className ?? ""}`}
      style={style}
      aria-hidden
    >
      {[3, 2, 1, 0, 0, 3, 2, 1, 1, 0, 3, 2, 2, 1, 0].map((_, i) => {
        const col = i % 5;
        const visible = col <= Math.floor(i / 5);
        return (
          <span
            key={i}
            className="size-3 rounded-[1px]"
            style={{ background: visible ? "var(--google-green)" : "transparent" }}
          />
        );
      })}
    </div>
  );
}

// Red dot grid.
export function DotGrid({ className, style }: Props) {
  return (
    <div
      className={`grid w-fit grid-cols-4 gap-4 ${className ?? ""}`}
      style={style}
      aria-hidden
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="size-[7px] rounded-full bg-google-red" />
      ))}
    </div>
  );
}

// Yellow triangle (CSS borders).
export function Triangle({
  className,
  style,
  direction = "right",
}: Props & { direction?: "right" | "up" }) {
  const border =
    direction === "right"
      ? {
          borderWidth: "90px 0 90px 130px",
          borderColor: "transparent transparent transparent var(--google-yellow)",
        }
      : {
          borderWidth: "0 70px 110px 70px",
          borderColor: "transparent transparent var(--google-yellow) transparent",
        };
  return (
    <div
      className={`size-0 ${className ?? ""}`}
      style={{ borderStyle: "solid", ...border, ...style }}
      aria-hidden
    />
  );
}

// Blue circle.
export function Circle({ className, style }: Props) {
  return (
    <div
      className={`rounded-full bg-google-blue ${className ?? ""}`}
      style={style}
      aria-hidden
    />
  );
}

// Yellow ring.
export function Ring({ className, style }: Props) {
  return (
    <div
      className={`rounded-full border-[7px] border-google-yellow ${className ?? ""}`}
      style={style}
      aria-hidden
    />
  );
}

// Pink diagonal stripes.
export function Stripes({ className, style }: Props) {
  return (
    <div
      className={className}
      style={{
        background:
          "repeating-linear-gradient(-45deg, var(--google-pink) 0 10px, transparent 10px 26px)",
        ...style,
      }}
      aria-hidden
    />
  );
}
