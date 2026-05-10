"use client"

import Link from "next/link"
import { COMPANY } from "@/constants/company"
import { Mail, MapPin, Phone } from "lucide-react"

const navLinks = [
  { label: "Beranda",    href: "#hero" },
  { label: "Layanan",   href: "#services" },
  { label: "Tentang",   href: "#about" },
  { label: "Legalitas", href: "#legalitas" },
  { label: "Galeri",    href: "#gallery" },
  { label: "Tim",       href: "#team" },
  { label: "Kontak",    href: "#contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "clamp(40px,7vw,64px)", paddingBottom: "clamp(24px,4vw,32px)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: "clamp(28px,5vw,48px)",
          marginBottom: "clamp(32px,5vw,48px)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: "var(--navy-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: 11, color: "var(--gold-light)" }}>NMA</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(12px,1.8vw,14px)", color: "rgba(255,255,255,.9)", lineHeight: 1.2 }}>CV Nugraha Mutiara Abadi</div>
                <div style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "2px", textTransform: "uppercase" }}>Konsultan & Perizinan</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.32)", lineHeight: 1.75 }}>
              Solusi tepat untuk setiap proyek. Profesional, legal, dan terpercaya.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14, fontWeight: 500 }}>Navigasi</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    style={{ color: "rgba(255,255,255,.35)", textDecoration: "none", fontSize: 13, transition: "color .2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.78)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14, fontWeight: 500 }}>Layanan</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {COMPANY.services.slice(0, 5).map(s => (
                <li key={s.title}>
                  <Link href="#services"
                    style={{ color: "rgba(255,255,255,.35)", textDecoration: "none", fontSize: 12, transition: "color .2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.78)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
                  >{s.title} — {s.fullTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14, fontWeight: 500 }}>Kontak</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                { icon: <Phone size={11} />, val: COMPANY.phone,         href: `tel:${COMPANY.phone}` },
                { icon: <Mail size={11} />,  val: COMPANY.email,         href: `mailto:${COMPANY.email}` },
                { icon: <MapPin size={11} />, val: "Garut, Jawa Barat",  href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}` },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(255,255,255,.35)", textDecoration: "none", fontSize: 12, lineHeight: 1.5, transition: "color .2s ease", wordBreak: "break-word" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.72)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
                >
                  <span style={{ marginTop: 2, color: "var(--gold)", flexShrink: 0 }}>{c.icon}</span>
                  {c.val}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "clamp(16px,3vw,24px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.2)" }}>© {year} CV Nugraha Mutiara Abadi. Semua hak dilindungi.</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.14)" }}>Garut, Jawa Barat — Indonesia</p>
        </div>
      </div>
    </footer>
  )
}