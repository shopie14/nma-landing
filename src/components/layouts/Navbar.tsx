"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { COMPANY } from "@/constants/company"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Layanan", href: "#services" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Legalitas", href: "#legalitas" },
  { label: "Tim", href: "#team" },
  { label: "Kontak", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(2, 11, 24, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(230,184,0,0.15)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="#hero" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                background: "linear-gradient(135deg, #e6b800, #f9dc7a)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#020b18",
                letterSpacing: "-0.5px",
              }}
            >
              NMA
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}
              >
                Nugraha Mutiara
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#e6b800",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Abadi
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.3px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#f5c842")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #e6b800, #f5c842)",
            color: "#020b18",
            padding: "9px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.3px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.9")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          <Phone size={14} />
          Hubungi Kami
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "rgba(2, 11, 24, 0.98)",
            borderTop: "1px solid rgba(230,184,0,0.15)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              marginTop: "16px",
              background: "linear-gradient(135deg, #e6b800, #f5c842)",
              color: "#020b18",
              padding: "12px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Hubungi Kami via WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}