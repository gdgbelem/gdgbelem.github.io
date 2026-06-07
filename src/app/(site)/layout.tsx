import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

// Shared chrome for all internal pages (everything except the home).
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
