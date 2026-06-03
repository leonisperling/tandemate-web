export default function Quote() {
  return (
    <section className="py-24 bg-[#141318]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E91D6]/10 border border-[#1E91D6]/20 text-[#1E91D6] text-xs font-semibold mb-8 tracking-wide uppercase">
          Real language exchange
        </div>
        <blockquote className="text-2xl md:text-3xl text-white font-medium leading-snug mb-6">
          &ldquo;I found a Japanese conversation partner
          <br className="hidden md:block" />
          living two blocks away — within an hour.&rdquo;
        </blockquote>
        <p className="text-[#928F99] text-sm">
          Benni K., Salzburg &mdash; learning French, Italian &amp; Japanese
        </p>
      </div>
    </section>
  );
}
