import { FEATURES } from "@/app/lib/constants";

export default function Features() {
  return (
    <section id="features" className="py-28 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Everything you need to find your
          <br />
          <span className="text-primary">tandem mate</span>
        </h2>
        <p className="text-text-muted text-lg max-w-xl mx-auto text-center">
          TandeMate brings together all the tools to discover, connect,
          and practise - in one clean, fast app.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature-card rounded-2xl p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              {f.icon}
            </div>
            <h3 className="text-white font-semibold text-[17px] mb-2">{f.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
