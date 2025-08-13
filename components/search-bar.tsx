"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Home, Globe2, Search, CalendarDays } from "lucide-react"

export default function SearchBar() {
  const router = useRouter()
  const [scope, setScope] = useState<"domestic" | "abroad">("domestic")
  const [q, setQ] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    params.set("type", scope)
    if (q) params.set("q", q)
    if (start) params.set("start", start)
    if (end) params.set("end", end)
    router.push(`/packages?${params.toString()}`)
  }

  return (
    <section className="container mx-auto px-4">
      <form
        onSubmit={onSubmit}
        className="relative -mt-8 z-10 mx-auto w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5"
        aria-label="Vacation search"
      >
        {/* cyan top accent */}
        <div className="h-1.5 w-full" style={{ backgroundColor: "#0ea5ff" }} />

        <div className="grid items-end gap-3 p-4 md:grid-cols-12">
          {/* scope toggle */}
          <div className="md:col-span-3">
            <label className="mb-1 block text-xs font-medium text-gray-700">תחום</label>
            <div
              className="inline-flex w-full items-center gap-1 rounded-full bg-[#0b1020] p-1 text-white"
              role="tablist"
              aria-label="בחר תחום"
            >
              <button
                type="button"
                role="tab"
                aria-selected={scope === "domestic"}
                onClick={() => setScope("domestic")}
                className={`h-9 flex-1 rounded-full px-3 text-xs font-medium inline-flex items-center justify-center gap-1.5 ${
                  scope === "domestic" ? "bg-white text-[#0b1020]" : "bg-transparent text-white/90"
                }`}
              >
                <Home className="h-4 w-4" aria-hidden />
                בארץ
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={scope === "abroad"}
                onClick={() => setScope("abroad")}
                className={`h-9 flex-1 rounded-full px-3 text-xs font-medium inline-flex items-center justify-center gap-1.5 ${
                  scope === "abroad" ? "bg-white text-[#0b1020]" : "bg-transparent text-white/90"
                }`}
              >
                <Globe2 className="h-4 w-4" aria-hidden />
                בחו״ל
              </button>
            </div>
          </div>

          {/* destination */}
          <div className="md:col-span-4">
            <label className="mb-1 block text-xs font-medium text-gray-700">יעד / מלון</label>
            <div className="flex h-10 min-w-0 items-center gap-2 rounded-lg border px-3">
              <Globe2 className="h-4 w-4" style={{ color: "#0ea5ff" }} aria-hidden />
              <input
                className="w-full min-w-0 bg-transparent text-sm outline-none"
                placeholder="אילת, טבריה, אנטליה, כרתים..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Destination"
                dir="rtl"
              />
            </div>
          </div>

          {/* dates */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-gray-700">תאריך התחלה</label>
            <div className="flex h-10 items-center gap-2 rounded-lg border px-3">
              <CalendarDays className="h-4 w-4" style={{ color: "#0ea5ff" }} aria-hidden />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                aria-label="Start date"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-gray-700">תאריך סיום</label>
            <div className="flex h-10 items-center gap-2 rounded-lg border px-3">
              <CalendarDays className="h-4 w-4" style={{ color: "#0ea5ff" }} aria-hidden />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                aria-label="End date"
              />
            </div>
          </div>

          {/* submit */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-transparent">חיפוש</label>
            <button
              type="submit"
              className="shine-on-hover hover-float flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition blue-cta-gradient"
            >
              <Search className="h-4 w-4" aria-hidden />
              חיפוש
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
