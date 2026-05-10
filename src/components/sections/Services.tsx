"use client"

import { COMPANY } from "@/constants/company"
import { FileText, Building2, Award, Wrench, Landmark, Layers, Route, Briefcase } from "lucide-react"

const iconMap: Record<string, React.ElementType> = { FileText, Building2, Award, Wrench, Landmark, Layers, Route, Briefcase }

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          flexWrap: "wrap", gap: "clamp(16px,3vw,20px)", marginBottom: "clamp(36px,6vw,56px)",
        }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 10 }}>Layanan Kami</p>
            <h2 className="h-section" style={{ color: "var(--ink)" }}>
              Solusi Profesional<br className="hide-mobile" /> yang Kami Sediakan
            </h2>
          </div>
          <p className="body-sm" style={{ color: "var(--ink-muted)", maxWidth: 300, lineHeight: 1.75 }}>
            Delapan layanan terintegrasi untuk mendukung proyek Anda dari perizinan hingga penyelesaian.
          </p>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg,var(--gold-pale),transparent)", marginBottom: "clamp(36px,6vw,56px)" }} />

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
          gap: 1,
          background: "var(--surface-3)",
          border: "1px solid var(--surface-3)",
          borderRadius: 12, overflow: "hidden",
        }}>
          {COMPANY.services.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText
            return (
              <div key={service.title}
                style={{ background: "var(--surface)", padding: "clamp(20px,3.5vw,32px) clamp(18px,3vw,28px)", cursor: "default", transition: "background .3s ease", position: "relative" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-faint)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "clamp(14px,2.5vw,20px)" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 9,
                    background: "var(--navy-pale)", border: "1px solid rgba(74,111,165,.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={19} color="var(--navy-soft)" />
                  </div>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3.5vw,28px)", fontWeight: 600, color: "var(--surface-4)", lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="h-card" style={{ color: "var(--ink)", marginBottom: 3 }}>{service.title}</div>
                <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10, fontWeight: 500 }}>{service.fullTitle}</div>
                <p className="body-sm" style={{ color: "var(--ink-muted)" }}>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}