// Google "spark" diamond mark (4-color), used in the brand lockup.
export function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M20 4 L33 11.5 V20 L20 12.5 Z" fill="var(--google-red)" />
      <path d="M33 11.5 L33 28.5 L26 24.5 V15.5 Z" fill="var(--google-yellow)" />
      <path d="M20 36 L7 28.5 V20 L20 27.5 Z" fill="var(--google-green)" />
      <path d="M7 28.5 L7 11.5 L14 15.5 V24.5 Z" fill="var(--google-blue)" />
    </svg>
  );
}
