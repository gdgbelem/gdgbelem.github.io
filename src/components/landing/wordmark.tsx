// Hero wordmark: "GDG" in Google colors, "Belém" in ink, set tight as one word.
export function Wordmark({ className }: { className?: string }) {
  return (
    <h1
      className={`font-display text-6xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl ${className ?? ""}`}
    >
      <span className="text-google-blue">G</span>
      <span className="text-google-red">D</span>
      <span className="text-google-yellow">G</span>
      <span className="text-foreground">Belém</span>
    </h1>
  );
}
