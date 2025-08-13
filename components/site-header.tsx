"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, InstagramIcon as Tiktok } from "lucide-react"

const NAV = [
  { href: "/", label: "בית" },
  { href: "/packages", label: "חבילות" },
  { href: "/about", label: "עלינו" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 text-white backdrop-blur-md">
      <div className="animated-gradient">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 md:hidden">
              <Image src="/images/logo-tamar-travel-1.jpg" alt="תמר נופשים" fill className="object-contain" />
            </div>
            <span className="sr-only">תמר נופשים</span>
          </Link>

          <nav className="hidden md:flex md:flex-1 items-center justify-end gap-6">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium opacity-90 hover:opacity-100">
                {item.label}
              </Link>
            ))}

            <span className="mx-1 h-5 w-px bg-white/20" aria-hidden />

            <div className="flex items-center gap-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="#"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tiktok className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <Link href="/packages">
              <Button className="text-white blue-cta-gradient">גלו חבילות</Button>
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden animated-gradient border-t border-white/10 text-white">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/packages" onClick={() => setOpen(false)}>
              <Button className="w-full text-white blue-cta-gradient">גלו חבילות</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
