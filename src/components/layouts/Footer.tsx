"use client"

import Link from "next/link"
import { COMPANY } from "@/constants/company"
import { Mail, MapPin, Phone } from "lucide-react"

const navLinks = [
  { label: "Beranda",    href: "#hero" },
  { label: "Layanan",   href: "#services" },
  { label: "Tentang",   href: "#about" },
  { label: "Legalitas", href: "#legalitas" },
  { label: "Tim",       href: "#team" },
  { label: "Kontak",    href: "#contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 6, background: "var(--navy-mid)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 12, color: "var(--gold-light)" }}>NMA</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.9)" }}>CV Nugraha Mutiara Abadi</div>
                <div style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "2px", textTransform: "uppercase" }}>Konsultan & Perizinan</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: 240 }}>
              Solusi tepat untuk setiap proyek. Profesional, legal, dan terpercaya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16, fontWeight: 500 }}>Navigasi</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    style={{ color: "rgba(255,255,255,0.38)", textDecoration: "none", fontSize: 13, transition: "color 0.2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16, fontWeight: 500 }}>Layanan</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {COMPANY.services.slice(0, 5).map(s => (
                <li key={s.title}>
                  <Link href="#services"
                    style={{ color: "rgba(255,255,255,0.38)", textDecoration: "none", fontSize: 13, transition: "color 0.2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                  >{s.title} — {s.fullTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak singkat */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16, fontWeight: 500 }}>Kontak</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <Phone size={12} />, val: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: <Mail size={12} />, val: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: <MapPin size={12} />, val: "Garut, Jawa Barat", href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}` },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(255,255,255,0.38)", textDecoration: "none", fontSize: 12, lineHeight: 1.5, transition: "color 0.2s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                >
                  <span style={{ marginTop: 2, color: "var(--gold)", flexShrink: 0 }}>{c.icon}</span>
                  {c.val}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)" }}>
            © {year} CV Nugraha Mutiara Abadi. Semua hak dilindungi.
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>
            Garut, Jawa Barat — Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}