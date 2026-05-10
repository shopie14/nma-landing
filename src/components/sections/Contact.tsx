"use client"

import { useState } from "react"
import { COMPANY } from "@/constants/company"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleWhatsApp = () => {
    const text = `Halo NMA, saya *${form.name}*.\n\nSaya ingin berkonsultasi mengenai *${form.service || "layanan Anda"}*.\n\n${form.message}\n\nNo. HP: ${form.phone}`
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, "_blank")
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    transition: "border 0.2s",
    boxSizing: "border-box",
  }

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #000d1a 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(230,184,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#e6b800",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Ayo Berkolaborasi
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Hubungi Kami
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #e6b800, #f9dc7a)",
              borderRadius: "2px",
              margin: "0 auto 20px",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "15px",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Siap mendampingi proyek Anda. Konsultasi awal gratis — hubungi kami sekarang.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Left: Info */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Informasi Kontak
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
              {[
                {
                  icon: <Phone size={18} color="#e6b800" />,
                  label: "Telepon",
                  value: COMPANY.phone,
                  href: `tel:${COMPANY.phone}`,
                },
                {
                  icon: <MessageCircle size={18} color="#e6b800" />,
                  label: "WhatsApp",
                  value: COMPANY.whatsappDisplay,
                  href: `https://wa.me/${COMPANY.whatsapp}`,
                },
                {
                  icon: <Mail size={18} color="#e6b800" />,
                  label: "Email",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                },
                {
                  icon: <MapPin size={18} color="#e6b800" />,
                  label: "Alamat",
                  value: COMPANY.address,
                  href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    textDecoration: "none",
                    padding: "16px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(230,184,0,0.06)"
                    el.style.border = "1px solid rgba(230,184,0,0.2)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(255,255,255,0.03)"
                    el.style.border = "1px solid rgba(255,255,255,0.06)"
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(230,184,0,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "3px", letterSpacing: "0.5px" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "#fff", fontSize: "13px", lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div
              style={{
                background: "rgba(230,184,0,0.05)",
                border: "1px solid rgba(230,184,0,0.15)",
                borderRadius: "10px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <Clock size={16} color="#e6b800" style={{ marginTop: "2px" }} />
              <div>
                <div style={{ fontSize: "12px", color: "#e6b800", marginBottom: "4px", fontWeight: 500 }}>
                  Jam Operasional
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                  Senin – Jumat: 08.00 – 17.00 WIB
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
                  Sabtu: 08.00 – 13.00 WIB
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Kirim Pesan via WhatsApp
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  NAMA LENGKAP
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.border = "1px solid rgba(230,184,0,0.4)")}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.border = "1px solid rgba(255,255,255,0.1)")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  NOMOR HP / WA
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 0812-xxxx-xxxx"
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.border = "1px solid rgba(230,184,0,0.4)")}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.border = "1px solid rgba(255,255,255,0.1)")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  LAYANAN YANG DIBUTUHKAN
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => ((e.target as HTMLSelectElement).style.border = "1px solid rgba(230,184,0,0.4)")}
                  onBlur={(e) => ((e.target as HTMLSelectElement).style.border = "1px solid rgba(255,255,255,0.1)")}
                >
                  <option value="" style={{ background: "#061325" }}>Pilih layanan...</option>
                  {COMPANY.services.map((s) => (
                    <option key={s.title} value={`${s.title} - ${s.fullTitle}`} style={{ background: "#061325" }}>
                      {s.title} — {s.fullTitle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  PESAN / KETERANGAN
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => ((e.target as HTMLTextAreaElement).style.border = "1px solid rgba(230,184,0,0.4)")}
                  onBlur={(e) => ((e.target as HTMLTextAreaElement).style.border = "1px solid rgba(255,255,255,0.1)")}
                />
              </div>

              <button
                onClick={handleWhatsApp}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #e6b800, #f5c842)",
                  color: "#020b18",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.3px",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "opacity 0.2s, transform 0.2s",
                  boxShadow: "0 8px 24px rgba(230,184,0,0.25)",
                  marginTop: "8px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.opacity = "0.9"
                  el.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.opacity = "1"
                  el.style.transform = "translateY(0)"
                }}
              >
                <Send size={17} />
                Kirim via WhatsApp
              </button>

              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>
                Konsultasi pertama gratis • Respon cepat dalam jam kerja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}