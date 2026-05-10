"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { COMPANY } from "@/constants/company"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Beranda",    href: "#hero" },
  { label: "Layanan",   href: "#services" },
  { label: "Tentang",   href: "#about" },
  {label:  "Dokumentasi", href: "#gallery"},
  { label: "Legalitas", href: "#legalitas" },
  { label: "Tim",       href: "#team" },
  { label: "Kontak",    href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      transition: "background .45s ease, border-color .45s ease, box-shadow .45s ease",
      background: scrolled ? "rgba(248,247,245,.94)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(184,150,90,.14)" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 20px rgba(26,29,35,.06)" : "none",
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 1160, margin: "0 auto",
        padding: "0 clamp(16px,5vw,28px)",
        height: "clamp(60px,8vw,72px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="#hero" onClick={() => setOpen(false)}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 6, background: "var(--navy)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: 12, color: "var(--gold-light)", letterSpacing: .5 }}>NMA</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(13px,2vw,15px)", color: "var(--ink)", lineHeight: 1.1 }}>
              Nugraha Mutiara Abadi
            </div>
            <div style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "2.5px", textTransform: "uppercase" }}>
              Konsultan & Perizinan
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "clamp(18px,3vw,32px)" }} className="hidden md:flex">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              style={{ color: "var(--ink-muted)", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "color .2s ease" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-muted)")}
            >{l.label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer"
          className="btn-primary hidden md:inline-flex"
          style={{ fontSize: 12, padding: "8px 16px" }}>
          Konsultasi Gratis
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: 6, display: "flex" }}
          className="md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", inset: 0, top: "clamp(60px,8vw,72px)",
        background: "rgba(248,247,245,.97)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .38s var(--ease-out)",
        padding: "24px clamp(16px,5vw,28px) 32px",
        overflowY: "auto",
        zIndex: 199,
      }} className="md:hidden">
        <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {navLinks.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "14px 0",
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(22px,5vw,28px)", fontWeight: 600, color: "var(--ink)",
                textDecoration: "none",
                borderBottom: i < navLinks.length - 1 ? "1px solid var(--surface-3)" : "none",
                transition: "color .2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
            >{l.label}</Link>
          ))}
        </nav>
        <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer"
          onClick={() => setOpen(false)}
          className="btn-primary"
          style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          Konsultasi Gratis via WhatsApp
        </a>
      </div>
    </header>
  )
}