import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, CalendarDays, BadgeHelp, Heart } from "lucide-react"
import RatingStars from "./rating-stars"
import type { PackageItem } from "@/lib/data"
import { tagClasses, kashrutClasses } from "@/lib/tag-styles"
import CtaMagicLink from "./cta-magic-link"

export default function PackageCard({ item }: { item: PackageItem }) {
  return (
    <Card
      className="
      shine-on-hover hover-float group flex h-full min-h-[600px] flex-col overflow-hidden p-0 gap-0
      border-gray-300 transition-all duration-300 ease-out
      hover:-translate-y-1 hover:border-[#2563eb]/50 hover:ring-2 hover:ring-[#0ea5ff]/30
      hover:shadow-[0_14px_30px_-12px_rgba(2,132,199,0.40),0_0_0_10px_rgba(14,165,233,0.12)]
    "
    >
      <div>
        <div aria-hidden="true" className="h-3 w-full" style={{ backgroundColor: "#0ea5ff" }} />
        <div className="relative h-48 w-full md:h-56 overflow-hidden">
          <Image
            src={item.images?.[0] ?? "/placeholder.svg?height=300&width=600&query=luxury%20hotel%20sea%20view"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <button
            aria-label="הוספה למועדפים"
            className="absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-black/10 transition hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </button>
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <Badge className="bg-white text-gray-900 ring-1 ring-black/10 hover:bg-white">
              החל מ- ₪{item.priceFrom.toLocaleString()}
            </Badge>
            <Badge className="bg-[#2563eb] text-white hover:bg-[#2563eb]">5★</Badge>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <CardHeader className="space-y-1">
          <CardTitle
            className="font-heebo line-clamp-2 text-xl md:text-2xl font-black leading-tight tracking-tight"
            style={{ color: "#0b1020" }}
          >
            {item.title}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{item.destination}</span>
          </div>
        </CardHeader>

        <CardContent className="flex min-h-0 flex-1 flex-col gap-3">
          <p className="line-clamp-3 text-sm text-gray-700">{item.summary}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <CalendarDays className="h-4 w-4" />
              <span>{item.dates}</span>
            </div>
            <RatingStars value={5} />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className={kashrutClasses(item.kashrut)}>{item.kashrut}</Badge>
            {item.includes?.slice(0, 2).map((inc) => (
              <Badge key={inc} className={tagClasses(inc)}>
                {inc}
              </Badge>
            ))}
            {item.includes && item.includes.length > 2 && (
              <Badge variant="outline" className="flex items-center gap-1 text-xs">
                <BadgeHelp className="h-3 w-3" />
                {`+${item.includes.length - 2}`}
              </Badge>
            )}
          </div>

          <div className="mt-auto">
            <CtaMagicLink href={`/packages/${item.slug}`} className="h-11" />
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
