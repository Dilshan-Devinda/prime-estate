import Image from "next/image";
import Link from "next/link";
import QuickSearch from "@/app/components/quick-search";
import { featuredProperties } from "@/data/properties";

export default function Home() {
  return (
    <div className="pb-24">
      <section className="section-wrap pt-16 md:pt-20">
        <div className="fade-in-up relative overflow-hidden rounded-[2rem] luxury-surface">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury property"
            width={1800}
            height={1200}
            className="h-[440px] w-full object-cover md:h-[540px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#132424]/80 to-[#132424]/35" />
          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="max-w-2xl text-white">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-[#d9f2ee]">
                Luxury Portfolio Collection
              </p>
              <h1 className="text-5xl leading-tight md:text-7xl">
                Find Your Dream Home
              </h1>
              <p className="mt-3 max-w-xl text-white/90 md:text-lg">
                Explore exceptional residences designed for comfort, status, and
                timeless elegance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/properties"
                  className="button-primary rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
                >
                  Browse Properties
                </Link>
                <Link
                  href="/contact"
                  className="button-secondary rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
                >
                  Contact Agent
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-up relative -mt-6 mx-4 rounded-2xl bg-white p-4 shadow-xl md:mx-8 md:p-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Quick Search
          </p>
          <QuickSearch />
        </div>
      </section>

      <div className="section-wrap">
        <div className="h-14 border-t border-black/10 md:h-20" />
      </div>

      <section className="section-wrap pt-2 md:pt-4">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Featured Properties
            </p>
            <h2 className="text-4xl md:text-5xl">Premium Listings</h2>
          </div>
          <Link
            href="/properties"
            className="text-sm font-semibold uppercase tracking-[0.08em] hover:text-[var(--color-primary)]"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredProperties.slice(0, 3).map((property) => (
            <article
              key={property.id}
              className="luxury-surface overflow-hidden rounded-2xl fade-in-up"
            >
              <Image
                src={property.heroImage}
                alt={property.title}
                width={1400}
                height={900}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {property.location}
                </p>
                <h3 className="mt-1 text-2xl">{property.title}</h3>
                <p className="mt-2 text-lg font-semibold">
                  LKR {property.price.toLocaleString()}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {property.beds} Beds • {property.baths} Baths •{" "}
                  {property.areaSqFt.toLocaleString()} sq ft
                </p>
                <Link
                  href={`/properties/${property.id}`}
                  className="mt-4 inline-block rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-[var(--color-primary)]"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-wrap">
        <div className="h-14 border-t border-black/10 md:h-20" />
      </div>

      <section className="section-wrap pt-2 md:pt-4">
        <div className="fade-in-up rounded-3xl bg-[var(--color-soft)] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Consultation
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl">Need A Private Viewing?</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-muted)] md:text-lg">
            Connect with our agent team to schedule curated viewings for homes
            that match your lifestyle and budget.
          </p>
          <Link
            href="/contact"
            className="button-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
          >
            Contact Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
