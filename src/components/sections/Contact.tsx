"use client"

import { useState } from "react"
import { COMPANY } from "@/constants/company"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" })
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSend = () => {
    const text = `Halo NMA, saya *${form.name || "calon klien"}*.\n\nLayanan: *${form.service || "—"}*\n\n${form.message || ""}\n\nKontak: ${form.phone || "—"}`
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, "_blank")
  }

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: "100%", padding: "11px 14px",
    background: "var(--surface)",
    border: `1px solid ${focused === name ? "var(--gold-pale)" : "var(--surface-4)"}`,
    borderRadius: 7, color: "var(--ink)", fontSize: 13,
    outline: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: "border-color 0.25s ease",
    boxSizing: "border-box" as const,
  })

  const contactItems = [
    { icon: <Phone size={15} color="var(--gold)" />, label: "Telepon", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: <MessageCircle size={15} color="var(--gold)" />, label: "WhatsApp", value: COMPANY.whatsappDisplay, href: `https://wa.me/${COMPANY.whatsapp}` },
    { icon: <Mail size={15} color="var(--gold)" />, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: <MapPin size={15} color="var(--gold)" />, label: "Alamat", value: COMPANY.address, href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}` },
  ]

  return (
    <section id="contact" style={{ background: "var(--surface-2)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10, fontWeight: 500 }}>
            Ayo Berkolaborasi
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.1, marginBottom: 14 }}>
            Hubungi Kami
          </h2>
          <div style={{ width: 36, height: 2, background: "var(--gold)", borderRadius: 1, margin: "0 auto 20px" }} />
          <p style={{ fontSize: 14, color: "var(--ink-muted)", maxWidth: 380, margin: "0 auto", lineHeight: 1.7 }}>
            Konsultasi awal gratis. Kami siap membantu proyek Anda segera.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          {/* Left: contact info */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: "var(--ink)", marginBottom: 24 }}>
              Informasi Kontak
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {contactItems.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    textDecoration: "none", padding: "14px 16px", borderRadius: 9,
                    background: "var(--surface)", border: "1px solid var(--surface-4)",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-pale)"; e.currentTarget.style.background = "var(--gold-faint)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--surface-4)"; e.currentTarget.style.background = "var(--surface)" }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: 7, background: "var(--gold-faint)", border: "1px solid var(--gold-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "1px", color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div style={{
              background: "var(--surface)", border: "1px solid var(--surface-4)",
              borderRadius: 9, padding: "16px", display: "flex", gap: 12, alignItems: "flex-start",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "var(--navy-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Clock size={15} color="var(--navy-soft)" />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-soft)", marginBottom: 6 }}>Jam Operasional</div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)", lineHeight: 1.7 }}>
                  Senin – Jumat: 08.00 – 17.00 WIB<br />
                  Sabtu: 08.00 – 13.00 WIB
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--surface-4)", borderRadius: 12, padding: "32px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 24 }}>
              Kirim Pesan via WhatsApp
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: 11, color: "var(--ink-faint)", marginBottom: 5, letterSpacing: "0.5px", textTransform: "uppercase" }}>Nama Lengkap</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Nama Anda"
                  style={fieldStyle("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: "block", fontSize: 11, color: "var(--ink-faint)", marginBottom: 5, letterSpacing: "0.5px", textTransform: "uppercase" }}>Nomor HP / WhatsApp</label>
                <input name="phone" value={form.phone} onChange={handleChange}
                  placeholder="0812-xxxx-xxxx"
                  style={fieldStyle("phone")}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Service */}
              <div>
                <label style={{ display: "block", fontSize: 11, color: "var(--ink-faint)", marginBottom: 5, letterSpacing: "0.5px", textTransform: "uppercase" }}>Layanan yang Dibutuhkan</label>
                <select name="service" value={form.service} onChange={handleChange}
                  style={{ ...fieldStyle("service"), cursor: "pointer" }}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="">Pilih layanan...</option>
                  {COMPANY.services.map(s => (
                    <option key={s.title} value={`${s.title} — ${s.fullTitle}`}>
                      {s.title} — {s.fullTitle}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: 11, color: "var(--ink-faint)", marginBottom: 5, letterSpacing: "0.5px", textTransform: "uppercase" }}>Keterangan</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                  rows={4}
                  style={{ ...fieldStyle("message"), resize: "vertical" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Submit */}
              <button onClick={handleSend}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 9,
                  background: "var(--navy)", color: "var(--gold-light)",
                  padding: "13px", borderRadius: 7, border: "none",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.3px",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 16px rgba(30,45,69,0.14)",
                  marginTop: 4,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--navy-mid)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,45,69,0.2)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(30,45,69,0.14)" }}
              >
                <Send size={15} /> Kirim via WhatsApp
              </button>

              <p style={{ textAlign: "center", fontSize: 11, color: "var(--ink-faint)" }}>
                Konsultasi pertama gratis · Respons cepat dalam jam kerja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}