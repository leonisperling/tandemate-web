import Image from "next/image";
import { NAV_LINKS } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="TandeMate" width={26} height={26} className="rounded-lg" />
          <span className="font-semibold text-white">TandeMate</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <p className="text-xs text-text-muted">© 2026 TandeMate. All rights reserved.</p>
      </div>
    </footer>
  );
}
