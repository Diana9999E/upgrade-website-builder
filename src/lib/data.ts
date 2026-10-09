// Single source of truth for The Egg Bistro.
// All content is sourced from the restaurant's own menu PDF, website, and
// Google/Tripadvisor business listings (October 2026). No fabricated data.

export type MenuItem = {
  name: string;
  desc?: string;
  price: string; // display string, e.g. "$9.99" or "$5.99 / $10.99"
  lowPrice?: string; // numeric, for schema
  highPrice?: string; // numeric, for schema AggregateOffer
  tags?: string[]; // e.g. "GFO", "Spicy", "Vegan", "House Specialty"
};

export type MenuSection = {
  id: string;
  name: string;
  blurb?: string;
  items: MenuItem[];
};

export type Location = {
  key: string;
  name: string;
  street: string;
  city: string;
  region: string;
  postal: string;
  phone: string;
  phoneHref: string;
  orderUrl: string;
  mapUrl: string;
  lat: number;
  lng: number;
};

export const site = {
  name: "The Egg Bistro",
  legalName: "The Egg Bistro",
  slogan: "Eat, Drink & Be Merry",
  since: 2007,
  shortDesc:
    "An independently owned neighborhood brunch bistro serving fresh, scratch-made breakfast and lunch across Hampton Roads since 2007.",
  longDesc:
    "The Egg Bistro is a locally owned and operated brunch bistro in Hampton Roads, Virginia. Since 2007 we have served fresh, made-to-order breakfast and lunch using the freshest ingredients and local products, in a hip, family-friendly setting. Expect scratch-made benedicts, infused pancakes, hand-breaded chicken, award-winning Bloody Marys, and six rotating craft beers on tap.",
  url: "https://theeggbistro.com",
  email: "info@theeggbistro.com",
  cuisines: ["Breakfast", "Brunch", "American", "Sandwiches", "Burgers"],
  priceRange: "$$",
  social: {
    facebook: "https://www.facebook.com/theeggbistro/",
    instagram: "https://www.instagram.com/theeggbistro/",
  },
  hours: {
    weekday: "7:00 AM – 2:00 PM",
    weekend: "7:00 AM – 3:00 PM",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "14:00" },
      { days: ["Saturday", "Sunday"], opens: "07:00", closes: "15:00" },
    ],
  },
  // Primary location used for geo meta + Restaurant schema address.
  primaryLocationKey: "haygood",
  reviews: {
    googleRating: 4.8,
    googleCount: 7462,
    tripadvisorRating: 4.4,
    tripadvisorCount: 753,
    googleUrl: "https://www.google.com/maps/search/The+Egg+Bistro+Virginia",
    tripadvisorUrl: "https://www.tripadvisor.com/",
  },
  promo: {
    enabled: true,
    eyebrow: "Egg Bistro VIP Rewards",
    title: "Earn points every time you dine",
    text:
      "Join our Rewards Club and earn 1 point for every $1 spent. Reach 200 points and unlock a $10 reward. VIP birthday perk: $5 off during your birthday month. Just give your mobile number at checkout.",
    cta: "Order online",
  },
  owners: ["Doug Stumpf", "Mike Touhey"],
  chef: "Pat Perry",
} as const;

