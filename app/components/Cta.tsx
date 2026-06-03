import Image from "next/image";
import DownloadButtons from "./DownloadButtons";

export default function Cta() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-[#8FC93A]/7 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <Image
          src="/logo.png"
          alt="TandeMate"
          width={60}
          height={60}
          className="mx-auto rounded-2xl mb-8"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find your perfect
          <br />
          <span className="text-[#8FC93A]">tandem mate</span> today
        </h2>
        <p className="text-[#928F99] text-lg mb-10 max-w-xl mx-auto">
          Language learning is better face-to-face. Download TandeMate for free
          and start meeting locals who speak the language you love.
        </p>
        <DownloadButtons size="lg" className="justify-center" />
      </div>
    </section>
  );
}
