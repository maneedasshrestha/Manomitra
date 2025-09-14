import type React from "react"
// ...existing code...
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Manomitra",
  description:
    "A Safe Space for Mental Health Awareness in Nepal's Communities. Youth-led initiative focused on peer support and breaking mental health stigma.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/logo.jpg" type="image/jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
