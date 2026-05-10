import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layouts/Navbar"
import Footer from "@/components/layouts/Footer"

export const metadata: Metadata = {
  title: "CV Nugraha Mutiara Abadi | Konsultan & Perizinan Garut",
  description: "Solusi tepat untuk setiap proyek. Layanan konsultan teknik, arsitektur, interior, transportasi, dan perizinan usaha di Garut.",
  keywords: ["konsultan", "perizinan", "NIB", "PBG", "SLF", "Garut", "NMA", "Nugraha Mutiara Abadi"],
  openGraph: {
    title: "CV Nugraha Mutiara Abadi",
    description: "Solusi tepat untuk setiap proyek",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}