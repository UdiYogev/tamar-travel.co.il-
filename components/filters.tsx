"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  SlidersHorizontal,
  MapPin,
  Utensils,
  BadgeDollarSign,
  CalendarDays,
  Landmark,
  LinkIcon,
  Waves,
  Accessibility,
  BadgeCheck,
  Building2,
  RotateCcw,
  Search,
} from "lucide-react"

export type FiltersState = {
  q: string
  destination: string
  kashrut: string
  priceMax: number | null
  start: string
  end: string
  amenities: {
    shabbatElevator: boolean
    synagogueNearby: boolean
    connectedRooms: boolean
    separatedPool: boolean
    accessible: boolean
    passoverKosher: boolean
  }
}

const DESTINATIONS = ["אילת", "טבריה", "אנטליה", "כרתים", "צפת", "ירושלים", "איטליה", "יוון"]
const KASHRUT = ["מהדרין", 'בד"ץ', "רבנות"]

export default function Filters({
  onChange,
  defaultState,
}: {
  onChange: (state: FiltersState) => void
  defaultState?: Partial<FiltersState>
}) {
  const [state, setState] = useState<FiltersState>({
    q: "",
    destination: "",
    kashrut: "",
    priceMax: null,
    start: "",
    end: "",
    amenities: {
      shabbatElevator: false,
      synagogueNearby: false,
      connectedRooms: false,
      separatedPool: false,
      accessible: false,
      passoverKosher: false,
    },
    ...defaultState,
  })

  useEffect(() => {
    onChange(state)
  }, [state, onChange])

  const amenityList = useMemo(
    () =>
      [
        { key: "shabbatElevator", label: "מעלית שבת", Icon: Building2 },
        { key: "synagogueNearby", label: "בית כנסת קרוב", Icon: Landmark },
        { key: "connectedRooms", label: "חדרים מחוברים", Icon: LinkIcon },
        { key: "separatedPool", label: "בריכה בהפרדה", Icon: Waves },
        { key: "accessible", label: "נגישות", Icon: Accessibility },
        { key: "passoverKosher", label: "כשרות לפסח", Icon: BadgeCheck },
      ] as {
        key: keyof FiltersState["amenities"]
        label: string
        Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
      }[],
    [],
  )

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-[#7B2CBF]" aria-hidden />
        <h3 className="text-sm font-semibold" style={{ color: "#5A189A" }}>
          סינון חבילות
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        {/* search */}
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-gray-700">חיפוש</label>
          <div className="flex h-10 items-center gap-2 rounded-md border px-3">
            <Search className="h-4 w-4 text-[#7B2CBF]" aria-hidden />
            <input
              placeholder="יעד/מלון/מילות מפתח"
              value={state.q}
              onChange={(e) => setState((s) => ({ ...s, q: e.target.value }))}
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        {/* destination */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-700">יעד</label>
          <Select
            value={state.destination || "all"}
            onValueChange={(v) => setState((s) => ({ ...s, destination: v === "all" ? "" : v }))}
          >
            <SelectTrigger className="w-full">
              <MapPin className="mr-1 h-4 w-4 text-[#7B2CBF]" aria-hidden />
              <SelectValue placeholder="יעד" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">כל היעדים</SelectItem>
              {DESTINATIONS.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* kashrut */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-700">רמת כשרות</label>
          <Select
            value={state.kashrut || "all"}
            onValueChange={(v) => setState((s) => ({ ...s, kashrut: v === "all" ? "" : v }))}
          >
            <SelectTrigger className="w-full">
              <Utensils className="mr-1 h-4 w-4 text-[#7B2CBF]" aria-hidden />
              <SelectValue placeholder="רמת כשרות" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">כל הרמות</SelectItem>
              {KASHRUT.map((k) => (
                <SelectItem key={k} value={k}>
                  {k}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* price */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-700">מחיר מקס׳ (₪)</label>
          <div className="flex h-10 items-center gap-2 rounded-md border px-3">
            <BadgeDollarSign className="h-4 w-4 text-[#7B2CBF]" aria-hidden />
            <Input
              type="number"
              inputMode="numeric"
              placeholder="לדוגמה: 3000"
              value={state.priceMax ?? ""}
              onChange={(e) => setState((s) => ({ ...s, priceMax: e.target.value ? Number(e.target.value) : null }))}
              className="border-0 p-0 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* dates */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-700">תאריך התחלה</label>
          <div className="flex h-10 items-center gap-2 rounded-md border px-3">
            <CalendarDays className="h-4 w-4 text-[#7B2CBF]" aria-hidden />
            <Input
              type="date"
              value={state.start}
              onChange={(e) => setState((s) => ({ ...s, start: e.target.value }))}
              className="border-0 p-0 focus-visible:ring-0"
              aria-label="תאריך התחלה"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-700">תאריך סיום</label>
          <div className="flex h-10 items-center gap-2 rounded-md border px-3">
            <CalendarDays className="h-4 w-4 text-[#7B2CBF]" aria-hidden />
            <Input
              type="date"
              value={state.end}
              onChange={(e) => setState((s) => ({ ...s, end: e.target.value }))}
              className="border-0 p-0 focus-visible:ring-0"
              aria-label="תאריך סיום"
            />
          </div>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-6">
        {amenityList.map(({ key, label, Icon }) => (
          <label key={key} className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={state.amenities[key]}
              onCheckedChange={(v) => setState((s) => ({ ...s, amenities: { ...s.amenities, [key]: Boolean(v) } }))}
            />
            <Icon className="h-4 w-4 text-[#7B2CBF]" aria-hidden />
            {label}
          </label>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Button
          variant="outline"
          onClick={() =>
            setState({
              q: "",
              destination: "",
              kashrut: "",
              priceMax: null,
              start: "",
              end: "",
              amenities: {
                shabbatElevator: false,
                synagogueNearby: false,
                connectedRooms: false,
                separatedPool: false,
                accessible: false,
                passoverKosher: false,
              },
            })
          }
          className="inline-flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          ניקוי סינונים
        </Button>
      </div>
    </div>
  )
}
