import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import OrderEmbed from "@/components/OrderEmbed";
import { locations } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Order Online — Pickup from Any Location",
  description:
    "Order The Egg Bistro online for pickup. Browse the menu, build your basket, and check out — Greenbrier in Chesapeake, or Strawbridge and Haygood in Virginia Beach.",
  alternates: { canonical: "/order" },
};

export default function Order() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Order", url: "/order" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Order" }]}
        title="Order online"
        intro="Browse the menu, add to your basket, and check out below. Please confirm your location before ordering — refunds are not offered for orders placed at the wrong restaurant."
      />

      <section className="band band--tight">
        <div className="wrap">
          <div className="order-embed-wrap">
            <OrderEmbed />
            <noscript>
              <p>Please enable JavaScript to order online, or call your nearest location below.</p>
            </noscript>
          </div>

          <p className="menu-item__desc" style={{ textAlign: "center", marginTop: "1.5rem" }}>
            Having trouble with the order widget? You can also call your location to order ahead. Bring a
            valid photo ID and the credit card used to place your order at pickup.
          </p>

          <div className="loc-grid" style={{ marginTop: "2rem" }}>
            {locations.map((l) => (
              <div className="loc-card" key={l.key}>
                <h3>{l.name}</h3>
                <p className="addr">{l.street}<br />{l.city}, {l.region} {l.postal}</p>
                <a className="tel" href={l.phoneHref}>{l.phone}</a>
                <div className="loc-card__actions">
                  <a className="btn btn--ghost" href={l.mapUrl} target="_blank" rel="noopener">Directions</a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="btn btn--ghost" href="/menu">View the full menu →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
