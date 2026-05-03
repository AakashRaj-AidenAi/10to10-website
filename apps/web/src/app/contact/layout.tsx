import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact 10to10 Adventures Khammam — Visit Us, Call, WhatsApp",
  description:
    "Get in touch with 10to10 Adventures, Khammam. Call, WhatsApp, email or visit us at Mamatha College Road, Above Just Bake. Open 7 days a week, 10 AM – 10 PM.",
  keywords: [
    "10to10 Adventures contact",
    "play area Khammam contact",
    "play school admission contact Khammam",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
