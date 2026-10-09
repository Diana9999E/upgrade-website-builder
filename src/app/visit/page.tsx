import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { site, locations } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Visit & Hours — Chesapeake & Virginia Beach",
  description:
    "The Egg Bistro locations and hours. Three neighborhood bistros in Hampton Roads: Greenbrier (Chesapeake), Strawbridge and Haygood (Virginia Beach). Open daily for breakfast and lunch.",
  alternates: { canonical: "/visit" },
};

export default function Visit() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Visit", url: "/visit" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Visit" }]}
        title="Visit & hours"
        intro="Three neighborhood bistros across Chesapeake and Virginia Beach. Open daily for breakfast and lunch."
      />

      <section className="band band--tight">
        <div className="wrap">
          <div className="card" style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>Hours — all locations</h3>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--ink)" }}>Monday – Friday</strong> {site.hours.weekday}
              {"   ·   "}
              <strong style={{ color: "var(--ink)" }}>Saturday – Sunday</strong> {site.hours.weekend}
            </p>
          </div>

          <div className="loc-grid">
            {locations.map((l) => (
              <div className="loc-card" id={l.key} key={l.key}>
                <h3>{l.name}</h3>
                <p className="addr">
                  {l.street}<br />
                  {l.city}, {l.region} {l.postal}
                </p>
                <a className="tel" href={l.phoneHref}>{l.phone}</a>
                <div className="loc-card__actions">
                  <a className="btn btn--primary" href={l.orderUrl} target="_blank" rel="noopener">Order Online</a>
                  <a className="btn btn--ghost" href={l.mapUrl} target="_blank" rel="noopener">Get Directions</a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p className="menu-item__desc" style={{ marginBottom: "1rem" }}>
              Ordering online? Please confirm you&apos;re ordering from the correct location — refunds are not
              offered for orders placed at the wrong restaurant. Bring a valid photo ID and the card used
              to order at pickup.
            </p>
            <Link className="btn btn--gold" href="/menu">See the menu →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
