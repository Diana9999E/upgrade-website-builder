import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Private Events — Parties, Showers & Celebrations",
  description:
    "Host your next celebration at The Egg Bistro. Private events with space for up to 150 guests, full food and bar menus, six craft beers on tap, and add-ons like DJs, live music, photo booths, and karaoke.",
  alternates: { canonical: "/private-events" },
};

export default function PrivateEvents() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Private Events", url: "/private-events" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Private Events" }]}
        title="Private events"
        intro="A space built for a good time. Host your celebration with us — up to 150 guests, seven nights a week."
      />

      <section className="band">
        <div className="wrap prose">
          <p>
            The Egg Bistro is available seven nights a week for private events — office parties,
            rehearsal dinners, birthdays, reunions, and everything in between. We offer an expansive food
            and bar menu, six rotating craft beers on tap, and space for up to 150 guests.
          </p>
          <h2>Make it yours</h2>
          <p>
            Packages can include DJs, live music, photo booths, and karaoke, so you can tailor the night to
            your crowd. Tell us what you&apos;re celebrating and we&apos;ll help you build the menu and the vibe.
          </p>
          <div className="grid grid--4" style={{ margin: "2rem 0" }}>
            <div className="card"><h3>Up to 150</h3><p>Room for big celebrations.</p></div>
            <div className="card"><h3>Full bar</h3><p>Craft beer, mimosas &amp; Bloody Marys.</p></div>
            <div className="card"><h3>7 nights</h3><p>Available every night of the week.</p></div>
            <div className="card"><h3>Add-ons</h3><p>DJ, live music, photo booth, karaoke.</p></div>
          </div>
          <Link className="btn btn--primary" href="/contact">Plan your event →</Link>{" "}
          <Link className="btn btn--ghost" href="/catering">Off-site catering →</Link>
        </div>
      </section>
    </>
  );
}
