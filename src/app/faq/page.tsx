import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/data";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ — Hours, Locations, Ordering & More",
  description:
    "Answers to common questions about The Egg Bistro: locations and hours, online ordering and pickup, reservations, dietary options, catering, private events, and our rewards program.",
  alternates: { canonical: "/faq" },
};

export default function FAQ() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
        ]}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "FAQ" }]}
        title="Frequently asked questions"
        intro="Everything you need to know before your visit."
      />

      <section className="band band--tight">
        <div className="wrap" style={{ maxWidth: 820 }}>
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="answer" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
