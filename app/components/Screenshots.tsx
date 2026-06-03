import Image from "next/image";
import { SCREENSHOTS } from "@/app/lib/constants";

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          See it in <span className="text-[#8FC93A]">action</span>
        </h2>
        <p className="text-[#928F99] text-lg max-w-xl mx-auto">
          Clean design, dark interface, real people — here&rsquo;s what TandeMate looks like every day.
        </p>
      </div>

      <div
        className="flex gap-5 px-6 md:px-12 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {SCREENSHOTS.map((s) => (
          <div key={s.src} className="flex-shrink-0 snap-start flex flex-col items-center gap-3">
            <div className="w-[190px] md:w-[210px] rounded-[22px] overflow-hidden bg-[#141318] border border-white/5 shadow-2xl">
              <Image
                src={s.src}
                alt={s.label}
                width={210}
                height={455}
                className="w-full h-auto"
              />
            </div>
            <span className="text-xs text-[#928F99]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
