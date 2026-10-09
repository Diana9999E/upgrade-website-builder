import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { site, locations, orderPath } from "@/lib/data";
import { faqSchema } from "@/lib/structured-data";

const featured = [
  { name: "Shrimp & Grits “The Santos”", price: "$18.99", desc: "Grilled shrimp in New Orleans étouffée over smoked gouda stone-ground grits.", href: "/menu#bistro-brunch" },
  { name: "Bennie & the Grits", price: "$18.99", desc: "Fried grit cakes, Cajun shrimp, smoked sausage, poached eggs, and hollandaise.", href: "/menu#benedicts" },
  { name: "Banana Nut Bread French Toast", price: "$16.99", desc: "House-baked banana nut bread, caramel bourbon sauce, and pecans.", href: "/menu#sweet-up-and-down" },
  { name: "The Egg Bistro Burger", price: "$16.49", desc: "8 oz. Angus, applewood bacon, American cheese, and a fried egg.", href: "/menu#handhelds" },
  { name: "Southern Chicken Salad Croissant", price: "$17.49", desc: "Chicken salad, fried green tomatoes, bacon, and hot honey on a croissant.", href: "/menu#handhelds" },
  { name: "Monterrey Breakfast Tacos", price: "$14.99", desc: "Three tortillas, scrambled eggs, cotija, pico, avocado, and chimichurri aioli.", href: "/menu#bistro-brunch" },
  { name: "2up 2down", price: "$15.99", desc: "Cinnamon swirl French toast stacked with hand-battered hot chicken.", href: "/menu#sweet-up-and-down" },
  { name: "Cinnamon Swirl French Toast", price: "$14.99", desc: "Extra-thick local cinnamon swirl bread in our signature batter.", href: "/menu#sweet-up-and-down" },
];

