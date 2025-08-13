import Link from "next/link"
import Image from "next/image"
import { BookOpen, Info, HelpCircle, Contact, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="mt-16" style={{ backgroundColor: "#0b0f1a", color: "#ffffff" }}>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-bold">תמר נופשים</h3>
          <p className="text-sm text-white/80">
            נופש יוקרתי מותאם לקהל הדתי והחרדי בארץ ובעולם. כשרות, שבת, ושקט נפשי.
          </p>
        </div>

        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <BookOpen className="h-4 w-4 text-white/80" aria-hidden />
            ניווט מהיר
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/packages" className="inline-flex items-center gap-2 hover:underline">
                <MapPin className="h-4 w-4 text-white/70" aria-hidden />
                חבילות
              </Link>
            </li>
            <li>
              <Link href="/about" className="inline-flex items-center gap-2 hover:underline">
                <Info className="h-4 w-4 text-white/70" aria-hidden />
                עלינו
              </Link>
            </li>
            <li>
              <Link href="/faq" className="inline-flex items-center gap-2 hover:underline">
                <HelpCircle className="h-4 w-4 text-white/70" aria-hidden />
                שאלות נפוצות
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-flex items-center gap-2 hover:underline">
                <Contact className="h-4 w-4 text-white/70" aria-hidden />
                צור קשר
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Contact className="h-4 w-4 text-white/80" aria-hidden />
            פרטי קשר
          </h4>
          <ul className="space-y-2 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white/80" aria-hidden />
              <span>טל׳: 050-000-0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white/80" aria-hidden />
              <span>info@tamir-travel.co.il</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white/80" aria-hidden />
              <span>ת״א, ישראל</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Clock className="h-4 w-4 text-white/80" aria-hidden />
            שעות פעילות
          </h4>
          <p className="text-sm text-white/80">
            א׳–ה׳: 09:00–18:00
            <br />
            ו׳ וערבי חג: 09:00–13:00
            <br />
            שבת וחג: סגור
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-4 text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 md:h-32 md:w-32">
            <Image
              src="/images/logo-udi-yogev-ai-digital-2.jpg"
              alt="Udi Yogev AI Digital"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 128px, 112px"
            />
          </div>
          <p className="text-xs font-extrabold text-white">
            אתרים - אפליקציות - מומחה בישווק AI - UDI YOGEV AI DIGITAL
          </p>
          <p className="text-xs text-white/75">© {new Date().getFullYear()} תמר נופשים. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
