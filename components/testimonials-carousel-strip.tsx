"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"

type Item = {
  src: string
  name: string
  quote: string
}

const ITEMS: Item[] = [
  {
    src: "/images/testimonials/GPT_Image_1________60_1.png",
    name: "רות מ.",
    quote: "שירות לבבי ונעים, כל פרט נלקח בחשבון.",
  },
  {
    src: "/images/testimonials/GPT_Image_1________45_0.png",
    name: "שירי ל.",
    quote: "כשרות מהודרת וחוויה של חמישה כוכבים.",
  },
  {
    src: "/images/testimonials/GPT_Image_1________45_0_2.png",
    name: "יעל ק.",
    quote: "הרגשנו שמטפלים בנו אישית מתחילת התהליך ועד הסוף.",
  },
  { src: "/images/testimonials/GPT_Image_1_1_1.png", name: "תמר ש.", quote: "סידורי שבת מושלמים וראש שקט לחלוטין." },
  {
    src: "/images/testimonials/GPT_Image_1________50_0.png",
    name: "חני ד.",
    quote: "מחירים הוגנים ושקיפות מלאה לאורך כל הדרך.",
  },
  { src: "/images/testimonials/GPT_Image_1_1.png", name: "דבורה י.", quote: "חופשה חלומית—מומלץ בחום!" },
  {
    src: "/images/testimonials/GPT_Image_1________45_1_1.png",
    name: "אביגיל ר.",
    quote: "מלונות מצוינים והעברות נוחות למשפחה.",
  },
  {
    src: "/images/testimonials/GPT_Image_1________50_1.png",
    name: "נעמה ס.",
    quote: "ארוחות שף איכותיות, בכשרות גבוהה.",
  },
  {
    src: "/images/testimonials/GPT_Image_1_________45_0.png",
    name: "אסתי ח.",
    quote: "מעל ומעבר לציפיות—שירות שאין כמותו.",
  },
  {
    src: "/images/testimonials/GPT_Image_1_________45_1.png",
    name: "יהודית פ.",
    quote: "חוויה מרגיעה עם יחס אישי לכל בקשה.",
  },
]

// Utility: create a track that shows 3 cards at a time and slides by 1 every tick.
export default function TestimonialsCarouselStrip() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  // respect reduced motion
  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    [],
  )

  useEffect(() => {
    if (prefersReduced) return
    // auto-advance every 3s
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length)
    }, 3000)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced])

  // Duplicate first few slides to fake infinite scroll without jump when near the end
  const trackItems = useMemo(() => {
    const clones = ITEMS.slice(0, 3)
    return [...ITEMS, ...clones]
  }, [])

  // Width calc: each card is 33.333% of the container
  const translatePct = (index % ITEMS.length) * (100 / 3)

  return (
    <section aria-label="סיפורי לקוחות מרוצים" className="relative w-full" style={{ backgroundColor: "#0b3a4a" }}>
      <div className="container mx-auto px-4">
        <div className="relative h-[400px] overflow-hidden">
          {/* Track */}
          <div
            className="absolute inset-0 flex"
            style={{
              width: `${(trackItems.length / 3) * 100}%`,
              transform: `translateX(-${translatePct}%)`,
              transition: prefersReduced ? "none" : "transform 800ms cubic-bezier(.2,.8,.2,1)",
            }}
            aria-live="polite"
          >
            {trackItems.map((it, i) => (
              <figure key={`${it.src}-${i}`} className="flex w-1/3 shrink-0 items-center justify-center p-4">
                <div className="group relative grid h-full w-full grid-rows-[1fr_auto] overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="relative">
                    <div className="relative mx-auto h-48 w-full overflow-hidden sm:h-56">
                      <Image
                        src={it.src || "/placeholder.svg"}
                        alt={`תמונה של ${it.name}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        priority={i < 3}
                      />
                    </div>
                    {/* subtle top shine */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                      style={{
                        background:
                          "radial-gradient(900px 220px at 50% 0%, rgba(255,255,255,0.35) 0%, transparent 60%)",
                      }}
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1 p-4 text-white">
                    <div className="text-sm font-bold tracking-tight">{it.name}</div>
                    <div className="text-xs text-white/85">{it.quote}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
