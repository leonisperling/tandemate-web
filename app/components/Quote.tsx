export default function Quote() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl text-white font-medium leading-snug mb-6">
            &ldquo;I found a Japanese conversation partner
            <br className="hidden md:block" />
            living two blocks away - within an hour.&rdquo;
          </blockquote>
          <p className="text-text-muted text-sm">
            Benni K., Salzburg - learning French, Italian &amp; Japanese
          </p>
        </div>
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl text-white font-medium leading-snug mb-6">
            &ldquo;I learn languages best when talking with native people and this app helped me find a tandem partner easily!&rdquo;
          </blockquote>
          <p className="text-text-muted text-sm">
            Leoni S. - learning Italian
          </p>
        </div>
      </div>
    </section>
  );
}
