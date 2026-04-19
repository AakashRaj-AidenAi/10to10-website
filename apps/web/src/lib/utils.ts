import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "10to10 Adventures",
  tagline: "Non-stop play. Endless fun. For everyone.",
  description:
    "An integrated family playground in Khammam — soft play, play school, gaming, theatre, parties and more. Where joy, connection, and memories flourish.",
  url: "https://10to10adventures.com",
  phone: "+91 92567 87788",
  phoneHref: "tel:+919256787788",
  whatsapp: "https://wa.me/919256787788",
  email: "contactus@10to10adventures.com",
  address: "Mamatha College Road, Above Just Bake, Khammam, Telangana",
  instagram: "https://instagram.com/10to10play",
};
