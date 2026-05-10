"use client"

import { COMPANY } from "@/constants/company"
import {
  FileText, Building2, Award, Wrench, Landmark,
  Layers, Route, Briefcase
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  FileText, Building2, Award, Wrench, Landmark, Layers, Route, Briefcase,
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #061325 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(26,77,153,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(230,184,0,0.05) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#e6b800",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Apa yang Kami Tawarkan
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
            Layanan Unggulan
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
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Kami menyediakan layanan konsultan dan perizinan terlengkap untuk mendukung kesuksesan proyek Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {COMPANY.services.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} index={i} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  Icon,
  index,
}: {
  service: (typeof COMPANY.services)[0]
  Icon: React.ElementType
  index: number
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        padding: "28px",
        cursor: "default",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "rgba(230,184,0,0.06)"
        el.style.border = "1px solid rgba(230,184,0,0.25)"
        el.style.transform = "translateY(-4px)"
        el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = "rgba(255,255,255,0.03)"
        el.style.border = "1px solid rgba(255,255,255,0.07)"
        el.style.transform = "translateY(0)"
        el.style.boxShadow = "none"
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, rgba(230,184,0,0.15), rgba(245,200,66,0.08))",
          border: "1px solid rgba(230,184,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Icon size={22} color="#e6b800" />
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "#ffffff",
          marginBottom: "4px",
        }}
      >
        {service.title}
      </div>
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "1px",
          color: "#e6b800",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        {service.fullTitle}
      </div>

      {/* Description */}
      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "13px",
          lineHeight: 1.7,
        }}
      >
        {service.desc}
      </p>

      {/* Number watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          right: "16px",
          fontFamily: "'Playfair Display', serif",
          fontSize: "80px",
          fontWeight: 900,
          color: "rgba(230,184,0,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  )
}