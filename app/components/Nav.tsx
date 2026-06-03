import Image from "next/image";
import { NAV_LINKS } from "@/app/lib/constants";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-[#191716]/85 backdrop-blur-md border-b border-white/5">
      <a href="#" className="flex items-center gap-2.5">
        <Image src="/logo.png" alt="TandeMate logo" width={32} height={32} className="rounded-xl" />
        <span className="font-semibold text-[17px] tracking-tight text-white">TandeMate</span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-[#928F99] hover:text-white transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#cta"
        className="text-sm font-semibold px-5 py-2 rounded-full bg-[#8FC93A] text-black hover:bg-[#a0df42] transition-colors"
      >
        Download
      </a>
    </header>
  );
}
