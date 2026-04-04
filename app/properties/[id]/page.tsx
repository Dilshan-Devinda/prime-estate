import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";

type PropertyDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailPage({
  params,
}: PropertyDetailProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  const mapQuery = encodeURIComponent(`${property.location}, Sri Lanka`);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <div className="section-wrap py-10 md:py-14">
      <Link
        href="/properties"
        className="text-sm font-semibold uppercase tracking-[0.08em] hover:text-[var(--color-primary)]"
      >
        ← Back to Listings
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <section>
          <Image
            src={property.heroImage}
            alt={property.title}
            width={1600}
            height={1100}
            className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
          />
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {property.gallery.map((image, index) => (
              <Image
                key={`${property.id}-${index}`}
                src={image}
                alt={`${property.title} gallery image ${index + 1}`}
                width={1200}
                height={900}
                className="h-32 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </section>

        <aside className="luxury-surface rounded-3xl p-6 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
            {property.type}
          </p>
          <h1 className="mt-1 text-4xl">{property.title}</h1>
          <p className="mt-2 text-2xl font-semibold">
            LKR {property.price.toLocaleString()}
          </p>

          <div className="mt-5 space-y-2 text-[var(--color-muted)]">
            <p>Location: {property.location}</p>
            <p>Beds: {property.beds}</p>
            <p>Baths: {property.baths}</p>
            <p>Area: {property.areaSqFt.toLocaleString()} sq ft</p>
          </div>

          <p className="mt-5 leading-7 text-[var(--color-muted)]">
            {property.description}
          </p>

          <div className="mt-6 rounded-xl border border-black/10 bg-[var(--color-soft)] p-4">
            <p className="text-sm uppercase tracking-[0.08em] text-[var(--color-muted)]">
              Map Preview
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-black/10 bg-white">
              <iframe
                src={mapEmbedUrl}
                title={`${property.location} map preview`}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            >
              Open In Google Maps
            </a>
          </div>

          <Link
            href={`/contact?propertyId=${property.id}`}
            className="button-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
          >
            Contact Agent
          </Link>
        </aside>
      </div>
    </div>
  );
}
