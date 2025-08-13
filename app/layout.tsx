import type React from "react"
import "./globals.css"
import { Heebo } from "next/font/google"
import type { Metadata } from "next"
import FloatingLogo from "@/components/floating-logo"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "תמר נופשים | חבילות נופש 5★ לקהל הדתי והחרדי",
  description:
    "תמר נופשים - חבילות נופש יוקרתיות בארץ ובחו״ל, כשרות מהודרת, שבתות וחגים, משפחות, זוגות וקבוצות. שירות אישי بدون פשרות.",
  openGraph: {
    title: "תמר נופשים | נופש כשר 5★",
    description: "חבילות נופש יוקרתיות בארץ ובחו״ל לקהל הדתי והחרדי. כשרות, שבת, מעלית שבת, בריכה בהפרדה ועוד.",
    locale: "he_IL",
    type: "website",
  },
  alternates: { canonical: "/" },
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.className} ${heebo.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1;wght@200..700;opsz@20..48"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-c+0q0e1v8v6n7pQ3lWk5A1aY3lM1I5+2uC1l0r5pYI9i4rM4lM3xWmGqHRn0v9c1d8Y6dH2c2lH2I7npL3PpXg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`antialiased bg-white text-gray-900`}>
        {children}
        {/* לוגו תמר נופשים צף וקבוע מעל כל התוכן */}
        <FloatingLogo />
      </body>
    </html>
  )
}
