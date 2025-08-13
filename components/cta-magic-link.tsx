"use client"

import type React from "react"

import Link from "next/link"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children?: React.ReactNode
  className?: string
  ariaLabel?: string
}

/**
 * CtaMagicLink
 * - כפתור לינק עם גרדיאנט דו-גווני כחול, Ripple עדין והנפשת גרדיאנט.
 * - מכבד prefers-reduced-motion.
 */
export default function CtaMagicLink({ href, children = "לצפייה בחבילה", className, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  function addRipple(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement("span")
    ripple.style.position = "absolute"
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`
    ripple.style.borderRadius = "9999px"
    ripple.style.background = "rgba(255,255,255,0.35)"
    ripple.style.pointerEvents = "none"
    ripple.style.transform = "scale(0)"
    ripple.style.opacity = "0.8"

    el.appendChild(ripple)

    if (!prefersReduced && ripple.animate) {
      ripple
        .animate(
          [
            { transform: "scale(0)", opacity: 0.35 },
            { transform: "scale(1.6)", opacity: 0 },
          ],
          { duration: 550, easing: "cubic-bezier(.2,.8,.2,1)" },
        )
        .addEventListener("finish", () => ripple.remove())
    } else {
      setTimeout(() => ripple.remove(), 300)
    }
  }

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={ariaLabel || "לצפייה בחבילה"}
      onMouseDown={addRipple}
      className={cn(
        // Layout
        "relative inline-flex h-10 w-full items-center justify-center overflow-hidden rounded-md px-4 text-sm font-medium",
        // Animated two-blues gradient background
        "blue-cta-gradient text-white",
        // Focus/hover/active
        "outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-0",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        // Inner halo on hover
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        "before:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.16),inset_0_0_18px_rgba(217,194,142,0.22)]",
        className,
      )}
      style={{
        // subtle inner bar in sand tone
        boxShadow: "0 -1px 0 0 rgba(217,194,142,0.28) inset",
      }}
    >
      {/* subtle top glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{ background: "radial-gradient(900px 220px at 50% 0%, rgba(255,255,255,0.35) 0%, transparent 60%)" }}
      />
      <span className="relative z-10">{children}</span>
    </Link>
  )
}
