import Image from "next/image";
import DownloadButtons from "./DownloadButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[#8FC93A]/8 blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#1E91D6]/6 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center py-24">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8FC93A]/10 border border-[#8FC93A]/20 text-[#8FC93A] text-xs font-semibold mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FC93A] animate-pulse" />
            Free · Local · Real conversations
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-bold leading-[1.06] tracking-tight text-white mb-6">
            <span className="text-[#8FC93A]">Local</span>{" "}
            language
            <br />
            exchange
            <br />
            for free.
          </h1>

          <p className="text-lg text-[#928F99] leading-relaxed max-w-md mb-10">
            Find language exchange partners right in your city. Discover people
            nearby on a map, match by language, and meet for real conversations.
          </p>

          <div id="download">
            <DownloadButtons />
          </div>
        </div>

        {/* Phone mockups */}
        <div className="relative hidden lg:flex justify-end items-end h-[650px]">
          <div className="absolute left-0 bottom-0 w-[230px] animate-float z-10">
            <Image
              src="/screen-map-ios.png"
              alt="TandeMate map view"
              width={230}
              height={490}
              className="phone-shadow w-full h-auto"
              priority
            />
          </div>
          <div className="absolute right-4 bottom-10 w-[230px] animate-float-right z-20">
            <Image
              src="/screen-users-ios.png"
              alt="TandeMate users list"
              width={230}
              height={490}
              className="phone-shadow w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#928F99] pointer-events-none">
        <span className="text-xs">Scroll to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
