"use client";

import { useBooking } from "./booking-modal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BookButton({
  children,
  preset,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  preset?: string;
  className?: string;
  variant?: "primary" | "yellow" | "turq" | "ghost" | "white";
}) {
  const { open } = useBooking();
  const base =
    variant === "primary" ? "btn-primary" :
    variant === "yellow" ? "btn-yellow" :
    variant === "turq" ? "btn-turq" :
    variant === "white" ? "btn bg-white text-brand-primary hover:bg-brand-yellow hover:text-brand-ink shadow-lifted" :
    "btn-ghost";
  return (
    <button type="button" onClick={() => open(preset)} className={cn(base, className)}>
      {children}
    </button>
  );
}
