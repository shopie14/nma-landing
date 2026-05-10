"use client"

import { useEffect, useRef } from "react"
import { COMPANY } from "@/constants/company"
import { ArrowDownRight, MessageCircle } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let animId: number

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize, { passive: true })

    const orbs = Array.from({ length: 4 }, (_, i) => ({
      x: (i + 1) * (window.innerWidth / 5),
      y: 150 + i * 120,
      r: 200 + i * 70,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1,
      opacity: 0.045 + i * 0.008,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      orbs.forEach(o => {
        o.x += o.vx; o.y += o.vy
        if (o.x < -o.r) o.x = canvas.width + o.r
        if (o.x > canvas.width + o.r) o.x = -o.r
        if (o.y < -o.r) o.y = canvas.height + o.r
        if (o.y > canvas.height + o.r) o.y = -o.r
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        g.addColorStop(0, `rgba(184,150,90,${o.opacity})`)
        g.addColorStop(1, "rgba(184,150,90,0)")
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize) }
  }, [])

  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100svh",
      display: "flex", alignItems: "center",
      background: "linear-gradient(158deg, #f8f7f5 0%, #f2efe8 55%, #eae6d8 100%)",
      overflow: "hidden",
    }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%" }} />

      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(184,150,90,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(184,150,90,.035) 1px,transparent 1px)",
        backgroundSize: "clamp(50px,8vw,80px) clamp(50px,8vw,80px)",
      }} />

      {/* Left accent line — hide on small */}
      <div className="hide-mobile" style={{
        position: "absolute", left: "7%", top: "18%", bottom: "18%",
        width: 1, background: "linear-gradient(180deg,transparent,rgba(184,150,90,.22),transparent)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "clamp(100px,14vw,140px)", paddingBottom: "clamp(60px,9vw,100px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(24px,5vw,48px)",
          alignItems: "center",
        }}>
          {/* Text block */}
          <div style={{ minWidth: 0 }}>
            {/* Eyebrow */}
            <div className="anim-fade-in d1" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(18px,3vw,28px)" }}>
              <div style={{ width: 22, height: 1, background: "var(--gold)", flexShrink: 0 }} />
              <span className="eyebrow">Garut · Jawa Barat · Est. {COMPANY.established}</span>
            </div>

            {/* Headline */}
            <h1 className="h-display anim-fade-up d2" style={{ color: "var(--ink)", marginBottom: "clamp(14px,2.5vw,24px)" }}>
              Solusi Tepat<br />
              <em style={{ fontStyle: "italic", color: "var(--navy-mid)" }}>Setiap Proyek</em>
            </h1>

            <p className="body-lg anim-fade-up d3" style={{ color: "var(--ink-muted)", maxWidth: 480, marginBottom: "clamp(28px,5vw,44px)" }}>
              {COMPANY.description}
            </p>

            {/* CTAs */}
            <div className="anim-fade-up d4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`https://wa.me/${COMPANY.whatsapp}?text=Halo%20NMA%2C%20saya%20ingin%20konsultasi.`}
                target="_blank" rel="noreferrer" className="btn-primary">
                <MessageCircle size={15} /> Konsultasi Gratis
              </a>
              <a href="#services" className="btn-outline">
                Lihat Layanan <ArrowDownRight size={14} />
              </a>
            </div>

            {/* Stats */}
            <div className="anim-fade-up d5" style={{
              display: "flex", gap: "clamp(24px,5vw,40px)",
              marginTop: "clamp(40px,7vw,60px)", flexWrap: "wrap",
            }}>
              {COMPANY.stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-faint)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative card — desktop only */}
          <div className="hide-mobile anim-fade-in d4" style={{
            width: "clamp(160px,16vw,220px)",
            background: "rgba(255,255,255,.72)",
            border: "1px solid rgba(184,150,90,.2)",
            borderRadius: 14, padding: "clamp(18px,2.5vw,28px)",
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 8px 36px rgba(26,29,35,.07)",
            flexShrink: 0,
          }}>
            <div style={{ width: 34, height: 34, borderRadius: 7, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: 11, color: "var(--gold-light)" }}>NMA</span>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(14px,1.8vw,16px)", fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>
              8 Layanan Unggulan
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-muted)", lineHeight: 1.65 }}>
              Perizinan NIB, PBG, SLF hingga konsultan teknik, arsitektur, dan interior.
            </p>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--surface-4)" }}>
              <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 500 }}>✓ Terdaftar Resmi OSS</div>
              <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 500, marginTop: 4 }}>✓ Tim Bersertifikat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", animation: "scrollCue 2.4s ease-in-out infinite" }}>
        <div style={{ width: 1, height: 36, background: "linear-gradient(180deg,transparent,var(--gold-pale))", margin: "0 auto" }} />
      </div>
    </section>
  )
}