"use client"

import { COMPANY } from "@/constants/company"
import { ShieldCheck, BadgeCheck, FileText } from "lucide-react"

export default function Legalitas() {
  return (
    <section
      id="legalitas"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #040f20 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(230,184,0,0.04) 0%, transparent 70%)",
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
            Legalitas Perusahaan
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
            Terdaftar & Terpercaya
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
            CV Nugraha Mutiara Abadi beroperasi secara legal dan terdaftar resmi dalam sistem OSS pemerintah Indonesia.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Legal info card */}
          <div
            style={{
              gridColumn: "span 1",
              background: "rgba(230,184,0,0.05)",
              border: "1px solid rgba(230,184,0,0.2)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <ShieldCheck size={28} color="#e6b800" />
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Identitas Legal
                </div>
                <div style={{ fontSize: "11px", color: "#e6b800", letterSpacing: "1px" }}>
                  DATA RESMI PERUSAHAAN
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {COMPANY.legalitas.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom:
                      i < COMPANY.legalitas.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    gap: "16px",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", flexShrink: 0 }}>
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: trust badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* NIB Highlight */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(10,31,61,0.8), rgba(6,19,37,0.8))",
                border: "1px solid rgba(230,184,0,0.2)",
                borderRadius: "12px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "rgba(230,184,0,0.06)",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <BadgeCheck size={20} color="#e6b800" />
                <span style={{ fontSize: "11px", color: "#e6b800", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Nomor Induk Berusaha
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                {COMPANY.nib}
              </div>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginTop: "8px" }}>
                Terdaftar resmi di sistem OSS BKPM
              </p>
            </div>

            {/* Trust features */}
            {[
              {
                icon: <ShieldCheck size={20} color="#e6b800" />,
                title: "Legalitas Terjamin",
                desc: "Semua layanan dilaksanakan sesuai peraturan perundang-undangan yang berlaku di Indonesia.",
              },
              {
                icon: <FileText size={20} color="#e6b800" />,
                title: "Dokumen Resmi",
                desc: "Setiap proses perizinan menghasilkan dokumen resmi yang sah dan dapat dipertanggungjawabkan.",
              },
              {
                icon: <BadgeCheck size={20} color="#e6b800" />,
                title: "Izin Usaha Aktif",
                desc: "NIB aktif yang membuktikan legalitas operasional perusahaan sesuai regulasi OSS terbaru.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  padding: "20px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
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
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}