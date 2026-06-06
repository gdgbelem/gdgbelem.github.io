export function GoogleDots({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <span className="inline-flex gap-1.5">
        <span className="size-2.5 rounded-full bg-google-blue" />
        <span className="size-2.5 rounded-full bg-google-red" />
        <span className="size-2.5 rounded-full bg-google-yellow" />
        <span className="size-2.5 rounded-full bg-google-green" />
      </span>
    </span>
  );
}

export const colorClass: Record<string, string> = {
  "google-blue": "bg-google-blue",
  "google-red": "bg-google-red",
  "google-yellow": "bg-google-yellow",
  "google-green": "bg-google-green",
};

export const textColorClass: Record<string, string> = {
  "google-blue": "text-google-blue",
  "google-red": "text-google-red",
  "google-yellow": "text-google-yellow",
  "google-green": "text-google-green",
};
