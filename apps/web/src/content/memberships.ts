export type Tier = {
  slug: "silver" | "gold" | "platinum";
  name: string;
  price: string;
  period: string;
  tagline: string;
  highlight?: boolean;
  perks: string[];
};

export const tiers: Tier[] = [
  {
    slug: "silver",
    name: "Silver",
    price: "₹899",
    period: "/ month",
    tagline: "Dip your toes in. Great for occasional visits.",
    perks: [
      "30% off play area & gaming",
      "20% off summer camp",
      "Discounts on refreshments",
      "Member-only events",
    ],
  },
  {
    slug: "gold",
    name: "Gold",
    price: "₹1,499",
    period: "/ quarter",
    tagline: "For regulars who want more play and priority.",
    highlight: true,
    perks: [
      "1 FREE play visit every month",
      "40% off play area & gaming",
      "Priority booking access",
      "Free birthday decor voucher",
      "Member-only events",
    ],
  },
  {
    slug: "platinum",
    name: "Platinum",
    price: "₹4,999",
    period: "/ year",
    tagline: "The royal pass. Best value for families.",
    perks: [
      "2 FREE play visits every month",
      "50% off play area & gaming",
      "1 FREE quarterly theatre booking",
      "Exclusive early-bird offers",
      "Free annual photoshoot",
      "Priority booking access",
    ],
  },
];

export const sessionPricing = [
  { label: "Single Pass", price: "₹499", note: "1 person" },
  { label: "Couple Pass", price: "₹799", note: "2 people" },
  { label: "Family Pass", price: "₹1,199", note: "Up to 4 people" },
];
