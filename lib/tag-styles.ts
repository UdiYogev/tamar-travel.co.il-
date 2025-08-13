export function tagClasses(label: string): string {
  const l = String(label).trim()

  // Color palette tints aligned to site colors:
  const navy = "bg-[#e8eef5] text-[#123c55] ring-1 ring-[#cbd8e6]"
  const gold = "bg-[#f3e8c6] text-[#6a520f] ring-1 ring-[#e6d59b]"
  const orange = "bg-[#ffe8cc] text-[#7a3d00] ring-1 ring-[#ffd4a1]"
  const purple = "bg-[#efe5f6] text-[#3b1e54] ring-1 ring-[#dcc7ea]"
  const mint = "bg-[#e5f6ef] text-[#0f5132] ring-1 ring-[#bfe6d7]"
  const sky = "bg-[#e8f5ff] text-[#0b4a6f] ring-1 ring-[#c6e8ff]"
  const neutral = "bg-gray-100 text-gray-800 ring-1 ring-gray-200"

  // Heuristic mapping by keywords (Heb/Eng)
  if (/טיסה|טיסות|flight/i.test(l)) return orange
  if (/העברה|העברות|transfer/i.test(l)) return gold
  if (/מועדון ילדים|ילדים|kids/i.test(l)) return sky
  if (/מעלית שבת/i.test(l)) return navy
  if (/בריכה בהפרדה/i.test(l)) return mint
  if (/קידוש|הבדלה/i.test(l)) return gold
  if (/סיור|tour/i.test(l)) return purple
  if (/הכל כלול/i.test(l)) return orange
  if (/חצי פנסיון|פנסיון/i.test(l)) return navy

  // Kashrut values occasionally appear inside includes
  if (/מהדרין/.test(l)) return mint
  if (/בד"?ץ/.test(l)) return navy
  if (/רבנות/.test(l)) return purple

  return neutral
}

export function kashrutClasses(level: string): string {
  if (/מהדרין/.test(level)) return "bg-[#e5f6ef] text-[#0f5132] ring-1 ring-[#bfe6d7]"
  if (/בד"?ץ/.test(level)) return "bg-[#e8eef5] text-[#123c55] ring-1 ring-[#cbd8e6]"
  if (/רבנות/.test(level)) return "bg-[#efe5f6] text-[#3b1e54] ring-1 ring-[#dcc7ea]"
  return "bg-gray-100 text-gray-800 ring-1 ring-gray-200"
}
