"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { properties } from "@/data/properties";

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="section-wrap py-10 md:py-14">
          Loading contact form...
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const selectedPropertyId = searchParams.get("propertyId") ?? "";
  const selectedProperty = properties.find(
    (property) => property.id === selectedPropertyId,
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyId: selectedProperty?.id,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(
          data.error ?? "Could not send inquiry. Please try again.",
        );
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send inquiry. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="section-wrap py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Inquiry
          </p>
          <h1 className="mt-2 text-5xl">Contact Agent</h1>
          <p className="mt-4 max-w-xl leading-8 text-[var(--color-muted)]">
            Tell us what you are looking for and our team will reach out with
            hand-picked options matching your preferred location, budget, and
            style.
          </p>

          <div className="mt-6 rounded-2xl bg-[var(--color-soft)] p-5">
            <p className="font-semibold">Office Hours</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Monday - Saturday, 9:00 AM - 6:00 PM
            </p>
            <p className="mt-3 font-semibold">Email</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              hello@primeestates.com
            </p>
          </div>

          {selectedProperty && (
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md">
              <Image
                src={selectedProperty.heroImage}
                alt={selectedProperty.title}
                width={1200}
                height={800}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  Selected Property
                </p>
                <p className="mt-1 text-2xl">{selectedProperty.title}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {selectedProperty.location} • {selectedProperty.type}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  LKR {selectedProperty.price.toLocaleString()} •{" "}
                  {selectedProperty.beds} Beds • {selectedProperty.baths} Baths
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="luxury-surface rounded-3xl p-6 md:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold uppercase tracking-[0.08em]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold uppercase tracking-[0.08em]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold uppercase tracking-[0.08em]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3"
                  placeholder="I am interested in a 3-bedroom apartment in Colombo..."
                />
              </div>

              {errorMessage && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="button-primary w-full rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                {isSending ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          ) : (
            <div className="rounded-2xl bg-[var(--color-soft)] p-6 text-center">
              <h2 className="text-3xl">Inquiry Sent</h2>
              <p className="mt-2 text-[var(--color-muted)]">
                Thank you for contacting Prime Estates. Our team will get back
                to you shortly.
              </p>
              {selectedProperty && (
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  We also sent a confirmation with {selectedProperty.title}{" "}
                  details to your email.
                </p>
              )}
              <button
                className="button-secondary mt-5 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
                onClick={() => {
                  setIsSubmitted(false);
                  setErrorMessage("");
                }}
              >
                Send Another
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
