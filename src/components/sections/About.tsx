"use client"

import { COMPANY } from "@/constants/company"
import { CheckCircle2, Eye, Target } from "lucide-react"

const strengths = [
  "Tim tenaga ahli bersertifikat dan berpengalaman",
  "Proses perizinan cepat, transparan, dan terstruktur",
  "Pendampingan penuh dari awal hingga selesai proyek",
  "Harga kompetitif dengan kualitas layanan terjamin",
  "Terdaftar resmi dan beroperasi sesuai regulasi",
  "Berpengalaman menangani berbagai skala proyek",
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <div className="grid-2">
          {/* Left */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 10 }}>Tentang Kami</p>
            <h2 className="h-section" style={{ color: "var(--ink)", marginBottom: 20 }}>
              Mitra Terpercaya<br />
              <em style={{ fontStyle: "italic", color: "var(--navy-mid)" }}>Proyek Anda</em>
            </h2>
            <div className="divider" style={{ marginBottom: "clamp(18px,3vw,28px)" }} />

            <p className="body-lg" style={{ color: "var(--ink-soft)", marginBottom: 12 }}>
              CV Nugraha Mutiara Abadi adalah perusahaan konsultan yang berkomitmen memberikan solusi profesional dan terpercaya untuk berbagai kebutuhan proyek di Garut dan sekitarnya.
            </p>
            <p className="body-sm" style={{ color: "var(--ink-muted)", marginBottom: "clamp(24px,4vw,36px)" }}>
              Dengan tim yang memahami regulasi terkini, kami mendampingi setiap tahapan proyek Anda — dari perencanaan, perizinan, hingga pengawasan — dengan standar kualitas tertinggi.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {strengths.map(s => (
                <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={14} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span className="body-sm" style={{ color: "var(--ink-muted)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,2.5vw,20px)" }}>
            {/* Stats grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 1, background: "var(--surface-3)",
              borderRadius: 12, overflow: "hidden", border: "1px solid var(--surface-3)",
            }}>
              {COMPANY.stats.map(s => (
                <div key={s.label} style={{ background: "var(--surface)", padding: "clamp(18px,3vw,24px) clamp(14px,2.5vw,20px)", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,38px)", fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-faint)", marginTop: 5 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Visi & Misi */}
            {[
              { icon: <Eye size={16} color="var(--navy-soft)" />, title: "Visi", text: "Menjadi perusahaan konsultan terdepan di Jawa Barat yang dipercaya oleh berbagai kalangan dalam pengurusan perizinan dan konsultasi proyek." },
              { icon: <Target size={16} color="var(--navy-soft)" />, title: "Misi", text: "Memberikan layanan profesional, transparan, dan berorientasi hasil kepada setiap klien dengan standar kualitas tertinggi." },
            ].map(item => (
              <div key={item.title} className="card-hover"
                style={{ background: "var(--surface)", border: "1px solid var(--surface-4)", borderRadius: 10, padding: "clamp(16px,2.5vw,20px) clamp(16px,2.5vw,22px)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 34, height: 34, borderRadius: 7, background: "var(--navy-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(16px,2vw,18px)", fontWeight: 600, color: "var(--ink)", marginBottom: 5 }}>{item.title}</div>
                  <p className="body-sm" style={{ color: "var(--ink-muted)" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}