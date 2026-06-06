// DevFest-style colored wordmark: "GDG Belém".
export function Wordmark({ className }: { className?: string }) {
  return (
    <h1
      className={`flex flex-wrap items-end justify-center gap-x-3 gap-y-1 font-display text-5xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl ${className ?? ""}`}
    >
      <span className="flex">
        <span className="text-google-blue">G</span>
        <span className="text-google-red">D</span>
        <span className="text-google-yellow">G</span>
      </span>
      <span className="flex">
        <span className="text-google-green">B</span>
        <span className="text-foreground">elém</span>
      </span>
    </h1>
  );
}
