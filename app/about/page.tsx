export default function AboutPage() {
  return (
    <div className="section-wrap py-12 md:py-16">
      <section className="fade-in-up rounded-3xl luxury-surface p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)]">
          About Prime Estates
        </p>
        <h1 className="mt-2 text-5xl md:text-6xl">
          A Boutique Real Estate Brand
        </h1>
        <p className="mt-4 max-w-3xl leading-8 text-[var(--color-muted)]">
          Prime Estates is a curated real estate portfolio brand focused on
          premium homes, thoughtful advisory, and exceptional client
          experiences. We combine local expertise with elevated presentation to
          help buyers and investors make confident decisions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl bg-white p-5">
            <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Years in Market
            </p>
            <p className="mt-2 text-3xl">12+</p>
          </article>
          <article className="rounded-2xl bg-white p-5">
            <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Premium Listings
            </p>
            <p className="mt-2 text-3xl">150+</p>
          </article>
          <article className="rounded-2xl bg-white p-5">
            <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Client Satisfaction
            </p>
            <p className="mt-2 text-3xl">98%</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-3xl">Mission</h2>
          <p className="mt-3 leading-7 text-[var(--color-muted)]">
            To connect people with homes that reflect their aspirations through
            honest guidance, premium curation, and detail-first service.
          </p>
        </article>
        <article className="rounded-2xl bg-[var(--color-soft)] p-6 shadow-md">
          <h2 className="text-3xl">Vision</h2>
          <p className="mt-3 leading-7 text-[var(--color-muted)]">
            To become the most trusted luxury-focused real estate advisor in Sri
            Lanka, known for style, integrity, and long-term relationships.
          </p>
        </article>
      </section>

      <section className="mt-12">
        <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)]">
          Agency
        </p>
        <h2 className="mt-2 text-4xl md:text-5xl">The Agency</h2>
        <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
          A focused advisory team with strong market insight, negotiation
          expertise, and a white-glove approach from first viewing to final
          closing.
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "N. Fernando", role: "Principal Consultant" },
            { name: "S. Perera", role: "Luxury Property Specialist" },
            { name: "A. Jayasinghe", role: "Client Experience Lead" },
          ].map((person) => (
            <article
              key={person.name}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-md"
            >
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">
                Prime Estates
              </p>
              <h3 className="mt-2 text-2xl">{person.name}</h3>
              <p className="text-sm uppercase tracking-[0.08em] text-[var(--color-muted)]">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
