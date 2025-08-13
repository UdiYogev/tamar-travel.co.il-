import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-12">
        <h1 className="text-2xl font-bold" style={{ color: "#0a2540" }}>
          על תמר נופשים
        </h1>
        <div className="mt-4 max-w-3xl space-y-4 text-gray-800">
          <p>
            תמר נופשים מובילה חוויות נופש יוקרתיות לקהל הדתי והחרדי, בארץ ובעולם. אנו מלווים את לקוחותינו משלב התכנון
            ועד החזרה הביתה — עם דגש על כשרות, שבת, פרטיות ושקט נפשי.
          </p>
          <p>
            הצוות שלנו בודק ומאשר כל מלון, ספק ומסלול כדי להבטיח סטנדרט 5★ אמיתי. אנו מתמחים בנופש כשר, שבתות וחגים,
            קבוצות, ירח דבש, משפחות, ספא, סקי וכנסים — בהתאמה אישית מלאה.
          </p>
          <p>הבטחת איכות: שקיפות מלאה, זמינות גבוהה ושירות לבבי ללא פשרות.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