const favorites = [
  { name: "Shrimp & Grits", href: "/menu#bistro-brunch" },
  { name: "Chicken & Waffles", href: "/menu#sweet-up-and-down" },
  { name: "Avocado Toast", href: "/menu#bistro-brunch" },
  { name: "The Egg Bistro Burger", href: "/menu#handhelds" },
  { name: "Bennie & the Grits", href: "/menu#benedicts" },
  { name: "Firecracker Omelet", href: "/menu#omelets" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema()} />

      {/* Hero */}
      <section className="hero">
        <div className="wrap hero__inner">
          <div>
            <span className="hero__tag">★ 4.8 on Google · {site.reviews.googleCount.toLocaleString()} reviews</span>
            <h1>Where Hampton Roads comes for brunch.</h1>
            <p className="lead">
              Fresh, scratch-made breakfast and lunch since 2007 — benedicts, infused pancakes,
              hand-breaded chicken, award-winning Bloody Marys, and six craft beers on tap. Eat, drink
              and be merry.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary js-order-cta" href={orderPath}>
                Order Online
              </Link>
              <Link className="btn btn--ghost" href="/menu">See the menu →</Link>
            </div>
            <div className="hero__meta">
              <div><strong>Open daily</strong>Mon–Fri 7a–2p · Sat–Sun 7a–3p</div>
              <div><strong>3 locations</strong>Chesapeake & Virginia Beach</div>
              <div><strong>Since 2007</strong>Locally owned &amp; operated</div>
            </div>
          </div>
          <div className="hero__art">
            <div className="eggcard">
              <span className="eggcard__badge">Voted Best Bloody Mary</span>
              <p className="eyebrow">The Egg Bistro</p>
              <h3 style={{ fontSize: "1.9rem" }}>Brunch done right, every single day.</h3>
              <p style={{ fontSize: "0.95rem" }}>
                An independent neighborhood bistro built on fresh, top-notch ingredients and locally
                sourced products — with a team that genuinely loves what they do.
              </p>
              <div className="stat-row">
                <div className="stat"><b>4.8★</b><span>Google rating</span></div>
                <div className="stat"><b>18+</b><span>years serving</span></div>
                <div className="stat"><b>150</b><span>guests for events</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="band band--tight">
        <div className="wrap">
          <div className="grid grid--3">
            <div className="card">
              <h3>Made fresh to order</h3>
              <p>Every entrée is cooked when you order it, with the freshest ingredients and local products as they are available.</p>
            </div>
            <div className="card">
              <h3>A full brunch bar</h3>
              <p>Award-winning Bloody Marys, mimosas, and six rotating craft beers on tap — including local pours from Big Ugly Brewing.</p>
            </div>
            <div className="card">
              <h3>Something for everyone</h3>
              <p>Gluten-friendly options, vegetarian and vegan plates, and a kids menu. We carry gluten-free multigrain bread.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="band band--soft">
        <div className="wrap">
          <div className="section-head section-head--center">
            <p className="eyebrow">Fan favorites</p>
            <h2>Dishes people drive across town for</h2>
          </div>
          <div className="grid grid--4">
            {featured.map((d) => (
              <Link key={d.name} href={d.href} className="dish-tile">
                <div className="yolk-dot" />
                <h3>{d.name}</h3>
                <span className="price">{d.price}</span>
                <p>{d.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local favorites */}
      <section className="band">
        <div className="wrap favorites">
          <div className="fav-plate"><span>Fresh off<br />the griddle</span></div>
          <div>
            <p className="eyebrow">Local favorites</p>
            <h2>The most-ordered plates in Hampton Roads</h2>
            <p>From New Orleans-style shrimp and grits to our signature cinnamon swirl French toast, these are the dishes our regulars order again and again.</p>
            <ul className="fav-list">
              {favorites.map((f) => (
                <li key={f.name}><Link href={f.href}>{f.name} →</Link></li>
              ))}
            </ul>
            <Link className="btn btn--gold" href="/menu">See the full menu →</Link>
          </div>
        </div>
      </section>

      {/* Signature / brunch experience band */}
      <section className="band band--ink">
        <div className="wrap deal">
          <div className="fav-plate" style={{ background: "radial-gradient(circle at 42% 38%, #ffe49b, #f0a81c 60%, #d98a06)" }}>
            <span style={{ color: "#2b2016" }}>Weekend<br />Brunch</span>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "#f0a81c" }}>The house pour</p>
            <h2>Best Bloody Mary in Hampton Roads</h2>
            <p>
              Our brunch bar is the real deal — a build-worthy Bloody Mary that keeps winning over the
              region, bottomless mimosas, and six craft beers rotating on tap. Pair it with benedicts,
              waffles, or a burger and settle in.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--gold js-order-cta" href={orderPath}>Order Online</Link>
              <Link className="btn btn--light" href="/visit">Find a location →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="band band--cream">
        <div className="wrap" style={{ maxWidth: 820, textAlign: "center" }}>
          <p className="eyebrow">Our story</p>
          <h2>Twenty-five years chasing the perfect breakfast.</h2>
          <p className="lead" style={{ margin: "0 auto 1.5rem" }}>
            In 2007, Doug Stumpf and Mike Touhey set out to revolutionize brunch in Hampton Roads after
            years on the road. With chef Pat Perry, they built a bistro around fresh ingredients, local
            products, and giving back — over $300,000 donated to the community and counting.
          </p>
          <Link className="btn btn--ghost" href="/our-story">Read our story →</Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="band">
        <div className="wrap">
          <div className="section-head section-head--center">
            <p className="eyebrow">What people say</p>
            <h2>Loved across Hampton Roads</h2>
          </div>
          <div className="rating-row">
            <div className="rating">
              <b>4.8</b>
              <div className="stars">★★★★★</div>
              <span>{site.reviews.googleCount.toLocaleString()} Google reviews</span>
            </div>
            <div className="rating">
              <b>4.4</b>
              <div className="stars">★★★★☆</div>
              <span>{site.reviews.tripadvisorCount} Tripadvisor reviews</span>
            </div>
            <div className="rating">
              <b>#2</b>
              <div className="stars">★★★★★</div>
              <span>Best restaurants in Chesapeake</span>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.9rem" }}>
            See reviews on{" "}
            <a href={site.reviews.googleUrl} target="_blank" rel="noopener">Google</a> ·{" "}
            <a href={site.reviews.tripadvisorUrl} target="_blank" rel="noopener">Tripadvisor</a>
          </p>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="band band--soft">
        <div className="wrap">
          <div className="section-head section-head--center">
            <p className="eyebrow">Come see us</p>
            <h2>Three neighborhood bistros, one great brunch</h2>
          </div>
          <div className="loc-grid">
            {locations.map((l) => (
              <div className="loc-card" key={l.key}>
                <h3>{l.name}</h3>
                <p className="addr">{l.street}<br />{l.city}, {l.region} {l.postal}</p>
                <a className="tel" href={l.phoneHref}>{l.phone}</a>
                <div className="loc-card__actions">
                  <Link className="btn btn--primary js-order-cta" href={orderPath}>Order</Link>
                  <a className="btn btn--ghost" href={l.mapUrl} target="_blank" rel="noopener">Directions</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
