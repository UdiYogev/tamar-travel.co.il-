import type React from "react"
import { PartyPopper, Utensils, BaggageClaim, UserRoundCheck } from "lucide-react"

type Feature = {
  title: string
  desc: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  bg: string
  halo: string
}

const FEATURES: Feature[] = [
  {
    title: "פעילויות ואטרקציות",
    desc: "הופעות, טיולים ואטרקציות מותאמות עם מדריכים מקצועיים",
    Icon: PartyPopper,
    bg: "linear-gradient(135deg,#0b1020 0%,#2563eb 70%,#0b1020 100%)",
    halo: "rgba(37,99,235,0.25)",
  },
  {
    title: "אוכל גורמה בשפע",
    desc: "ארוחות שף בינלאומיות בכשרות מהודרת",
    Icon: Utensils,
    bg: "linear-gradient(135deg,#0b1020 0%,#3a0ca3 70%,#0b1020 100%)",
    halo: "rgba(58,12,163,0.25)",
  },
  {
    title: "חבילות אטרקטיביות",
    desc: "התאמת מחירים מיטבית בשקיפות מלאה",
    Icon: BaggageClaim,
    bg: "linear-gradient(135deg,#0ea5ff 0%,#2563eb 70%,#0ea5ff 100%)",
    halo: "rgba(14,165,233,0.25)",
  },
  {
    title: "שירות אישי",
    desc: "ליווי מקצועי לאורך כל החופשה",
    Icon: UserRoundCheck,
    bg: "linear-gradient(135deg,#0a0d14 0%,#0b1020 70%,#0a0d14 100%)",
    halo: "rgba(11,16,32,0.28)",
  },
]

export default function FeaturesStrip() {
  return (
    <section aria-label="יתרונות תמר נופשים" className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ title, desc, Icon, bg, halo }) => (
          <div
            key={title}
            className="group relative flex h-full flex-col items-center rounded-2xl p-6 text-center text-white shadow-md ring-1 ring-white/15 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl shine-on-hover"
            style={{ background: bg, boxShadow: `0 10px 32px -12px ${halo}` }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 0 28px rgba(255,255,255,0.10)" }}
            />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
              <Icon className="h-9 w-9 text-white" aria-hidden />
            </div>
            <h3 className="relative z-10 mt-4 text-lg font-extrabold tracking-tight">{title}</h3>
            <p className="relative z-10 mt-2 text-sm text-white/90">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
