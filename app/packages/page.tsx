"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Filters, { type FiltersState } from "@/components/filters"
import PackageCard from "@/components/package-card"
import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { PACKAGES } from "@/lib/data"

export default function PackagesPage() {
  const params = useSearchParams()
  const [filters, setFilters] = useState<FiltersState | null>(null)

  // Build default state from URL
  const defaultState: Partial<FiltersState> = useMemo(() => {
    const q = params.get("q") || ""
    const start = params.get("start") || ""
    const end = params.get("end") || ""
    return {
      q,
      start,
      end,
    }
  }, [params])

  // initialize filters once from defaults so the grid shows results quickly
  useEffect(() => {
    setFilters({
      q: defaultState.q || "",
      destination: "",
      kashrut: "",
      priceMax: null,
      start: defaultState.start || "",
      end: defaultState.end || "",
      amenities: {
        shabbatElevator: false,
        synagogueNearby: false,
        connectedRooms: false,
        separatedPool: false,
        accessible: false,
        passoverKosher: false,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filtered = useMemo(() => {
    if (!filters) return PACKAGES
    let items = [...PACKAGES]
    if (filters.q) {
      const q = filters.q.trim()
      items = items.filter(
        (p) => p.title.includes(q) || p.destination.includes(q) || p.summary.includes(q) || p.hotel.includes(q),
      )
    }
    if (filters.destination) items = items.filter((p) => p.destination === filters.destination)
    if (filters.kashrut) items = items.filter((p) => p.kashrut === filters.kashrut)
    if (filters.priceMax != null) items = items.filter((p) => p.priceFrom <= (filters.priceMax as number))
    Object.entries(filters.amenities).forEach(([k, v]) => {
      if (v) items = items.filter((p) => (p.amenities as any)?.[k])
    })
    return items
  }, [filters])

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold" style={{ color: "#152d49" }}>
          חבילות נופש
        </h1>
        <Filters onChange={setFilters} defaultState={defaultState} />
        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PackageCard key={p.slug} item={p} />
          ))}
          {filtered.length === 0 && <p className="text-gray-600">לא נמצאו חבילות התואמות לסינון.</p>}
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
