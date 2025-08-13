"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MapPin, Globe2, Users, Award } from "lucide-react"

type Stat = {
  label: string
  value: number
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  bg: string
  halo: string
}

const STATS: Stat[] = [
  {
    label: "חופשות בארץ עד כה",
    value: 1280,
    Icon: MapPin,
    bg: "linear-gradient(135deg,#0b1020 0%,#2563eb 60%,#0b1020 100%)",
    halo: "rgba(37,99,235,0.28)",
  },
  {
    label: "חופשות בחו״ל עד כה",
    value: 870,
    Icon: Globe2,
    bg: "linear-gradient(135deg,#0ea5ff 0%,#2563eb 60%,#0ea5ff 100%)",
    halo: "rgba(14,165,233,0.25)",
  },
  {
    label: "לקוחות מרוצים",
    value: 3400,
    Icon: Users,
    bg: "linear-gradient(135deg,#3a0ca3 0%,#2563eb 60%,#3a0ca3 100%)",
    halo: "rgba(58,12,163,0.24)",
  },
  {
    label: "שנות ניסיון",
    value: 32,
    Icon: Award,
    bg: "linear-gradient(135deg,#0a0d14 0%,#0b1020 60%,#0a0d14 100%)",
    halo: "rgba(10,13,20,0.28)",
  },
]

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function AnimatedNumber({ target, active, duration = 1600 }: { target: number; active: boolean; duration?: number }) {
  const [val, setVal] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (prefersReduced) {
      setVal(target)
      return
    }
    let last = 0
    const startTime = performance.now()
    const loop = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration)
      const next = Math.floor(easeOutCubic(t) * target)
      if (next !== last) {
        setVal(next)
        last = next
      }
      if (t < 1) rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [active, target, duration])

  return <span>{val.toLocaleString("he-IL")}</span>
}

export default function StatsCounters() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} aria-label="סטטיסטיקות תמר נופשים" className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ label, value, Icon, bg, halo }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-2xl p-6 text-white shadow-md ring-1 ring-white/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl shine-on-hover"
            style={{
              background: bg,
              boxShadow: `0 12px 34px -16px ${halo}`,
              backgroundSize: "200% 200%",
              animation: "bg-pan-x 12s ease-in-out infinite",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.10), inset 0 0 28px rgba(255,255,255,0.08), 0 1px 0 0 rgba(255,255,255,0.08) inset",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-1/3 top-0 h-full w-1/3 rotate-6 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.0) 70%)",
                filter: "blur(6px)",
              }}
            />
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/25 backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-8 w-8 text-white" aria-hidden />
              </div>
              <div>
                <div className="text-3xl font-extrabold tabular-nums leading-tight">
                  <AnimatedNumber target={value} active={active} />
                </div>
                <div className="mt-1 text-sm text-white/90">{label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
