import { Star } from "lucide-react"

export default function RatingStars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex" aria-label="דירוג 5 כוכבים">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}
