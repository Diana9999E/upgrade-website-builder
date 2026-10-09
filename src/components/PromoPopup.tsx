"use client";

import { useEffect, useState } from "react";
import { site, orderUrlDefault } from "@/lib/data";

const KEY = "teb_promo_dismissed_v1";

export default function PromoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!site.promo.enabled) return;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(KEY) === "1";
    } catch {
      /* storage blocked */
    }
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  function close() {
    setShow(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!show) return null;

  return (
    <div className="promo-overlay" role="dialog" aria-modal="true" aria-label={site.promo.title} onClick={close}>
      <div className="promo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="promo-modal__close" aria-label="Close" onClick={close}>×</button>
        <div className="yolk-dot" />
        <p className="eyebrow">{site.promo.eyebrow}</p>
        <h3 style={{ marginBottom: "0.5rem" }}>{site.promo.title}</h3>
        <p>{site.promo.text}</p>
        <a className="btn btn--primary" href={orderUrlDefault} target="_blank" rel="noopener" onClick={close}>
          {site.promo.cta}
        </a>
      </div>
    </div>
  );
}
