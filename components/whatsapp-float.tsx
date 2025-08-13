"use client"

import Link from "next/link"

export default function WhatsAppFloat({
  phone = "972500000000",
  message = "שלום, אשמח לפרטים על חבילה",
}: {
  phone?: string
  message?: string
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <Link
      href={href}
      target="_blank"
      aria-label="פתיחת שיחת וואטסאפ"
      className="fixed bottom-4 left-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full shadow-lg ring-1 ring-black/10 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      style={{ backgroundColor: "#25D366" }}
    >
      <i className="fa-brands fa-whatsapp text-white text-[22px] md:text-[24px]" aria-hidden />
      <span className="sr-only">WhatsApp</span>
    </Link>
  )
}
