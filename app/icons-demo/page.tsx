import Link from "next/link"

export default function IconsDemoPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold" style={{ color: "#123c55" }}>
        בדיקת אייקונים — Material Icons + Font Awesome
      </h1>

      {/* Material Icons (baseline) */}
      <section className="mb-8 rounded-lg border p-4">
        <h2 className="mb-3 text-lg font-semibold">Material Icons (baseline)</h2>
        <div className="flex flex-wrap items-center gap-4 text-gray-800">
          <span className="material-icons">menu</span>
          <span className="material-icons">search</span>
          <span className="material-icons">info</span>
          <span className="material-icons">help</span>
          <span className="material-icons">calendar_month</span>
          <span className="material-icons">location_on</span>
          <span className="material-icons">phone</span>
          <span className="material-icons">mail</span>
        </div>
      </section>

      {/* Font Awesome 6 */}
      <section className="mb-8 rounded-lg border p-4">
        <h2 className="mb-3 text-lg font-semibold">Font Awesome 6</h2>
        <div className="flex flex-wrap items-center gap-4 text-gray-800">
          <i className="fa-solid fa-house" aria-hidden />
          <i className="fa-solid fa-magnifying-glass" aria-hidden />
          <i className="fa-solid fa-circle-info" aria-hidden />
          <i className="fa-solid fa-circle-question" aria-hidden />
          <i className="fa-regular fa-calendar-days" aria-hidden />
          <i className="fa-solid fa-location-dot" aria-hidden />
          <i className="fa-solid fa-phone" aria-hidden />
          <i className="fa-regular fa-envelope" aria-hidden />
          <i className="fa-brands fa-whatsapp" aria-hidden />
        </div>
      </section>

      <p className="text-sm text-gray-600">
        טיפ: אם אינך רואה סמלים, נקה Cache בדפדפן (Disable cache בתיבת DevTools Network) ותרענן את העמוד.
      </p>

      <div className="mt-6">
        <Link href="/" className="text-[#123c55] underline">
          חזרה לדף הבית
        </Link>
      </div>
    </main>
  )
}