export const locations: Location[] = [
  {
    key: "greenbrier",
    name: "Greenbrier",
    street: "501 Kempsville Road",
    city: "Chesapeake",
    region: "VA",
    postal: "23320",
    phone: "(757) 410-8515",
    phoneHref: "tel:+17574108515",
    orderUrl: "https://www.theeggbistro.com/greenbrier",
    mapUrl: "https://maps.google.com/?q=The+Egg+Bistro+501+Kempsville+Road+Chesapeake+VA+23320",
    lat: 36.7683,
    lng: -76.2374,
  },
  {
    key: "strawbridge",
    name: "Strawbridge",
    street: "2129 General Booth Blvd, Ste 105",
    city: "Virginia Beach",
    region: "VA",
    postal: "23454",
    phone: "(757) 689-6312",
    phoneHref: "tel:+17576896312",
    orderUrl: "https://www.theeggbistro.com/strawbridge",
    mapUrl: "https://maps.google.com/?q=The+Egg+Bistro+2129+General+Booth+Blvd+Virginia+Beach+VA+23454",
    lat: 36.7698,
    lng: -76.0486,
  },
  {
    key: "haygood",
    name: "Haygood",
    street: "1033 Independence Blvd",
    city: "Virginia Beach",
    region: "VA",
    postal: "23455",
    phone: "(757) 524-5488",
    phoneHref: "tel:+17575245488",
    orderUrl: "https://www.theeggbistro.com/haygood",
    mapUrl: "https://maps.google.com/?q=The+Egg+Bistro+1033+Independence+Blvd+Virginia+Beach+VA+23455",
    lat: 36.8869,
    lng: -76.1544,
  },
];

export const primaryLocation =
  locations.find((l) => l.key === site.primaryLocationKey) ?? locations[0];

export const orderUrlDefault = primaryLocation.orderUrl;

// EatFuti embedded ordering + cart. Order CTAs route to the internal /order
// page, where the widget renders; the cart lives in the site header.
export const ordering = {
  embedId: "8ce3fccd-30c4-4f1e-b294-396a0bdf71d9",
  loaderSrc: "https://staging.embed.orders.eatfuti.ai/v1/loader.js",
};

// Internal path to the ordering experience (the embed lives here).
export const orderPath = "/order";

