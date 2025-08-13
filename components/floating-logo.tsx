import Image from "next/image"
import Link from "next/link"

export default function FloatingLogo() {
  return (
    <Link href="/" aria-label="תמר נופשים - דף הבית" className="fixed right-3 top-3 z-[70] sm:right-4 sm:top-4">
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white/90 p-1 shadow-2xl ring-1 ring-black/10 backdrop-blur sm:h-20 sm:w-20 md:h-24 md:w-24">
        <Image
          src="/images/logo-tamar-travel-1.jpg"
          alt="לוגו תמר נופשים"
          fill
          sizes="(min-width: 768px) 96px, (min-width: 640px) 80px, 64px"
          className="rounded-xl object-contain"
          priority
        />
      </div>
    </Link>
  )
}
