"use client"

import Link from "next/link"
import { COMPANY } from "@/constants/company"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #000d1a 100%)",
        borderTop: "1px solid rgba(230,184,0,0.15)",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #e6b800, #f9dc7a)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "15px",
                  color: "#020b18",
                }}
              >
                NMA
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#fff",
                  }}
                >
                  CV Nugraha Mutiara Abadi
                </div>
                <div style={{ fontSize: "10px", color: "#e6b800", letterSpacing: "2px" }}>
                  KONSULTAN & PERIZINAN
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              {COMPANY.description}
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#e6b800",
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              Layanan Kami
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {COMPANY.services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link
                    href="#services"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "13px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#f5c842")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {s.title} — {s.fullTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#e6b800",
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              Kontak
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={`tel:${COMPANY.phone}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                <Phone size={14} style={{ marginTop: "2px", color: "#e6b800", flexShrink: 0 }} />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                <Mail size={14} style={{ marginTop: "2px", color: "#e6b800", flexShrink: 0 }} />
                {COMPANY.email}
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                }}
              >
                <MapPin size={14} style={{ marginTop: "2px", color: "#e6b800", flexShrink: 0 }} />
                {COMPANY.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>
            © {year} CV Nugraha Mutiara Abadi. Semua hak dilindungi.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>
            NIB: {COMPANY.nib}
          </p>
        </div>
      </div>
    </footer>
  )
}