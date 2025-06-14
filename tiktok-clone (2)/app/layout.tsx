import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KitKot - Best TikTok Adults",
  description: "KitKot - Watch Adults Videos On TikTok",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
