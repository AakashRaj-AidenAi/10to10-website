export type Accent = "primary" | "turquoise" | "yellow" | "grape" | "orange" | "mint" | "sky";

export type Zone = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  ages: string;
  highlights: string[];
  accent: Accent;
  icon: string;
};

export const zones: Zone[] = [
  {
    slug: "soft-play-area",
    name: "Soft Play Arena",
    tagline: "2,400 sq ft of pure joy",
    description:
      "A vibrant, padded wonderland built for crawlers, walkers, and runners. Slides, ball pits, climbing nets, and sensory corners — all sanitized hourly.",
    ages: "0 – 10 yrs",
    highlights: ["Sensory zones", "Climbing structures", "Ball pit", "Toddler-safe"],
    accent: "primary",
    icon: "🧸",
  },
  {
    slug: "play-school",
    name: "Play School",
    tagline: "Where learning meets adventure",
    description:
      "Montessori-inspired early-childhood program nurturing curiosity, independence, and joyful learning — with trained educators and an open-door policy.",
    ages: "18 mo – 5 yrs",
    highlights: ["Montessori method", "Trained educators", "Daily reports", "Free trial"],
    accent: "grape",
    icon: "✏️",
  },
  {
    slug: "gaming-area",
    name: "Gaming Arena",
    tagline: "PS5, VR, and couch co-op",
    description:
      "A next-gen gaming lounge for kids, teens, and families. PS5 titles, immersive VR experiences, racing rigs, and classic couch co-op on the big screen.",
    ages: "All ages",
    highlights: ["PS5 library", "VR headsets", "Racing rigs", "Tournaments"],
    accent: "turquoise",
    icon: "🎮",
  },
  {
    slug: "private-theatre-room",
    name: "Private Theatre",
    tagline: "Your own cinema, your rules",
    description:
      "A private screening room for movie nights, birthdays, proposal surprises, or just a chilled-out family afternoon. Bring your own watchlist.",
    ages: "All ages",
    highlights: ["Dolby audio", "Custom playlists", "Snack service", "Dim lighting"],
    accent: "grape",
    icon: "🎬",
  },
  {
    slug: "party-room",
    name: "Party Room",
    tagline: "Birthdays that become core memories",
    description:
      "A dedicated celebration space with theming, decor, cake, hosts, and a dozen ways to surprise the birthday star. We handle the chaos, you collect the hugs.",
    ages: "Up to 50 guests",
    highlights: ["Themed decor", "Party hosts", "Cake options", "Photo corner"],
    accent: "yellow",
    icon: "🎉",
  },
  {
    slug: "refreshment-zone",
    name: "Refreshment Zone",
    tagline: "Snack, sip, recharge",
    description:
      "A clean, kid-friendly pantry serving fresh snacks, fruit, beverages, and party platters — because nothing kills fun faster than a hungry toddler.",
    ages: "All ages",
    highlights: ["Fresh snacks", "Healthy options", "Party platters", "Coffee bar"],
    accent: "orange",
    icon: "🍿",
  },
  {
    slug: "stalls",
    name: "Curated Stalls",
    tagline: "Toys, books, and small wonders",
    description:
      "A rotating curation of local toys, books, and craft kits — perfect take-home souvenirs and thoughtful gifts for the little explorer in your life.",
    ages: "All ages",
    highlights: ["Local brands", "Books & toys", "Craft kits", "Gift wrap"],
    accent: "mint",
    icon: "🎁",
  },
];
