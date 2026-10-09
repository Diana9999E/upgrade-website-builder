import { site, locations, primaryLocation, menu, faqs, orderUrlDefault } from "./data";

const RATING_GATE = 4.6;

function menuSchema() {
  return {
    "@type": "Menu",
    name: "The Egg Bistro Menu",
    hasMenuSection: menu.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      description: section.blurb,
      hasMenuItem: section.items.map((item) => {
        const offers = item.highPrice
          ? {
              "@type": "AggregateOffer",
              lowPrice: item.lowPrice,
              highPrice: item.highPrice,
              priceCurrency: "USD",
            }
          : {
              "@type": "Offer",
              price: item.lowPrice,
              priceCurrency: "USD",
            };
        return {
          "@type": "MenuItem",
          name: item.name,
          ...(item.desc ? { description: item.desc } : {}),
          offers,
        };
      }),
    })),
  };
}

export function restaurantSchema() {
  const loc = primaryLocation;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.longDesc,
    slogan: site.slogan,
    foundingDate: String(site.since),
    servesCuisine: site.cuisines,
    priceRange: site.priceRange,
    acceptsReservations: true,
    telephone: loc.phone,
    image: [`${site.url}/img/og-default.png`],
    sameAs: [site.social.facebook, site.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.region,
      postalCode: loc.postal,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    department: locations.map((l) => ({
      "@type": "Restaurant",
      name: `${site.name} – ${l.name}`,
      telephone: l.phone,
      url: l.orderUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: l.street,
        addressLocality: l.city,
        addressRegion: l.region,
        postalCode: l.postal,
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
    })),
    hasMenu: menuSchema(),
    potentialAction: {
      "@type": "OrderAction",
      target: { "@type": "EntryPoint", urlTemplate: orderUrlDefault, inLanguage: "en-US" },
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp"],
    },
  };

  // 4.6 gate: only surface aggregateRating when the real Google rating clears it.
  if (site.reviews.googleRating >= RATING_GATE) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.reviews.googleRating,
      reviewCount: site.reviews.googleCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.shortDesc,
    publisher: { "@id": `${site.url}/#restaurant` },
  };
}

export function faqSchema() {
  const strip = (html: string) => html.replace(/<[^>]+>/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: strip(f.a) },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.url}`,
    })),
  };
}
