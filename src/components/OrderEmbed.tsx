import { ordering } from "@/lib/data";

// EatFuti ordering widget. The loader script (loaded once in the root layout)
// scans the DOM for this element and renders the full ordering experience into it.
export default function OrderEmbed() {
  return <div data-restaurant-orders data-embed-id={ordering.embedId} />;
}
