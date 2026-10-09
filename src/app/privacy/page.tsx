import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Egg Bistro collects and uses information on this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "The Egg Bistro", href: "/" }, { name: "Privacy" }]}
        title="Privacy policy"
      />
      <section className="band band--tight">
        <div className="wrap prose">
          <p>This policy explains how {site.name} handles information collected through this website.</p>
          <h2>Information we collect</h2>
          <p>
            We collect only what you choose to share — for example, your name, email, and message when
            you use our contact form, or your phone number if you join our rewards program at the
            restaurant. We use essential cookies to make the site function.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information to respond to inquiries, fulfill catering and event requests, and
            administer our rewards program. We do not sell your personal information.
          </p>
          <h2>Online ordering</h2>
          <p>
            Online orders are processed by our third-party ordering provider. Payment and order details
            are handled on their platform under their privacy and security practices.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach out through our{" "}
            <a href="/contact">contact page</a> or call your nearest location.
          </p>
          <p className="menu-item__desc">
            This is a general template. Have it reviewed and tailored to your business before launch.
          </p>
        </div>
      </section>
    </>
  );
}
