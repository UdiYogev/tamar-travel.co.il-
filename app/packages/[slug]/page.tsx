"use client"

import type React from "react"

import { useMemo } from "react"
import { useParams } from "next/navigation"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { PACKAGES } from "@/lib/data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, FileText } from "lucide-react"
import RatingStars from "@/components/rating-stars"
import Link from "next/link"
import { kashrutClasses } from "@/lib/tag-styles"
import { Heebo } from "next/font/google"

const heebo = Heebo({ subsets: ["latin"] })

export default function PackageDetailPage() {
  const params = useParams()
  const slug = String(params?.slug || "")
  const item = useMemo(() => PACKAGES.find((p) => p.slug === slug), [slug])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const phone = String(data.get("phone") || "")
    if (!name || !phone) {
      e.preventDefault()
      alert("Please provide both name and phone number.")
    }
  }

  if (!item) {
    return (
      <div>
        <SiteHeader />
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-xl font-bold">החבילה לא נמצאה</h1>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl md:h-96">
              <Image
                src={item.images?.[0] ?? "/placeholder.svg?height=500&width=1000&query=luxury%20resort%20sea%20view"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute right-3 top-3 flex items-center gap-2">
                <Badge className="bg-white text-gray-900 hover:bg-white">
                  החל מ- ₪{item.priceFrom.toLocaleString()}
                </Badge>
                <Badge className="bg-[#caa85a] text-[#0a2540] hover:bg-[#caa85a]">5★</Badge>
              </div>
            </div>
            <h1 className={`${heebo.className} text-2xl font-extrabold text-gray-900`}>{item.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {item.destination}
              </span>
              <Badge className={kashrutClasses(item.kashrut)}>{item.kashrut}</Badge>
              <RatingStars value={5} />
            </div>
            <p className="mt-4 text-gray-800">{item.summary}</p>

            <h2 className="mt-6 text-lg font-bold">מה כלול</h2>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-gray-700 sm:grid-cols-2">
              {item.includes?.map((inc) => (
                <li key={inc} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {inc}
                </li>
              ))}
            </ul>

            <h2 className="mt-6 text-lg font-bold">תמונות</h2>
            <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3">
              {item.images?.slice(0, 6).map((src, i) => (
                <div key={i} className="relative h-28 w-full overflow-hidden rounded-md md:h-36">
                  <Image src={src || "/placeholder.svg"} alt={`תמונה ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            <h2 className="mt-6 text-lg font-bold">מפה</h2>
            <div className="mt-2 overflow-hidden rounded-md">
              <iframe
                title="מפת מלון"
                src={`https://www.google.com/maps?q=${encodeURIComponent(item.mapQuery || item.destination)}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>

            <h2 className="mt-6 text-lg font-bold">מדיניות ביטול</h2>
            <p className="mt-2 text-gray-700">{item.cancelPolicy ?? "מדיניות הביטול תימסר בעת ההזמנה."}</p>

            {item.pdfUrl && (
              <Link
                href={item.pdfUrl}
                target="_blank"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0a2540] hover:underline"
              >
                <FileText className="h-4 w-4" />
                הורדת פירוט PDF
              </Link>
            )}
          </div>

          <aside className="h-fit rounded-xl border p-4 shadow-sm">
            <h3 className="text-lg font-bold" style={{ color: "#0a2540" }}>
              התעניינות בחבילה
            </h3>
            <p className="mt-1 text-sm text-gray-600">השאירו פרטים ונחזור אליכם בהקדם.</p>
            <form
              action={async (formData) => {
                console.log("Inquiry:", Object.fromEntries(formData as any))
                alert("Thanks! We received your inquiry.")
              }}
              onSubmit={onSubmit}
              className="mt-4 space-y-3"
              noValidate
            >
              <input type="hidden" name="package" defaultValue={item.title} />
              <input name="name" required placeholder="שם מלא" className="w-full rounded-md border px-3 py-2 text-sm" />
              <input name="phone" required placeholder="טלפון" className="w-full rounded-md border px-3 py-2 text-sm" />
              <input
                name="email"
                type="email"
                placeholder="אימייל"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <textarea
                name="message"
                placeholder="הערות / תאריכים מועדפים"
                className="w-full rounded-md border px-3 py-2 text-sm"
                rows={4}
              />
              <Button type="submit" className="w-full text-white" style={{ backgroundColor: "#0a2540" }}>
                שליחת התעניינות
              </Button>
              <Link
                href={`https://wa.me/972500000000?text=${encodeURIComponent(`שלום, אשמח לפרטים על: ${item.title}`)}`}
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
              >
                וואטסאפ מיידי
              </Link>
            </form>
          </aside>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
