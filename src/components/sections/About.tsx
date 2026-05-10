"use client"

import { COMPANY } from "@/constants/company"
import { CheckCircle2, Target, Eye } from "lucide-react"

const strengths = [
  "Tim tenaga ahli bersertifikat dan berpengalaman",
  "Proses pengurusan izin cepat dan transparan",
  "Pendampingan proyek dari awal hingga selesai",
  "Harga kompetitif dengan kualitas terjamin",
  "Terdaftar resmi dan legal sesuai regulasi",
  "Melayani berbagai skala proyek",
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(180deg, #061325 0%, #020b18 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          left: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(230,184,0,0.06)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left: Text */}
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#e6b800",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Siapa Kami
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              Mitra Terpercaya<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #e6b800, #f9dc7a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Proyek Anda
              </span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #e6b800, #f9dc7a)",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            />

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              CV Nugraha Mutiara Abadi adalah perusahaan konsultan yang berkomitmen memberikan solusi 
              profesional dan terpercaya untuk berbagai kebutuhan proyek di Garut dan sekitarnya.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Dengan tim yang berpengalaman dan memahami regulasi terkini, kami siap mendampingi 
              setiap tahapan proyek Anda — mulai dari perencanaan, perizinan, hingga pengawasan.
            </p>

            {/* Strengths */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {strengths.map((s) => (
                <li key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={16} color="#e6b800" style={{ flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Stats card */}
            <div
              style={{
                background: "rgba(230,184,0,0.06)",
                border: "1px solid rgba(230,184,0,0.2)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                {COMPANY.stats.map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "36px",
                        fontWeight: 700,
                        color: "#f5c842",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.45)",
                        marginTop: "6px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visi */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(230,184,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Eye size={18} color="#e6b800" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  Visi
                </div>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>
                  Menjadi perusahaan konsultan terdepan di Jawa Barat yang dipercaya oleh berbagai kalangan dalam pengurusan perizinan dan konsultasi proyek.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(230,184,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Target size={18} color="#e6b800" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  Misi
                </div>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>
                  Memberikan layanan profesional, transparan, dan berorientasi hasil kepada setiap klien dengan standar kualitas tertinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}