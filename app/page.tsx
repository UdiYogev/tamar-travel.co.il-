import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Hero from "@/components/hero"
import PackageCard from "@/components/package-card"
import WhatsAppFloat from "@/components/whatsapp-float"
import { PACKAGES } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/components/reveal"
import SearchBar from "@/components/search-bar"
import FeaturesStrip from "@/components/features-strip"
import StatsCounters from "@/components/stats-counters"
import TestimonialsCarouselStrip from "@/components/testimonials-carousel-strip"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <Hero />

      <SearchBar />

      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: "#3C096C" }}>
            חבילות מובילות
          </h2>
          <Link href="/packages" className="text-sm font-medium hover:underline" style={{ color: "#3C096C" }}>
            לכל החבילות
          </Link>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <PackageCard item={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* למה תמר נופשים — תמונה לצד הטקסט על רקע סגול כהה */}
      <section className="bg-[#240046]">
        <div className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2">
          <Reveal>
            <div className="text-white">
              <h3 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: "#E0AAFF" }}>
                למה תמר נופשים?
              </h3>
              <ul className="mt-4 space-y-3 text-gray-100">
                <li>• התאמה מלאה לקהל הדתי והחרדי — כשרות, שבת, פרטיות.</li>
                <li>• מלונות 5★ בלבד, בדיקות איכות ואמינות ספקים.</li>
                <li>• שירות אישי, צוות זמין ומקצועי מהשיחה הראשונה ועד השיבה הביתה.</li>
                <li>• חוויה פרימיום: העברות VIP, סוויטות, סיורים פרטיים.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-80">
              <Image
                src="/images/why-section.jpg"
                alt="מלון מואר בלילה עם בריכה"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturesStrip />

      {/* פס תכלת כהה עם קרוסלה — 3 תמונות זו לצד זו, מתחלפות כל 3 שניות */}
      <TestimonialsCarouselStrip />

      <StatsCounters />

      <section aria-label="סטריפ פרסום" className="relative">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <Image
            src="/images/strip-home-page-1.jpg"
            alt="תמר נופשים - פרסום"
            width={2400}
            height={700}
            sizes="100vw"
            className="block h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
