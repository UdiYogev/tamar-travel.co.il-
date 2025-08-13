"use client"

import type React from "react"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [errors, setErrors] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    setErrors(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const phone = String(data.get("phone") || "")
    const email = String(data.get("email") || "")
    if (!name || !phone) {
      e.preventDefault()
      setErrors("Please provide both name and phone number.")
      return
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault()
      setErrors("Please enter a valid email address.")
      return
    }
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold" style={{ color: "#152d49" }}>
            צור קשר
          </h1>
          <p className="mt-2 text-gray-700">נשמח לשוחח ולהתאים עבורכם את החופשה המושלמת.</p>
          <form
            action={async (formData) => {
              console.log("Contact:", Object.fromEntries(formData as any))
              alert("Thanks! We received your message.")
            }}
            onSubmit={onSubmit}
            className="mt-6 space-y-3"
            noValidate
          >
            {errors && <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{errors}</div>}
            <input name="name" placeholder="שם מלא" className="w-full rounded-md border px-3 py-2 text-sm" required />
            <input name="phone" placeholder="טלפון" className="w-full rounded-md border px-3 py-2 text-sm" required />
            <input
              name="email"
              type="email"
              placeholder="אימייל"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
            <select name="interest" className="w-full rounded-md border px-3 py-2 text-sm">
              <option value="">עניין</option>
              <option value="Families">Families</option>
              <option value="Couples">Couples</option>
              <option value="Groups">Groups</option>
              <option value="Shabbat/Holidays">Shabbat/Holidays</option>
              <option value="Conferences">Conferences</option>
            </select>
            <textarea
              name="message"
              placeholder="ספרו לנו בקצרה מה חשוב לכם (יעד, תאריכים, תקציב, כשרות...)"
              className="w-full rounded-md border px-3 py-2 text-sm"
              rows={6}
            />
            <Button type="submit" className="w-full text-white" style={{ backgroundColor: "#152d49" }}>
              שליחה
            </Button>
          </form>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
