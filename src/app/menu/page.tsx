import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { menu, orderPath, type MenuItem } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/structured-data";

export const revalidate = 86400; // ISR: re-render the menu daily or on redeploy

export const metadata: Metadata = {
  title: "Menu — Brunch, Benedicts, Omelets, Burgers & More",
  description:
    "The full Egg Bistro menu: Bistro Brunch, Bowls, Sweet Up & Down pancakes and French toast, Omelets, Benedicts, salads, handhelds, burgers, kids menu, and beverages. Made fresh to order.",
  alternates: { canonical: "/menu" },
};

function tagClass(tag: string) {
  const t = tag.toLowerCase();
  if (t.includes("vegan")) return "tag tag--vegan";
  if (t.includes("spicy")) return "tag tag--spicy";
  if (t.includes("house")) return "tag tag--house";
  return "tag tag--gfo";
}

function Item({ item }: { item: MenuItem }) {
  return (
    <div className="menu-item">
      <div className="menu-item__head">
        <span className="menu-item__name">
          {item.name}
          {item.tags?.map((t) => (
            <span key={t} className={tagClass(t)}>{t}</span>
          ))}
        </span>
        <span className="menu-item__dots" />
        <span className="menu-item__price">{item.price}</span>
      </div>
      {item.desc && <p className="menu-item__desc">{item.desc}</p>}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Menu", url: "/menu" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Menu" }]}
        title="The menu"
        intro="Breakfast and lunch served all day, made fresh to order. 20% gratuity added to parties of 5 or more. Prices and availability may vary by location."
      />

      <div className="menu-nav">
        <div className="wrap">
          <ul>
            {menu.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="band--tight">
        <div className="wrap">
          {menu.map((section) => (
            <div className="menu-section" id={section.id} key={section.id}>
              <h2>{section.name}</h2>
              {section.blurb && <p className="blurb">{section.blurb}</p>}
              <div className="menu-list">
                {section.items.map((item) => (
                  <Item key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p className="menu-item__desc" style={{ marginBottom: "1rem" }}>
              *Items may be prepared raw or undercooked. Consuming raw or undercooked meats, poultry,
              seafood, shellfish, or eggs may increase your risk of foodborne illness. We are not a
              gluten-free, nut-free, or dairy-free kitchen and cannot guarantee against cross contamination.
            </p>
            <Link className="btn btn--primary js-order-cta" href={orderPath}>
              Order Online
            </Link>{" "}
            <Link className="btn btn--ghost" href="/visit">Find a location →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
