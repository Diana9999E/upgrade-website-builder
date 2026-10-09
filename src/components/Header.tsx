"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { orderPath, ordering } from "@/lib/data";

const mainLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/visit", label: "Visit" },
  { href: "/catering", label: "Catering" },
  { href: "/private-events", label: "Private Events" },
];

const moreLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hideOrder, setHideOrder] = useState(false);

  // Only ONE Order button visible at a time: hide the header's when any
  // in-page order CTA (.js-order-cta) is in the viewport.
  useEffect(() => {
    const ctas = Array.from(document.querySelectorAll<HTMLElement>(".js-order-cta"));
    if (ctas.length === 0) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        });
        setHideOrder(visible.size > 0);
      },
      { threshold: 0.2 }
    );
    ctas.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="brand" aria-label="The Egg Bistro home" onClick={() => setOpen(false)}>
          <Image src="/img/logo.png" alt="The Egg Bistro" width={48} height={48} priority className="brand__logo" />
          <span className="brand__name">The Egg Bistro</span>
        </Link>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Primary">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="nav__more">
            <button type="button" aria-haspopup="true">
              More <span aria-hidden>▾</span>
            </button>
            <div className="nav__menu">
              {moreLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            className={`btn btn--primary header-order${hideOrder ? " header-order--hidden" : ""}`}
            href={orderPath}
            onClick={() => setOpen(false)}
          >
            Order Online
          </Link>
        </nav>

        <div className="header-actions">
          <div
            className="cart-embed"
            data-restaurant-orders-cart
            data-embed-id={ordering.embedId}
            data-cart-icon="package"
            data-cart-label="Basket"
          />
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
