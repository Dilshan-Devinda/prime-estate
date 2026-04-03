"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PropertyType, properties } from "@/data/properties";

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  const locations = useMemo(
    () => ["All", ...new Set(properties.map((property) => property.location))],
    [],
  );

  const initialType =
    searchParams.get("type") === "House" ||
    searchParams.get("type") === "Apartment"
      ? (searchParams.get("type") as PropertyType)
      : "All";

  const locationParam = searchParams.get("location") ?? "All";
  const initialLocation = locations.includes(locationParam)
    ? locationParam
    : "All";

  const parsedPrice = Number(searchParams.get("maxPrice"));
  const initialPriceCap =
    !Number.isNaN(parsedPrice) &&
    parsedPrice >= 400000 &&
    parsedPrice <= 1300000
      ? parsedPrice
      : 1300000;

  const [selectedType, setSelectedType] = useState<"All" | PropertyType>(
    initialType,
  );
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [priceCap, setPriceCap] = useState(initialPriceCap);

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        const typeMatch =
          selectedType === "All" || property.type === selectedType;
        const locationMatch =
          selectedLocation === "All" || property.location === selectedLocation;
        const priceMatch = property.price <= priceCap;
        return typeMatch && locationMatch && priceMatch;
      }),
    [selectedType, selectedLocation, priceCap],
  );

  return (
    <div className="section-wrap py-10 md:py-14">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)]">
          Property Listings
        </p>
        <h1 className="mt-2 text-5xl">Browse Luxury Homes</h1>
      </div>

      <section className="luxury-surface mb-8 rounded-2xl p-5 md:p-6">
        <h2 className="text-2xl">Filters</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="text-sm font-medium text-[var(--color-muted)]">
            Property Type
            <select
              value={selectedType}
              onChange={(event) =>
                setSelectedType(event.target.value as "All" | PropertyType)
              }
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2"
            >
              <option value="All">All</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
            </select>
          </label>

          <label className="text-sm font-medium text-[var(--color-muted)]">
            Location
            <select
              value={selectedLocation}
              onChange={(event) => setSelectedLocation(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-[var(--color-muted)]">
            Max Price: LKR {priceCap.toLocaleString()}
            <input
              type="range"
              min={400000}
              max={1300000}
              step={10000}
              value={priceCap}
              onChange={(event) => setPriceCap(Number(event.target.value))}
              className="mt-4 w-full accent-[var(--color-primary)]"
            />
          </label>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <article
            key={property.id}
            className="luxury-surface overflow-hidden rounded-2xl"
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
                {property.type}
              </p>
              <h3 className="mt-1 text-2xl">{property.title}</h3>
              <p className="mt-2 text-lg font-semibold">
                LKR {property.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {property.location}
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {property.beds} Beds • {property.baths} Baths
              </p>
              <Link
                href={`/properties/${property.id}`}
                className="mt-4 inline-block rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-[var(--color-primary)]"
              >
                View Property
              </Link>
            </div>
          </article>
        ))}
      </section>

      {filteredProperties.length === 0 && (
        <p className="mt-8 rounded-xl bg-white p-4 text-center text-[var(--color-muted)]">
          No properties match your filters. Try adjusting location, type, or max
          price.
        </p>
      )}
    </div>
  );
}
