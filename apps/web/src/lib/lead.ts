import { siteConfig } from "./utils";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "YOUR_WEB3FORMS_KEY_HERE"; // owner replaces post-deploy

export type LeadSource =
  | "Home"
  | "Booking Modal"
  | "Contact Page"
  | "Play School Admission"
  | "Play School Visit"
  | "Party Planner"
  | "Summer Camp"
  | "Membership"
  | "Franchise";

export type LeadFields = Record<string, string | number | undefined>;

export type SubmitLeadResult = {
  ok: boolean;
  whatsapp: boolean;
  email: boolean;
  error?: string;
};

/**
 * Submit a lead to BOTH Web3Forms (email + Sheets backend) AND WhatsApp.
 *
 * Web3Forms is non-blocking — even if the network fails, WhatsApp still
 * opens so the parent has a fallback path. The form's email backup ensures
 * the owner sees every inquiry even if WhatsApp isn't sent.
 */
export async function submitLead(
  source: LeadSource,
  fields: LeadFields,
  options: { whatsappBody?: string; openWhatsapp?: boolean } = {}
): Promise<SubmitLeadResult> {
  const { whatsappBody, openWhatsapp = true } = options;

  // Compose the Web3Forms payload
  const payload: Record<string, string | number> = {
    access_key: WEB3FORMS_KEY,
    subject: `[10to10] ${source} inquiry — ${fields.name ?? "anonymous"}`,
    from_name: "10to10 Adventures Website",
    source,
    submitted_at: new Date().toISOString(),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    ...Object.fromEntries(
      Object.entries(fields).filter(([, v]) => v !== undefined && v !== "")
    ),
  };

  let emailOk = false;
  if (WEB3FORMS_KEY && WEB3FORMS_KEY !== "YOUR_WEB3FORMS_KEY_HERE") {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      emailOk = res.ok;
    } catch {
      emailOk = false;
    }
  }

  let whatsappOk = false;
  if (openWhatsapp && typeof window !== "undefined") {
    const text =
      whatsappBody ??
      `Hi 10to10! I'd like to inquire about: ${source}\n\n` +
        Object.entries(fields)
          .filter(([, v]) => v !== undefined && v !== "")
          .map(([k, v]) => `• ${humanize(k)}: ${v}`)
          .join("\n");
    const url = `${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    whatsappOk = true;
  }

  return {
    ok: emailOk || whatsappOk,
    email: emailOk,
    whatsapp: whatsappOk,
  };
}

function humanize(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
