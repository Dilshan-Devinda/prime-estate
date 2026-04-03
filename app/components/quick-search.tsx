"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { properties, PropertyType } from "@/data/properties";

export default function QuickSearch() {
  const router = useRouter();
  const locations = useMemo(
    () => ["All", ...new Set(properties.map((property) => property.location))],
    [],
  );

  const [location, setLocation] = useState("All");
  const [priceCap, setPriceCap] = useState("1300000");
  const [type, setType] = useState<"All" | PropertyType>("All");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new URLSearchParams();

    if (location !== "All") {
      query.set("location", location);
    }

    if (type !== "All") {
      query.set("type", type);
    }

    if (priceCap) {
      query.set("maxPrice", priceCap);
    }

    const queryString = query.toString();
    router.push(queryString ? `/properties?${queryString}` : "/properties");
  };

  return (
    <form onSubmit={handleSearch} className="grid gap-3 md:grid-cols-4">
      <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
        Location
        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="mt-2 w-full rounded-xl border border-black/10 bg-[var(--color-soft)] px-4 py-3 text-sm outline-none"
        >
          {locations.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
        Max Price
        <select
          value={priceCap}
          onChange={(event) => setPriceCap(event.target.value)}
          className="mt-2 w-full rounded-xl border border-black/10 bg-[var(--color-soft)] px-4 py-3 text-sm outline-none"
        >
          <option value="500000">Up to LKR 500,000</option>
          <option value="750000">Up to LKR 750,000</option>
          <option value="1000000">Up to LKR 1,000,000</option>
          <option value="1300000">Up to LKR 1,300,000</option>
        </select>
      </label>

      <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
        Property Type
        <select
          value={type}
          onChange={(event) =>
            setType(event.target.value as "All" | PropertyType)
          }
          className="mt-2 w-full rounded-xl border border-black/10 bg-[var(--color-soft)] px-4 py-3 text-sm outline-none"
        >
          <option value="All">All</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>
      </label>

      <button
        type="submit"
        className="button-primary mt-[1.45rem] rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em]"
      >
        Search
      </button>
    </form>
  );
}
