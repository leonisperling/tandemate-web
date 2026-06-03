import Image from "next/image";
import { STEPS } from "@/app/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#141318]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -m-12 bg-[#8FC93A]/6 rounded-full blur-3xl" />
              <Image
                src="/screen-profile-ios2.png"
                alt="TandeMate profile screen"
                width={270}
                height={570}
                className="phone-shadow relative z-10"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Up and running
              <br />
              <span className="text-[#8FC93A]">in 3 steps</span>
            </h2>
            <p className="text-[#928F99] text-lg mb-12">
              No complex setup. Just sign up, look around, and start talking.
            </p>

            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.number} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full border border-[#8FC93A]/30 text-[#8FC93A] font-bold text-xs flex items-center justify-center bg-[#8FC93A]/5">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[17px] mb-1">{step.title}</h3>
                    <p className="text-[#928F99] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
