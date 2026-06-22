import {
  IconBrandAndroid,
  IconFlame,
  IconCloud,
  IconSparkles,
  IconWorld,
  IconDeviceMobile,
} from "@tabler/icons-react";
import type { ComponentType, CSSProperties } from "react";
import { GoogleMark } from "./google-mark";

type Node = {
  label: string;
  Icon: ComponentType<{ size?: number; stroke?: number; color?: string }>;
  color: string;
  left: string;
  top: string;
  delay: string;
};

const nodes: Node[] = [
  { label: "Android", Icon: IconBrandAndroid, color: "var(--google-green)", left: "21%", top: "21.6%", delay: "0.2s" },
  { label: "Firebase", Icon: IconFlame, color: "var(--google-red)", left: "79%", top: "21.6%", delay: "1.1s" },
  { label: "Cloud", Icon: IconCloud, color: "var(--google-blue)", left: "91.2%", top: "50%", delay: "0.6s" },
  { label: "Gemini", Icon: IconSparkles, color: "var(--google-yellow)", left: "79%", top: "78.4%", delay: "1.6s" },
  { label: "Web", Icon: IconWorld, color: "var(--google-blue)", left: "21%", top: "78.4%", delay: "1s" },
  { label: "Flutter", Icon: IconDeviceMobile, color: "var(--google-blue)", left: "8.8%", top: "50%", delay: "0.4s" },
];

const links = [
  { d: "M500 220 L210 95", color: "var(--google-green)", delay: "0s" },
  { d: "M500 220 L790 95", color: "var(--google-red)", delay: "1.3s" },
  { d: "M500 220 L912 220", color: "var(--google-blue)", delay: "0.5s" },
  { d: "M500 220 L790 345", color: "var(--google-yellow)", delay: "1.8s" },
  { d: "M500 220 L210 345", color: "var(--google-blue)", delay: "0.9s" },
  { d: "M500 220 L88 220", color: "var(--google-blue)", delay: "2.2s" },
];

export function Ecosystem() {
  return (
    <div
      className="relative mx-auto mt-10 mb-2 w-full max-w-[880px] [aspect-ratio:1000/440] max-md:max-w-[360px] max-md:[aspect-ratio:1000/560]"
      aria-hidden
    >
      <svg
        viewBox="0 0 1000 440"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 size-full overflow-visible"
      >
        {links.map((l, i) => (
          <path key={`base-${i}`} d={l.d} className="fill-none stroke-foreground/10 [stroke-width:1.5]" />
        ))}
        {links.map((l, i) => (
          <path
            key={`pulse-${i}`}
            d={l.d}
            className="eco-pulse fill-none [stroke-dasharray:9_91] [stroke-linecap:round] [stroke-width:2.5] motion-safe:animate-eco-pulse"
            style={{ stroke: l.color, animationDelay: l.delay } as CSSProperties}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 grid size-[116px] -translate-x-1/2 -translate-y-1/2 place-items-center max-md:size-[82px]">
        <span className="hub-ring absolute -inset-2.5 rounded-[34px] border-[1.5px] border-google-blue opacity-0 motion-safe:animate-hub-ring" />
        <div className="grid size-full place-items-center rounded-[28px] border-[1.5px] border-border bg-card shadow-lg max-md:rounded-[22px]">
          <GoogleMark className="size-[64px] max-md:size-[48px]" />
        </div>
      </div>

      {nodes.map((n) => (
        <div
          key={n.label}
          className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[11px]"
          style={{ left: n.left, top: n.top }}
        >
          <div
            className="eco-chip grid size-[66px] place-items-center rounded-[20px] border-[1.5px] border-border bg-card shadow-md transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg motion-safe:animate-eco-float max-md:size-12 max-md:rounded-[14px]"
            style={{ animationDelay: n.delay }}
          >
            <n.Icon size={32} stroke={1.8} color={n.color} />
          </div>
          <span className="text-[13.5px] font-medium text-muted-foreground max-md:hidden">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
