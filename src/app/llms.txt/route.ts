import { site, locations, menu, faqs } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  const strip = (s: string) => s.replace(/<[^>]+>/g, "");

  const lines: string[] = [];
  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.shortDesc}`);
  lines.push("");
  lines.push("## Current Status");
  lines.push(`- Open and serving breakfast and lunch daily.`);
  lines.push(`- Hours: Monday–Friday ${site.hours.weekday}; Saturday–Sunday ${site.hours.weekend}.`);
  lines.push(`- Online ordering available for pickup at all locations.`);
  lines.push(`- Rating: ${site.reviews.googleRating}/5 from ${site.reviews.googleCount.toLocaleString()} Google reviews.`);
  lines.push("");

  lines.push("## Locations");
  for (const l of locations) {
    lines.push(`- ${site.name} ${l.name}: ${l.street}, ${l.city}, ${l.region} ${l.postal}. Phone: ${l.phone}. Order: ${l.orderUrl}`);
  }
  lines.push("");

  lines.push("## About");
  lines.push(strip(site.longDesc));
  lines.push(`Founded in ${site.since} by ${site.owners.join(" and ")}, with chef ${site.chef}. Locally owned and operated in Hampton Roads, Virginia.`);
  lines.push("");

  lines.push("## Menu");
  for (const section of menu) {
    lines.push(`### ${section.name}`);
    if (section.blurb) lines.push(strip(section.blurb));
    for (const item of section.items) {
      const desc = item.desc ? ` — ${strip(item.desc)}` : "";
      lines.push(`- ${item.name} (${item.price})${desc}`);
    }
    lines.push("");
  }

  lines.push("## FAQ");
  for (const f of faqs) {
    lines.push(`Q: ${f.q}`);
    lines.push(`A: ${strip(f.a)}`);
    lines.push("");
  }

  lines.push("## Links");
  lines.push(`- Website: ${site.url}`);
  lines.push(`- Menu: ${site.url}/menu`);
  lines.push(`- Order online: ${site.url}/order`);
  lines.push(`- Facebook: ${site.social.facebook}`);
  lines.push(`- Instagram: ${site.social.instagram}`);

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
