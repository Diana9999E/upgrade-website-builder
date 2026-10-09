import Link from "next/link";
import Image from "next/image";
import { site, locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Image src="/img/logo.png" alt="The Egg Bistro" width={52} height={52} />
              The Egg Bistro
            </div>
            <p>{site.slogan}. Locally owned and operated in Hampton Roads since {site.since}.</p>
            <p>
              <a href={site.social.facebook} target="_blank" rel="noopener">Facebook</a>
              {"  ·  "}
              <a href={site.social.instagram} target="_blank" rel="noopener">Instagram</a>
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/catering">Catering</Link></li>
              <li><Link href="/private-events">Private Events</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Hours</h4>
            <ul>
              <li>Mon–Fri</li>
              <li><strong style={{ color: "#fff" }}>{site.hours.weekday}</strong></li>
              <li style={{ marginTop: "0.6rem" }}>Sat–Sun</li>
              <li><strong style={{ color: "#fff" }}>{site.hours.weekend}</strong></li>
            </ul>
          </div>

          <div>
            <h4>Locations</h4>
            <ul>
              {locations.map((l) => (
                <li key={l.key}>
                  <a href={l.mapUrl} target="_blank" rel="noopener">{l.name}</a>
                  <br />
                  <span style={{ fontSize: "0.82rem" }}>{l.street}, {l.city}</span>
                  <br />
                  <a className="tel" href={l.phoneHref}>{l.phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Egg Bistro. All rights reserved.</span>
          <a className="eatfuti" href="https://eatfuticonnect.com/" target="_blank" rel="noopener">
            <Image src="/img/eatfuti-logo-light.png" alt="EatFuti" width={96} height={26} />
            <span style={{ fontSize: "0.82rem" }}>Powered by EatFuti · Built with love in Virginia Beach, VA</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
