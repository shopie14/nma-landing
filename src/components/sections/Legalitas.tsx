"use client"

import { COMPANY } from "@/constants/company"
import { ShieldCheck, BadgeCheck, FileCheck } from "lucide-react"

export default function Legalitas() {
  return (
    <section id="legalitas" className="section" style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%, rgba(184,150,90,.07) 0%, transparent 55%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(184,150,90,.2)" }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,64px)" }}>
          <p className="eyebrow" style={{ color: "var(--gold-light)", marginBottom: 10 }}>Legalitas</p>
          <h2 className="h-section" style={{ color: "#fff", marginBottom: 12 }}>Terdaftar & Beroperasi Legal</h2>
          <div className="divider" style={{ margin: "0 auto 18px" }} />
          <p className="body-sm" style={{ color: "rgba(255,255,255,.45)", maxWidth: 380, margin: "0 auto", lineHeight: 1.75 }}>
            Seluruh operasional kami berjalan sesuai regulasi pemerintah Indonesia dan terdaftar resmi dalam sistem OSS.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "clamp(20px,4vw,28px)" }}>
          {/* Data legal */}
          <div style={{ background: "rgba(255,255,255,.05)", borderRadius: 12, border: "1px solid rgba(184,150,90,.2)", padding: "clamp(22px,3.5vw,32px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(18px,3vw,28px)" }}>
              <ShieldCheck size={20} color="var(--gold-light)" />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px,2.5vw,20px)", fontWeight: 600, color: "#fff" }}>Identitas Perusahaan</div>
            </div>
            {COMPANY.legalitas.map((item, i) => (
              <div key={item.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "clamp(10px,1.8vw,13px) 0", gap: 12,
                borderBottom: i < COMPANY.legalitas.length - 1 ? "1px solid rgba(255,255,255,.06)" : "none",
                flexWrap: "wrap",
              }}>
                <span className="body-sm" style={{ color: "rgba(255,255,255,.38)", flexShrink: 0 }}>{item.label}</span>
                <span className="body-sm" style={{ fontWeight: 500, color: "rgba(255,255,255,.85)", textAlign: "right" }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px,2vw,16px)" }}>
            {[
              { icon: <BadgeCheck size={16} color="var(--gold-light)" />, title: "Terdaftar OSS BKPM", desc: "Nomor Induk Berusaha aktif yang membuktikan legalitas operasional sesuai regulasi terbaru." },
              { icon: <ShieldCheck size={16} color="var(--gold-light)" />, title: "Legalitas Terjamin", desc: "Semua layanan dilaksanakan sesuai peraturan perundang-undangan yang berlaku di Indonesia." },
              { icon: <FileCheck size={16} color="var(--gold-light)" />, title: "Dokumen Resmi", desc: "Setiap proses perizinan menghasilkan dokumen resmi yang sah dan dapat dipertanggungjawabkan." },
            ].map(item => (
              <div key={item.title}
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 10, padding: "clamp(14px,2.5vw,20px) clamp(14px,2.5vw,22px)", display: "flex", gap: 13, alignItems: "flex-start", transition: "background .3s ease, border-color .3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(184,150,90,.08)"; e.currentTarget.style.borderColor = "rgba(184,150,90,.25)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.07)" }}
              >
                <div style={{ width: 34, height: 34, borderRadius: 7, background: "rgba(184,150,90,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "clamp(13px,1.8vw,14px)", fontWeight: 600, color: "rgba(255,255,255,.9)", marginBottom: 4 }}>{item.title}</div>
                  <p className="body-sm" style={{ color: "rgba(255,255,255,.4)" }}>{item.desc}</p>
                </div>
              </div>
            ))}

            <a href={`https://wa.me/${COMPANY.whatsapp}?text=Halo%20NMA%2C%20saya%20ingin%20verifikasi%20legalitas.`}
              target="_blank" rel="noreferrer"
              style={{ display: "block", textAlign: "center", background: "var(--gold)", color: "var(--navy)", padding: "clamp(11px,2vw,13px)", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "opacity .25s ease, transform .25s ease" }}
              onMouseEnter={e => { e.currentTarget.style.opacity = ".88"; e.currentTarget.style.transform = "translateY(-1px)" }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)" }}
            >
              Verifikasi & Konsultasi Legalitas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}