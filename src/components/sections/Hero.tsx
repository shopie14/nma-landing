"use client"

import { useEffect, useRef } from "react"
import { COMPANY } from "@/constants/company"
import { ArrowDown, MessageCircle, Phone } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Particles
    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number
    }[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230, 184, 0, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(230,184,0,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,77,153,0.35) 0%, #020b18 60%)",
      }}
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(230,184,0,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "15%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          border: "1px solid rgba(230,184,0,0.12)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(230,184,0,0.1)",
            border: "1px solid rgba(230,184,0,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#e6b800",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "#f5c842",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Konsultan & Perizinan Profesional · Garut
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "12px",
            maxWidth: "800px",
          }}
        >
          Solusi Tepat{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #e6b800, #f9dc7a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Untuk Setiap
          </span>
          <br />
          Proyek Anda
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "48px",
          }}
        >
          CV Nugraha Mutiara Abadi hadir sebagai mitra terpercaya dalam perizinan usaha, 
          konsultan teknik, arsitektur, dan berbagai layanan proyek profesional.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Halo NMA, saya ingin konsultasi mengenai layanan Anda.`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #e6b800, #f5c842)",
              color: "#020b18",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.3px",
              boxShadow: "0 8px 32px rgba(230,184,0,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translateY(-2px)"
              el.style.boxShadow = "0 12px 40px rgba(230,184,0,0.4)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translateY(0)"
              el.style.boxShadow = "0 8px 32px rgba(230,184,0,0.3)"
            }}
          >
            <MessageCircle size={18} />
            Konsultasi Gratis
          </a>

          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "rgba(230,184,0,0.5)"
              el.style.background = "rgba(230,184,0,0.05)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "rgba(255,255,255,0.2)"
              el.style.background = "transparent"
            }}
          >
            Lihat Layanan
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "72px",
            flexWrap: "wrap",
          }}
        >
          {COMPANY.stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#f5c842",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px" }}>
          SCROLL
        </span>
        <ArrowDown size={16} color="rgba(255,255,255,0.3)" />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}