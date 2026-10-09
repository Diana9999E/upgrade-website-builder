"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "teb_cookie_ok_v1";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "1") setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function accept() {
    setShow(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!show) return null;

  return (
    <div className="cookie" role="region" aria-label="Cookie notice">
      <p>
        We use essential cookies to make this site work. By using it you agree to our{" "}
        <Link href="/privacy" style={{ color: "#ffd98a" }}>privacy policy</Link>.
      </p>
      <button className="btn btn--gold" onClick={accept}>Got it</button>
    </div>
  );
}
