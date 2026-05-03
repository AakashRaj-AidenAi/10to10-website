"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";

type Ctx = { open: (preset?: string) => void; close: () => void };
const BookingCtx = createContext<Ctx | null>(null);

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

type ZonePick = "Play Session" | "Play School" | "Gaming" | "Private Theatre" | "Birthday Party" | "Summer Camp";
const zoneOptions: ZonePick[] = [
  "Play Session",
  "Birthday Party",
  "Private Theatre",
  "Gaming",
  "Play School",
  "Summer Camp",
];

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [preset, setPreset] = useState<string | undefined>();
  const [step, setStep] = useState<"form" | "sent">("form");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    zone: "Play Session" as ZonePick,
    guests: "2",
    date: "",
    notes: "",
  });

  const open = (p?: string) => {
    setPreset(p);
    if (p && zoneOptions.includes(p as ZonePick)) {
      setForm((f) => ({ ...f, zone: p as ZonePick }));
    }
    setStep("form");
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
    // Reset to fresh form on next open (after exit animation)
    setTimeout(() => {
      setStep("form");
      setPreset(undefined);
    }, 300);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { submitLead } = await import("@/lib/lead");
    await submitLead("Booking Modal", {
      name: form.name,
      phone: form.phone,
      zone: form.zone,
      guests: form.guests,
      preferred_date: form.date || "Flexible",
      notes: form.notes,
    });
    setStep("sent");
  };

  return (
    <BookingCtx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* sheet */}
            <motion.div
              className="relative w-full sm:max-w-lg bg-white rounded-t-[2rem] sm:rounded-[2rem] shadow-lifted max-h-[95vh] overflow-y-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              {/* grab handle (mobile) */}
              <div className="sm:hidden flex justify-center pt-3 pb-1">
                <div className="h-1.5 w-12 rounded-full bg-brand-ink/15" />
              </div>

              <button
                onClick={close}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-ink/5 hover:bg-brand-ink/10 flex items-center justify-center z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {step === "form" ? (
                <form onSubmit={submit} className="p-6 sm:p-8">
                  <div className="text-4xl mb-3">🎉</div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold">
                    Book your <span className="gradient-text">adventure</span>
                  </h2>
                  <p className="text-sm text-brand-ink/65 mt-1">
                    Fill this out and we'll confirm on WhatsApp within minutes.
                  </p>

                  <div className="mt-6 space-y-4">
                    <Field label="Your name">
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Priya Kumar"
                        className="input"
                      />
                    </Field>
                    <Field label="Phone (WhatsApp)">
                      <input
                        required
                        type="tel"
                        inputMode="tel"
                        pattern="[0-9+\s\-]{10,15}"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="input"
                      />
                    </Field>
                    <Field label="What would you like to book?">
                      <div className="flex flex-wrap gap-2">
                        {zoneOptions.map((z) => (
                          <button
                            key={z}
                            type="button"
                            onClick={() => setForm({ ...form, zone: z })}
                            className={`chip border-2 transition ${
                              form.zone === z
                                ? "bg-brand-primary text-white border-brand-primary"
                                : "bg-white text-brand-ink/75 border-brand-ink/10 hover:border-brand-primary/40"
                            }`}
                          >
                            {z}
                          </button>
                        ))}
                      </div>
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Guests">
                        <input
                          type="number"
                          min={1}
                          max={50}
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className="input"
                        />
                      </Field>
                      <Field label="Preferred date">
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="input"
                        />
                      </Field>
                    </div>
                    <Field label="Anything we should know? (optional)">
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        rows={2}
                        placeholder="Birthday theme, allergies, special requests..."
                        className="input resize-none"
                      />
                    </Field>
                  </div>

                  <button type="submit" className="btn-primary w-full mt-6 text-base">
                    <MessageCircle className="h-5 w-5" />
                    Send via WhatsApp
                  </button>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-brand-ink/10" />
                    <span className="text-xs text-brand-ink/50 font-semibold">OR</span>
                    <div className="h-px flex-1 bg-brand-ink/10" />
                  </div>
                  <a
                    href={siteConfig.phoneHref}
                    className="btn-ghost w-full mt-3 text-base"
                  >
                    <Phone className="h-4 w-4" />
                    Call {siteConfig.phone}
                  </a>
                </form>
              ) : (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="mx-auto w-20 h-20 rounded-full bg-brand-mint/30 flex items-center justify-center mb-4"
                  >
                    <Check className="h-10 w-10 text-brand-turquoise" strokeWidth={3} />
                  </motion.div>
                  <h2 className="font-display text-2xl font-bold">You&apos;re all set! 🎊</h2>
                  <p className="text-brand-ink/65 mt-2">
                    WhatsApp should have opened with your request. Hit send and we&apos;ll
                    confirm shortly!
                  </p>
                  <button onClick={close} className="btn-primary mt-6 w-full">
                    Got it
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingCtx.Provider>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-ink/55">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
