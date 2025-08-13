export type PackageItem = {
  slug: string
  title: string
  destination: string
  summary: string
  priceFrom: number
  dates: string
  hotel: string
  kashrut: "מהדרין" | 'בד"ץ' | "רבנות"
  includes: string[]
  images: string[]
  mapQuery?: string
  cancelPolicy?: string
  pdfUrl?: string
  amenities: {
    shabbatElevator?: boolean
    synagogueNearby?: boolean
    connectedRooms?: boolean
    separatedPool?: boolean
    accessible?: boolean
    passoverKosher?: boolean
  }
}

export const PACKAGES: PackageItem[] = [
  {
    slug: "eilat-king-david-summer",
    title: "אילת קינג דיויד - קיץ של יוקרה",
    destination: "אילת",
    summary: "נופש 5★ מול הים האדום, חדרים מרווחים, תפריט שף בכשרות מהודרת ואווירת רוגע מושלמת.",
    priceFrom: 2890,
    dates: "יולי–אוגוסט",
    hotel: "King David Eilat 5★",
    kashrut: "מהדרין",
    includes: ["טיסות הלוך-חזור", "העברות", "חצי פנסיון", "מועדון ילדים", "בריכה בהפרדה בשעות מסוימות"],
    images: ["/images/hotel-herods.jpg"],
    mapQuery: "Eilat%20King%20David%20Hotel",
    cancelPolicy: "ביטול ללא דמי ביטול עד 14 יום לפני היציאה",
    amenities: { separatedPool: true, synagogueNearby: true, accessible: true, shabbatElevator: true },
  },
  {
    slug: "tiberias-galil-suites",
    title: "טבריה סוויטות הגליל - שלווה על הכנרת",
    destination: "טבריה",
    summary: "שהות קסומה מול הכנרת במלון 5★, סעודות שבת בכשרות בד״ץ וחוויה משפחתית שלמה.",
    priceFrom: 1990,
    dates: "כל השנה",
    hotel: "Galil Suites 5★",
    kashrut: 'בד"ץ',
    includes: ["אירוח ע״ב חצי פנסיון", "קידוש והבדלה", "סיור מודרך בצפת", "מעלית שבת"],
    images: ["/images/hotel-dan.jpg"],
    mapQuery: "Tiberias%20Hotel",
    amenities: { shabbatElevator: true, synagogueNearby: true, connectedRooms: true, accessible: true },
  },
  {
    slug: "antalya-deluxe-holiday",
    title: "אנטליה דה-לוקס - הכל כלול כשר",
    destination: "אנטליה",
    summary: "ריזורט 5★ עם הכל כלול בכשרות רבנות מהודרת, מתקנים למשפחות ובריכה בהפרדה.",
    priceFrom: 3390,
    dates: "אביב–סתיו",
    hotel: "Antalya Deluxe Resort 5★",
    kashrut: "רבנות",
    includes: ["טיסות", "העברות", "הכל כלול", "מגלשות מים", "בריכה בהפרדה"],
    images: ["/images/hotel-cinematic.jpg"],
    mapQuery: "Antalya%20Resort",
    amenities: { separatedPool: true, synagogueNearby: true, accessible: true },
  },
  {
    slug: "crete-elegant-escape",
    title: "כרתים אסקייפ אלגנטי - ירח דבש",
    destination: "כרתים",
    summary: "חופשה רומנטית 5★, סוויטות פרימיום, תפריט שף בכשרות מהדרין ושקיעות שלא תשכחו.",
    priceFrom: 4590,
    dates: "אפריל–אוקטובר",
    hotel: "Crete Elegant 5★",
    kashrut: "מהדרין",
    includes: ["טיסות", "העברות VIP", "סוויטה עם ג׳קוזי", "ארוחות שף", "סיור פרטי"],
    images: ["/placeholder.svg?height=400&width=800"],
    mapQuery: "Crete%20Luxury%20Hotel",
    amenities: { accessible: true },
  },
]
