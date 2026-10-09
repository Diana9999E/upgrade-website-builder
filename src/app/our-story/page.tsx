import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Story — Locally Owned Brunch Since 2007",
  description:
    "How The Egg Bistro began: founders Doug Stumpf and Mike Touhey set out to reinvent brunch in Hampton Roads in 2007. Fresh, local ingredients, a team that loves what they do, and a commitment to giving back.",
  alternates: { canonical: "/our-story" },
};

export default function OurStory() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Our Story" }]}
        title="Eat, drink and be merry."
        intro="Locally owned and operated in Hampton Roads since 2007."
      />

      <section className="band">
        <div className="wrap prose">
          <p>
            In October of 2007, owners Doug Stumpf and Mike Touhey set out on a mission to change the
            way people think about brunch. After years spent crisscrossing the country, they kept
            running into the same problem: most cities were short on great breakfast spots. Basic food,
            limited options, and service that felt like an afterthought.
          </p>
          <p>
            Determined to show Hampton Roads that breakfast could be a genuinely good time, they went
            looking for the perfect spot — and The Egg Bistro was born in Chesapeake, Virginia. With the
            addition of culinary wizard Pat Perry, the Egg dream team was complete.
          </p>
          <h2>Fresh, local, made with care</h2>
          <p>
            The mission has always been simple: fresh, top-notch ingredients, locally sourced products
            from Virginia and North Carolina, and a team that genuinely loves what they do. The result is
            a breakfast experience that keeps people coming back — scratch-made benedicts, infused
            pancakes, hand-breaded chicken, and a brunch bar famous for its Bloody Marys.
          </p>
          <h2>Giving back, one egg at a time</h2>
          <p>
            Born and raised in the area, the owners have always believed in making the neighborhood a
            better place. Over the years The Egg Bistro has donated more than $300,000 to charities
            including the Humane Society, the SPCA, and local schools, and has built strong bonds with
            first responders and the military.
          </p>
          <p>
            Starting your day off right is serious business here — even if we don&apos;t take ourselves too
            seriously. So come on down, grab a seat, and let the Egg family take care of you. It&apos;s brunch
            time, and we&apos;re here to make it egg-stra special. Cheers!
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link className="btn btn--primary" href="/menu">Explore the menu →</Link>{" "}
            <Link className="btn btn--ghost" href="/visit">Visit us →</Link>
          </div>
        </div>
      </section>

      <section className="band band--soft">
        <div className="wrap">
          <div className="grid grid--3">
            <div className="card"><h3>Since 2007</h3><p>Founded in Chesapeake by Doug Stumpf and Mike Touhey, with chef Pat Perry.</p></div>
            <div className="card"><h3>$300,000+ donated</h3><p>To the Humane Society, SPCA, local schools, and community causes.</p></div>
            <div className="card"><h3>6 beers on tap</h3><p>Rotating local craft beers, plus award-winning Bloody Marys and mimosas.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
