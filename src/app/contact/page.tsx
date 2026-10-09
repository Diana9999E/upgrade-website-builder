import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { site, locations } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact — Catering, Events & General Inquiries",
  description:
    "Get in touch with The Egg Bistro for catering, private events, or general questions. Call your nearest location in Chesapeake or Virginia Beach, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Contact" }]}
        title="Get in touch"
        intro="Questions about catering, private events, or a recent visit? We'd love to hear from you."
      />

      <section className="band">
        <div className="wrap contact-grid">
          <div>
            <h2>Reach a location</h2>
            {locations.map((l) => (
              <p key={l.key} style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "var(--ink)" }}>{l.name}</strong><br />
                {l.street}, {l.city}, {l.region} {l.postal}<br />
                <a href={l.phoneHref}>{l.phone}</a>
              </p>
            ))}
            <p>
              Follow along on{" "}
              <a href={site.social.facebook} target="_blank" rel="noopener">Facebook</a> and{" "}
              <a href={site.social.instagram} target="_blank" rel="noopener">Instagram</a>.
            </p>
          </div>

          <div>
            <h2>Send a message</h2>
            <form
              action="https://formsubmit.co/el/placeholder"
              method="POST"
              className="card"
            >
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="topic">Reason</label>
                <select id="topic" name="topic" defaultValue="General">
                  <option>General question</option>
                  <option>Catering</option>
                  <option>Private event</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button className="btn btn--primary" type="submit">Send message</button>
              <p className="menu-item__desc" style={{ marginTop: "0.75rem" }}>
                This form needs a form endpoint connected before launch (e.g. a Vercel serverless
                function or a service like Formspree/Resend).
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
