"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Reveal from "./reveal"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  // Simple parallax on scroll
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const next = Math.max(-30, Math.min(30, y * 0.15))
        setOffset(next)
        raf = 0
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <section className="relative">
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${offset}px)`, willChange: "transform", transition: "transform 60ms linear" }}
        >
          <Image
            src="/images/header-1.jpg"
            alt="ריזורט יוקרתי עם בריכות ומזרקות ברקע מצוקי אבן"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto grid min-h-[68vh] items-center px-4 py-20 md:min-h-[76vh]">
        <Reveal className="max-w-2xl">
          <div
            className="inline-block rounded-full border px-3 py-1 text-xs"
            style={{ borderColor: "#0ea5ff", color: "#e6f6ff", background: "rgba(14,165,233,0.12)" }}
          >
            נופש 5★ מותאם לציבור הדתי והחרדי
          </div>
          <h1
            className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl headline-halo-navy"
            style={{ color: "#60a5fa" }}
          >
            חופשה חלומית, כשרות ללא פשרות
          </h1>
          <p className="mt-3 text-sm/6 md:text-base text-white-halo" style={{ color: "#cfe9ff" }}>
            חבילות יוקרה בארץ ובחו״ל: שבתות וחגים, משפחות, זוגות וקבוצות — עם דגש על כשרות, שבת, פרטיות
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/packages" className="shine-on-hover hover-float">
              <Button size="lg" className="text-white blue-cta-gradient">
                גלו חבילות זמינות
              </Button>
            </Link>
            <Link href="/contact" className="hover-float">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0b1020] bg-transparent"
              >
                דברו איתנו
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