export const menu: MenuSection[] = [
  {
    id: "bistro-brunch",
    name: "Bistro Brunch",
    blurb:
      "Each entrée made fresh to order. Served with your choice of hash browns, stone-ground grits, or dressed greens unless noted.",
    items: [
      { name: "The Don", desc: "Two eggs any style with applewood or peppered bacon, Edwards sausage links, or pork sausage patties, your choice of side, and toast.", price: "$9.99", lowPrice: "9.99", tags: ["GFO"] },
      { name: "BYO Sandy", desc: "Build-your-own breakfast sandwich: your bread, two eggs, cheese, and your choice of bacon, sausage, ham, or turkey. Served with a side.", price: "$12.99", lowPrice: "12.99", tags: ["GFO"] },
      { name: "BLT", desc: "Applewood or peppered bacon, crisp lettuce, tomato, and mayo on toast, topped with two eggs any style. Served with a side.", price: "$11.99", lowPrice: "11.99", tags: ["GFO"] },
      { name: "Brunch Wrap", desc: "Chorizo, blackened chicken, or carnitas with scrambled eggs, pico de gallo, black beans, cotija and cheddar, pickled onions, and a crunchy corn tortilla. Finished with Sriracha aioli.", price: "$16.99", lowPrice: "16.99", tags: ["Spicy GF", "House Specialty"] },
      { name: "Country Ham", desc: "Grilled, locally sourced Virginia salt-cured country ham with two eggs any style, a side, and a fresh biscuit.", price: "$15.99", lowPrice: "15.99", tags: ["GFO"] },
      { name: "Monterrey Breakfast Tacos", desc: "Three grilled flour tortillas with scrambled eggs, cotija, pico de gallo, black beans, pickled onions, avocado, cilantro, and chimichurri aioli.", price: "$14.99", lowPrice: "14.99", tags: ["House Specialty"] },
      { name: "Steak & Eggs", desc: "An 8 oz. sirloin grilled to your preference with two eggs any style, a side, and a fresh biscuit.", price: "$24.99", lowPrice: "24.99", tags: ["GFO"] },
      { name: "Country Fried Steak", desc: "Lightly breaded and fried steak smothered in house-made sausage gravy with two eggs any style, a side, and a biscuit.", price: "$17.99", lowPrice: "17.99" },
      { name: "Housemade Corned Beef Hash", desc: "Slow-roasted corned beef brisket chopped with fresh-cut potatoes, onions, and house seasonings. Two eggs any style, a side, and a biscuit.", price: "$14.99", lowPrice: "14.99", tags: ["GFO"] },
      { name: "Bob's Biscuits & Gravy", desc: "Two fluffy buttermilk biscuits smothered in house-made sausage gravy with two eggs any style and a side.", price: "$12.99", lowPrice: "12.99" },
      { name: "Chicken Biscuit Stack", desc: "Hand-breaded chicken breast stacked with folded scrambled eggs and house-made sausage gravy over a split buttermilk biscuit.", price: "$14.99", lowPrice: "14.99", tags: ["GFO"] },
      { name: "Shrimp & Grits “The Santos”", desc: "Grilled shrimp in a New Orleans-style étouffée with bacon, roasted red peppers, red onions, garlic, and butter over smoked gouda stone-ground grits.", price: "$18.99", lowPrice: "18.99", tags: ["GFO", "House Specialty"] },
      { name: "Carnitas Breakfast Burrito", desc: "Tender pork carnitas, scrambled eggs, pico de gallo, and Sriracha aioli in a plain or spinach tortilla. Served with a side.", price: "$13.99", lowPrice: "13.99" },
      { name: "Breakfast Chimichanga", desc: "Chorizo, carnitas, or blackened chicken with scrambled eggs, home fries, cheddar, and pico in a deep-fried flour tortilla, topped with scallions, cotija, and chimichurri aioli.", price: "$15.99", lowPrice: "15.99", tags: ["Spicy GF"] },
      { name: "Fried Green Tomatoes", desc: "Five flash-fried green tomatoes over arugula with house-made gator remoulade, crumbled goat cheese, and sun-dried tomato.", price: "$16.99", lowPrice: "16.99" },
      { name: "Avocado Toast", desc: "Toasted multigrain seeded organic bread with avocado mash, lemon, cucumbers, tomatoes, chia seeds, and goat cheese. Served with dressed greens and a hard-boiled egg.", price: "$15.99", lowPrice: "15.99", tags: ["GFO"] },
      { name: "Yogurt Parfait", desc: "Vanilla Greek yogurt with house-made granola, chia seeds, strawberries, bananas, and blueberries. Contains nuts.", price: "$11.99", lowPrice: "11.99" },
    ],
  },
  {
    id: "opening-acts",
    name: "Opening Acts",
    items: [
      { name: "Hash Rolls", desc: "Crispy hand-rolled egg rolls filled with house-made corned beef hash. Served with Sriracha Thai chili sauce, wasabi orange marmalade, and sesame-ginger dressed greens.", price: "$9.99", lowPrice: "9.99", tags: ["House Specialty"] },
    ],
  },
  {
    id: "bowls",
    name: "Bowls",
    blurb:
      "Served with two eggs any style over hash browns or house-made home fries (roasted red potatoes, roasted red peppers, onions, rosemary, and garlic).",
    items: [
      { name: "Dig In", desc: "Green peppers, red onions, tomatoes, and cheddar piled high on home fries with your choice of bacon or sausage.", price: "$15.99", lowPrice: "15.99" },
      { name: "Steak Bowl", desc: "Tender sliced sirloin grilled to your liking with cheddar, sautéed mushrooms, and house-made chimichurri aioli.", price: "$23.99", lowPrice: "23.99" },
      { name: "Carnitas Bowl", desc: "Pork carnitas, pico de gallo, Sriracha aioli, and fresh cilantro. Jalapeños available on request.", price: "$14.99", lowPrice: "14.99" },
      { name: "Beyond Bowl", desc: "Plant-based Beyond sausage grilled with peppers, mushrooms, pico, and black beans, topped with salsa, avocado, and creamy roasted jalapeño sauce.", price: "$17.99", lowPrice: "17.99", tags: ["Vegan"] },
      { name: "Chorizo Bowl", desc: "Grilled spicy chorizo with pico de gallo, cotija, scallions, cilantro, and chimichurri aioli.", price: "$13.99", lowPrice: "13.99" },
    ],
  },
  {
    id: "sweet-up-and-down",
    name: "Sweet Up & Down",
    blurb: "Add fresh blueberries, strawberries, pineapple, bananas, pecans, chocolate chips, or Oreo pieces for $1.49 each.",
    items: [
      { name: "Pancakes", desc: "Two large buttermilk pancakes with whipped butter, two eggs any style, your choice of meat, and a side.", price: "$13.99", lowPrice: "13.99" },
      { name: "Infused Pancakes", desc: "Two buttermilk pancakes infused with blueberries, strawberries, pineapple, bananas, pecans, chocolate chips, or Oreo. With two eggs, meat, and a side.", price: "$15.99", lowPrice: "15.99" },
      { name: "2up 2down", desc: "Locally baked cinnamon swirl French toast stacked with hand-battered chicken tossed in house savory hot sauce, powdered sugar, and rosemary.", price: "$15.99", lowPrice: "15.99", tags: ["House Specialty"] },
      { name: "Banana Nut Bread French Toast", desc: "House-made banana nut bread dipped in our signature batter, topped with bananas, pecans, and caramel bourbon sauce. With two eggs, meat, and a side. Contains nuts.", price: "$16.99", lowPrice: "16.99", tags: ["House Specialty"] },
      { name: "Belgian Waffle", desc: "Belgian waffle with whipped butter, two eggs any style, your choice of meat, and a side.", price: "$14.99", lowPrice: "14.99" },
      { name: "Citrus Cream Crullers", desc: "Grilled battered crullers stuffed with citrus cream cheese, topped with seasonal fruit and a honey drizzle. With two eggs, meat, and a side.", price: "$16.99", lowPrice: "16.99" },
      { name: "Chicken & Waffles", desc: "Belgian waffle with a hand-breaded fried chicken breast, caramel bourbon sauce, and your choice of hash browns or grits.", price: "$15.99", lowPrice: "15.99" },
      { name: "Cinnamon Swirl French Toast", desc: "Two extra-thick slices of local cinnamon swirl bread in our signature batter with powdered sugar and whipped butter. With two eggs, meat, and a side.", price: "$14.99", lowPrice: "14.99", tags: ["House Specialty"] },
    ],
  },
  {
    id: "omelets",
    name: "Omelets",
    blurb: "Served with a fresh baked biscuit. Gluten-friendly options available; egg whites available.",
    items: [
      { name: "Create Your Own Omelet", desc: "Choice of one meat, two veggies, and one cheese, served with a fresh baked biscuit. Add-ons available.", price: "$14.99", lowPrice: "14.99", tags: ["GFO"] },
      { name: "Firecracker", desc: "Grilled chicken, smoked local sausage, pico, roasted red peppers, and jalapeños with pepper jack. Great with Speedy's hot sauce.", price: "$15.99", lowPrice: "15.99", tags: ["Spicy"] },
      { name: "Veggie Lovers", desc: "Tomatoes, mushrooms, red onions, spinach, and provolone, topped with avocado.", price: "$13.99", lowPrice: "13.99" },
      { name: "Meat Lovers", desc: "Applewood bacon, turkey links, Edwards sausage links, sausage patties, and cheddar.", price: "$14.99", lowPrice: "14.99" },
      { name: "Mediterranean", desc: "Spinach, fresh basil, tomatoes, and garlic with feta and provolone.", price: "$12.99", lowPrice: "12.99" },
      { name: "Philly Philly", desc: "Shaved Philly-style beef or chicken, mushrooms, red onions, green peppers, and provolone.", price: "$14.99", lowPrice: "14.99" },
      { name: "Southwestern", desc: "Grilled chicken, avocado, pico, and cheddar, topped with salsa.", price: "$15.99", lowPrice: "15.99" },
      { name: "Sandbridge", desc: "Jumbo shrimp, applewood bacon, spinach, tomatoes, garlic, and mozzarella, topped with hollandaise.", price: "$14.99", lowPrice: "14.99" },
    ],
  },
  {
    id: "benedicts",
    name: "Friends with Benedict's",
    blurb: "Served with hash browns or stone-ground grits. Substitute home fries for $0.99.",
    items: [
      { name: "Avocado Smash", desc: "English muffin topped with smashed avocado, seasoned tomatoes, poached eggs, hollandaise, and everything seasoning.", price: "$14.99", lowPrice: "14.99" },
      { name: "Traditional", desc: "Canadian or applewood bacon, two poached eggs, and hollandaise on an English muffin.", price: "$12.99", lowPrice: "12.99" },
      { name: "Corsica", desc: "Spinach, garlic, tomatoes, basil, feta, two poached eggs, and hollandaise on toasted French baguette.", price: "$13.99", lowPrice: "13.99" },
      { name: "Bennie & the Grits", desc: "Fried grit cakes with three cheeses and ground sausage, topped with Cajun grilled shrimp, smoked sausage, red onions, roasted red peppers, poached eggs, and hollandaise.", price: "$18.99", lowPrice: "18.99", tags: ["House Specialty"] },
    ],
  },
  {
    id: "salads-chili",
    name: "Salads & Chili",
    items: [
      { name: "Garden Salad", desc: "Arugula and iceberg with tomatoes, cucumbers, green peppers, red onions, and house-made croutons.", price: "$5.99 / $10.99", lowPrice: "5.99", highPrice: "10.99" },
      { name: "Cobb", desc: "Iceberg and spinach with avocado, tomatoes, cheddar, hard-boiled egg, peppered bacon, and grilled or fried chicken (plain or Buffalo).", price: "$15.99", lowPrice: "15.99", tags: ["GFO"] },
      { name: "5th Ave", desc: "Iceberg and arugula with tomatoes, peppers, onions, croutons, and pinwheels of smoked ham, pepperoni, salami, and provolone. House Italian vinaigrette.", price: "$13.99", lowPrice: "13.99" },
      { name: "House Chili", desc: "Whitey's premium beef and bean chili with a toasted baguette.", price: "$6.99 / $10.99", lowPrice: "6.99", highPrice: "10.99" },
    ],
  },
  {
    id: "handhelds",
    name: "Handhelds",
    blurb: "Served with a pickle half and your choice of fries or potato salad. Burgers are 8 oz. fresh Angus beef.",
    items: [
      { name: "The Egg Bistro Burger", desc: "An 8 oz. Angus patty with American cheese, applewood bacon, and a farm-fresh fried egg on a toasted bun.", price: "$16.49", lowPrice: "16.49", tags: ["House Specialty"] },
      { name: "We Be Jammin Burger", desc: "8 oz. Angus with cheddar and pepper jack, bacon jam caramelized onions, applewood bacon, onion frazzles, and roasted red pepper mayo.", price: "$18.99", lowPrice: "18.99" },
      { name: "Western Burger", desc: "8 oz. Angus with Cattlemen's BBQ sauce, cheddar, applewood bacon, and two fried onion rings.", price: "$16.99", lowPrice: "16.99" },
      { name: "The Basic Burger", desc: "8 oz. fresh ground Angus cooked to order on a toasted bun.", price: "$14.49", lowPrice: "14.49" },
      { name: "Big Chick", desc: "Fried chicken breast with pepper jack, roasted red pepper mayo, mashed avocado, bacon, and onion frazzles on a toasted bun.", price: "$18.99", lowPrice: "18.99" },
      { name: "Southern Chicken Salad Croissant", desc: "House-made chicken salad with fried green tomatoes, peppered bacon, arugula, and roasted red pepper mayo, drizzled with hot honey on a buttery croissant.", price: "$17.49", lowPrice: "17.49", tags: ["House Specialty"] },
      { name: "New York Reuben", desc: "Corned beef or turkey with sauerkraut, Swiss, and house Thousand Island on grilled marble rye.", price: "$17.99", lowPrice: "17.99", tags: ["GFO"] },
      { name: "Reubens Brother", desc: "Crispy breaded chicken breast with house corned beef brisket, Swiss, sauerkraut, and Thousand Island on a toasted bun.", price: "$17.99", lowPrice: "17.99" },
      { name: "Virginia Beach Cheesesteak", desc: "Grilled steak or chicken with mushrooms, red onions, green peppers, and provolone on a hoagie roll.", price: "$17.99", lowPrice: "17.99" },
      { name: "The Stallone", desc: "Smoked ham, Genoa salami, and pepperoni with provolone, red onion, sun-dried tomatoes, and arugula on rosemary herb bread with basil pesto mayo.", price: "$15.99", lowPrice: "15.99" },
      { name: "Fan Club", desc: "Deli-thin smoked ham and roasted turkey with lettuce, tomatoes, bacon, and mayo on wheat berry bread.", price: "$15.49", lowPrice: "15.49", tags: ["GFO"] },
      { name: "Alpine Croissant", desc: "Hardwood smoked ham and smoked gouda on a buttery croissant with bacon jam and caramelized onions.", price: "$14.99", lowPrice: "14.99", tags: ["GFO"] },
      { name: "Health Nut", desc: "Grilled chicken, egg whites, tomatoes, and avocado on toasted wheat berry bread with fresh fruit, oatmeal, or dressed greens.", price: "$14.99", lowPrice: "14.99" },
      { name: "Gaucho", desc: "Sliced turkey breast, cheddar, bacon, tomatoes, and Sriracha aioli grilled on sourdough.", price: "$12.99", lowPrice: "12.99", tags: ["GFO"] },
      { name: "Buffalo Soldier", desc: "Hand-breaded fried chicken breast tossed in mild, hot, or suicide Buffalo sauce on a toasted bun.", price: "$12.99", lowPrice: "12.99", tags: ["Spicy"] },
      { name: "Gourmet Grilled Cheese", desc: "Cheddar, Swiss, provolone, American, and applewood bacon on your choice of grilled bread.", price: "$9.99", lowPrice: "9.99", tags: ["GFO"] },
      { name: "Turkey Bacon Ranch Wrap", desc: "Sliced turkey, provolone, house ranch, applewood bacon, lettuce, and tomato in a plain or spinach wrap.", price: "$14.99", lowPrice: "14.99" },
      { name: "Dixie Chicken Wrap", desc: "Hand-breaded chicken tenders tossed in BBQ, mild, or hot sauce with cheddar, lettuce, tomato, and ranch in a wrap.", price: "$13.99", lowPrice: "13.99" },
      { name: "Chicken Salad Wrap", desc: "Original recipe house-made chicken salad with lettuce and tomato in a plain or spinach wrap.", price: "$12.99", lowPrice: "12.99" },
    ],
  },
  {
    id: "a-la-carte",
    name: "Lunch à la Carte & Snacks",
    items: [
      { name: "Fresh Garlic & Shaved Parmesan Fries", desc: "House-cut fries with fresh garlic and shaved parmesan.", price: "$5.99", lowPrice: "5.99" },
      { name: "Onion Rings", price: "$5.99", lowPrice: "5.99" },
      { name: "Fried Buffalo Cauliflower", price: "$5.99", lowPrice: "5.99", tags: ["Spicy"] },
      { name: "Mac & Cheese", price: "$4.99", lowPrice: "4.99" },
      { name: "Fries", price: "$4.99", lowPrice: "4.99" },
      { name: "Housemade Chicken Salad", price: "$4.99", lowPrice: "4.99" },
      { name: "Red Potato Salad", price: "$3.99", lowPrice: "3.99" },
      { name: "Sautéed Spinach", price: "$4.99", lowPrice: "4.99" },
      { name: "8 oz Sirloin", price: "$14.99", lowPrice: "14.99" },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    blurb: "$7.99 — 10 and under. Choose one entrée and one side, includes a drink. Free refills on tea & soda.",
    items: [
      { name: "Kids Entrées", desc: "Smiley Face Pancake, Waffle, Cinnamon Swirl French Toast, Cheese Omelet, Biscuits & Gravy, Sausage Egg & Cheese Biscuit, Yogurt Parfait, Grilled Cheese, PB&J, Mini Cheeseburger, Cheese Quesadilla, Grilled Chicken Sandwich, Mac & Cheese, Chicken Tenders, or plant-based options.", price: "$7.99", lowPrice: "7.99" },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Cappuccino & Lattes", desc: "White chocolate mocha, caramel macchiato, vanilla, or hazelnut.", price: "$4.95", lowPrice: "4.95" },
      { name: "Bistro Cold Brew", price: "$3.95", lowPrice: "3.95" },
      { name: "Bistro Blend Coffee", desc: "Columbian or decaf, free refills.", price: "$3.25", lowPrice: "3.25" },
      { name: "Espresso", price: "$3.00", lowPrice: "3.00" },
      { name: "Fountain Drinks", desc: "Pepsi products or fresh brewed tea, free refills.", price: "$3.50", lowPrice: "3.50" },
      { name: "Juice", desc: "Orange, grapefruit, cranberry, apple, or tomato V8.", price: "$3.25 / $3.75", lowPrice: "3.25", highPrice: "3.75" },
      { name: "Lemonade or Arnold Palmer", price: "$3.75", lowPrice: "3.75" },
      { name: "Milk", desc: "Regular, chocolate, strawberry, or almond.", price: "$3.25 / $3.75", lowPrice: "3.25", highPrice: "3.75" },
      { name: "Red Bull", desc: "Regular, seasonal, sugar free, or blueberry.", price: "$3.50", lowPrice: "3.50" },
      { name: "Hot Tea", price: "$2.75", lowPrice: "2.75" },
      { name: "Hot Chocolate", price: "$2.50", lowPrice: "2.50" },
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Where is The Egg Bistro located?",
    a: 'The Egg Bistro has three locations across Hampton Roads: <a href="/visit#greenbrier">Greenbrier</a> at 501 Kempsville Road, Chesapeake; <a href="/visit#strawbridge">Strawbridge</a> at 2129 General Booth Blvd, Virginia Beach; and <a href="/visit#haygood">Haygood</a> at 1033 Independence Blvd, Virginia Beach.',
  },
  {
    q: "What are your hours?",
    a: "We are open Monday through Friday from 7:00 AM to 2:00 PM, and Saturday and Sunday from 7:00 AM to 3:00 PM. We serve breakfast and lunch all day.",
  },
  {
    q: "Do you take reservations?",
    a: 'We take reservations for brunch and private events. Visit our <a href="/private-events">private events</a> page or call your nearest location to arrange a reservation or party.',
  },
  {
    q: "Can I order online for pickup?",
    a: 'Yes. You can <a href="/order">order online</a> for pickup from any location. Please confirm you are ordering from the correct location, and bring a valid photo ID and the card used to order at pickup.',
  },
  {
    q: "Do you have gluten-free, vegetarian, and vegan options?",
    a: "Yes. Many dishes are gluten-friendly optional (GFO) and we carry gluten-free multigrain bread, plus vegetarian and vegan-friendly plates like the Beyond Bowl and plant-based proteins. Note that we are not a gluten-free, nut-free, or dairy-free kitchen, so we cannot guarantee against cross contamination.",
  },
  {
    q: "Do you cater and host private events?",
    a: 'Absolutely. We offer off-site catering and private events seven nights a week for office parties, rehearsal dinners, and celebrations with space for up to 150 guests. See our <a href="/catering">catering</a> and <a href="/private-events">private events</a> pages.',
  },
  {
    q: "Do you have a rewards program?",
    a: "Yes. Join our Rewards Club to earn 1 point for every $1 spent and unlock a $10 reward at 200 points. VIPs also get $5 off during their birthday month. Just provide your mobile number at checkout.",
  },
  {
    q: "Are you known for your Bloody Marys?",
    a: "We are. The Egg Bistro has been celebrated for its Bloody Marys in Hampton Roads, and we pour six rotating craft beers on tap alongside our full brunch bar of mimosas and more.",
  },
  {
    q: "Is The Egg Bistro family-friendly?",
    a: "Yes. We are a hip, family-friendly bistro with a dedicated kids menu for ages 10 and under, and a welcoming atmosphere for all ages.",
  },
];
