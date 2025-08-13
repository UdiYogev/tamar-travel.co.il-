import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const faqs = [
  {
    q: "איזו רמת כשרות מוצעת?",
    a: "אנו עובדים עם מגוון רמות כשרות: מהדרין, בד״ץ ורבנות — לפי היעד והמלון. ניתן לבקש רמת כשרות מסוימת בעת ההזמנה.",
  },
  {
    q: "האם יש התחשבות בשבת?",
    a: "כן. אנו דואגים לפתרונות שבת: מעלית שבת, פלטות, מפתחות שבת היכן שאפשר, ושעות פעילות מותאמות.",
  },
  {
    q: "האם יש בריכה בהפרדה?",
    a: "במגוון מלונות יש שעות הפרדה. ניתן לסנן חבילות לפי 'בריכה בהפרדה'.",
  },
  {
    q: "האם ניתן להזמין אונליין?",
    a: "בגרסה הראשונה — יצירת קשר וקבלת הצעה מותאמת. בהמשך נציע הזמנה ותשלום אונליין.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-12">
        <h1 className="text-2xl font-bold" style={{ color: "#0a2540" }}>
          שאלות נפוצות
        </h1>
        <div className="mt-6 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-lg border p-4">
              <h3 className="font-semibold text-gray-900">{f.q}</h3>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
