"use client"

import { COMPANY } from "@/constants/company"
import { Users,  Mail } from "lucide-react"

const teamColors = ["#1a4d99", "#0e2d58", "#123a72"]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: "linear-gradient(180deg, #040f20 0%, #020b18 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "0",
          width: "1px",
          height: "100%",
          background: "linear-gradient(180deg, transparent, rgba(230,184,0,0.15), transparent)",
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
            Orang di Balik NMA
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
            Tim Profesional Kami
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
            Diperkuat oleh tenaga ahli berpengalaman yang berdedikasi memberikan hasil terbaik untuk Anda.
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {COMPANY.team.map((member, i) => (
            <div
              key={member.name}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.border = "1px solid rgba(230,184,0,0.2)"
                el.style.transform = "translateY(-4px)"
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.border = "1px solid rgba(255,255,255,0.07)"
                el.style.transform = "translateY(0)"
                el.style.boxShadow = "none"
              }}
            >
              {/* Avatar area */}
              <div
                style={{
                  height: "140px",
                  background: `linear-gradient(135deg, ${teamColors[i % teamColors.length]}, rgba(2,11,24,0.5))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative circles */}
                <div
                  style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    border: "1px solid rgba(230,184,0,0.1)",
                    top: "-50px",
                    right: "-50px",
                  }}
                />
                {/* Initials */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(230,184,0,0.12)",
                    border: "2px solid rgba(230,184,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#f5c842",
                    position: "relative",
                  }}
                >
                  {i + 1 === 1 ? "DU" : i + 1 === 2 ? "MT" : "KS"}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#e6b800",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  {member.role}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "13px",
                    lineHeight: 1.7,
                  }}
                >
                  {member.desc}
                </p>

                {/* Contact icons */}
                <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(230,184,0,0.08)",
                      border: "1px solid rgba(230,184,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#e6b800",
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(230,184,0,0.18)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(230,184,0,0.08)")}
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            padding: "32px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Users size={20} color="#e6b800" />
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: 0 }}>
            Bergabung bersama kami atau konsultasikan proyek Anda langsung dengan tim ahli NMA
          </p>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "linear-gradient(135deg, #e6b800, #f5c842)",
              color: "#020b18",
              padding: "10px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Hubungi Tim Kami
          </a>
        </div>
      </div>
    </section>
  )
}