import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { locations } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Order Online — Pickup from Any Location",
  description:
    "Order The Egg Bistro online for pickup. Choose your location — Greenbrier in Chesapeake, or Strawbridge and Haygood in Virginia Beach.",
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
        intro="Pick your location to start an order for pickup. Please confirm your location before ordering — refunds are not offered for orders placed at the wrong restaurant."
      />

      <section className="band">
        <div className="wrap">
          <div className="loc-grid">
            {locations.map((l) => (
              <div className="loc-card" key={l.key}>
                <h3>{l.name}</h3>
                <p className="addr">{l.street}<br />{l.city}, {l.region} {l.postal}</p>
                <a className="tel" href={l.phoneHref}>{l.phone}</a>
                <div className="loc-card__actions">
                  <a className="btn btn--primary" href={l.orderUrl} target="_blank" rel="noopener">
                    Start order
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="menu-item__desc" style={{ textAlign: "center", marginTop: "2rem" }}>
            Bring a valid photo ID and the credit card used to place your order at pickup.
          </p>
        </div>
      </section>
    </>
  );
}
