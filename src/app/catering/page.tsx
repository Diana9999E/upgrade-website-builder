import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Catering — Brunch Catering Across Hampton Roads",
  description:
    "The Egg Bistro offers off-site brunch and breakfast catering across Hampton Roads for offices, parties, and gatherings. Fresh, made-to-order food your guests will remember.",
  alternates: { canonical: "/catering" },
};

export default function Catering() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Catering", url: "/catering" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Catering" }]}
        title="Catering"
        intro="Bring The Egg Bistro to your next gathering. Off-site brunch and breakfast catering across Hampton Roads."
      />

      <section className="band">
        <div className="wrap prose">
          <p>
            Whether it&apos;s a morning office meeting, a baby shower, a team celebration, or a family
            get-together, our catering team brings the same fresh, made-to-order food our regulars love —
            straight to you. We cater across Chesapeake and Virginia Beach and are available seven nights a
            week for events.
          </p>
          <h2>What we cater</h2>
          <p>
            Build a spread around brunch classics: scrambled eggs and benedicts, infused pancakes and
            French toast, breakfast burritos and bowls, fresh fruit, salads, and handhelds. We&apos;ll help you
            plan portions and pickup or drop-off that fits your headcount and budget.
          </p>
          <div className="grid grid--3" style={{ margin: "2rem 0" }}>
            <div className="card"><h3>Offices & meetings</h3><p>Breakfast and lunch platters that travel well and feed a crowd.</p></div>
            <div className="card"><h3>Showers & parties</h3><p>Brunch favorites for birthdays, showers, and celebrations.</p></div>
            <div className="card"><h3>Rehearsal dinners</h3><p>Relaxed, crowd-pleasing menus for the people who matter most.</p></div>
          </div>
          <Link className="btn btn--primary" href="/contact">Request catering →</Link>{" "}
          <Link className="btn btn--ghost" href="/private-events">See private events →</Link>
        </div>
      </section>
    </>
  );
}
