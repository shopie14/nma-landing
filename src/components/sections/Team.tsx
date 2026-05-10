"use client"

import { COMPANY } from "@/constants/company"
import { Mail } from "lucide-react"

const avatarColors = [
  { bg: "var(--navy-pale)",  text: "var(--navy)" },
  { bg: "var(--gold-faint)", text: "var(--gold)" },
  { bg: "#eef2f7",           text: "var(--navy-soft)" },
]
const topBarColors = ["var(--navy)", "var(--gold)", "var(--navy-soft)"]

export default function Team() {
  return (
    <section id="team" className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(36px,6vw,60px)" }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Orang di Balik NMA</p>
          <h2 className="h-section" style={{ color: "var(--ink)", marginBottom: 14 }}>Tim Profesional Kami</h2>
          <div className="divider" style={{ margin: "0 auto 18px" }} />
          <p className="body-sm" style={{ color: "var(--ink-muted)", maxWidth: 380, margin: "0 auto", lineHeight: 1.75 }}>
            Diperkuat oleh tenaga ahli berdedikasi yang siap memberikan hasil terbaik untuk setiap proyek Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid-3" style={{ marginBottom: "clamp(28px,4vw,48px)" }}>
          {COMPANY.team.map((member, i) => {
            const color = avatarColors[i % avatarColors.length]
            return (
              <div key={member.role} className="card-hover"
                style={{ background: "var(--surface)", border: "1px solid var(--surface-4)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 4, background: topBarColors[i % topBarColors.length] }} />
                <div style={{ padding: "clamp(20px,3vw,28px) clamp(18px,3vw,26px)" }}>
                  {/* Avatar row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(14px,2.5vw,20px)" }}>
                    <div style={{
                      width: 50, height: 50, borderRadius: "50%",
                      background: color.bg, display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
                      fontSize: "clamp(15px,2.5vw,18px)", color: color.text,
                      border: "1px solid rgba(0,0,0,.06)", flexShrink: 0,
                    }}>
                      {member.initials}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(16px,2.5vw,19px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {member.role}
                      </div>
                      <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--gold)", marginTop: 3, fontWeight: 500 }}>
                        {member.dept}
                      </div>
                    </div>
                  </div>

                  <p className="body-sm" style={{ color: "var(--ink-muted)", marginBottom: "clamp(14px,2.5vw,20px)" }}>{member.desc}</p>

                  <div style={{ paddingTop: 14, borderTop: "1px solid var(--surface-3)" }}>
                    <a href={`mailto:${COMPANY.email}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-muted)", textDecoration: "none", transition: "color .2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-muted)")}
                    >
                      <Mail size={13} /> Kirim Pesan
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div style={{
          background: "var(--surface-2)", border: "1px solid var(--surface-4)", borderRadius: 12,
          padding: "clamp(20px,3.5vw,28px) clamp(20px,4vw,32px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>
              Diskusikan proyek Anda bersama kami
            </div>
            <p className="body-sm" style={{ color: "var(--ink-muted)" }}>Konsultasi pertama gratis. Tim kami siap membantu.</p>
          </div>
          <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">
            Hubungi Tim Kami
          </a>
        </div>
      </div>
    </section>
  )
}