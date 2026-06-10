import Image from "next/image";
import DownloadButtons from "./DownloadButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center py-24">
        {/* Copy */}
        <div>

          <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-bold leading-[1.06] tracking-tight text-white mb-6">
            <span className="text-primary">Local</span>{" "}
            language
            <br />
            exchange
            <br />
            for free.
          </h1>

          <p className="text-lg text-text-muted leading-relaxed max-w-md mb-10">
            Find language exchange partners right in your city. Discover people
            nearby on a map, match by language, and meet for real conversations.
          </p>

          <div id="download">
            <DownloadButtons />
          </div>
        </div>

        {/* Phone mockups */}
        <div className="relative hidden lg:flex justify-end items-end h-[650px]">
          <div className="absolute left-0 top-0 w-57.5 animate-float z-10">
            <Image
              src="/android-01.png"
              alt="TandeMate chat view"
              width={230}
              height={490}
              className="phone-shadow w-full h-auto"
              priority
            />
          </div>
          <div className="absolute right-4 top-16 w-57.5 animate-float-right z-20">
            <Image
              src="/users.jpg"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted pointer-events-none">
        <span className="text-xs">Scroll to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
