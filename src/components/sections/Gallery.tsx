"use client"

import { useState } from "react"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

/*
  ─────────────────────────────────────────────
  CARA MENGGANTI FOTO:
  Ganti nilai `src` di array `photos` di bawah
  dengan path lokal (e.g. "/images/foto-1.jpg")
  atau URL foto Anda sendiri.
  ─────────────────────────────────────────────
*/
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    caption: "Konsultasi Teknik Lapangan",
    tag: "Teknik",
    featured: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=75",
    caption: "Perencanaan Arsitektur Gedung",
    tag: "Arsitektur",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=500&q=75",
    caption: "Survei Lokasi Proyek",
    tag: "Survei",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=75",
    caption: "Desain Interior Perkantoran",
    tag: "Interior",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=75",
    caption: "Pengurusan Dokumen Perizinan",
    tag: "Perizinan",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=75",
    caption: "Pengawasan Konstruksi",
    tag: "Konstruksi",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=75",
    caption: "Rapat Koordinasi Tim",
    tag: "Tim",
  },
]

const featured = photos.find(p => p.featured)!
const thumbnails = photos.filter(p => !p.featured)

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (id: number) => setLightbox(id)
  const closeLightbox = () => setLightbox(null)

  const current = photos.find(p => p.id === lightbox)
  const currentIdx = photos.findIndex(p => p.id === lightbox)

  const prev = () => {
    const idx = (currentIdx - 1 + photos.length) % photos.length
    setLightbox(photos[idx].id)
  }
  const next = () => {
    const idx = (currentIdx + 1) % photos.length
    setLightbox(photos[idx].id)
  }

  return (
    <>
      <section id="gallery" className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", flexWrap: "wrap",
            gap: "clamp(14px,3vw,20px)",
            marginBottom: "clamp(32px,5vw,52px)",
          }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Dokumentasi Kegiatan</p>
              <h2 className="h-section" style={{ color: "var(--ink)" }}>
                Jejak Kerja Kami<br className="hide-mobile" />
                <em style={{ fontStyle: "italic", color: "var(--navy-mid)" }}> di Lapangan</em>
              </h2>
            </div>
            <p className="body-sm" style={{ color: "var(--ink-muted)", maxWidth: 280, lineHeight: 1.75 }}>
              Dokumentasi nyata dari proses konsultasi, survei, hingga penyelesaian proyek klien kami.
            </p>
          </div>

          <div style={{ height: 1, background: "linear-gradient(90deg, var(--gold-pale), transparent)", marginBottom: "clamp(28px,5vw,48px)" }} />

          {/* Featured + grid layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(10px,2vw,14px)",
          }}>
            {/* Featured photo */}
            <div
              onClick={() => openLightbox(featured.id)}
              style={{
                position: "relative", borderRadius: 12, overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4/3",
                gridRow: "span 2",
                background: "var(--surface-3)",
              }}
            >
              <img
                src={featured.src}
                alt={featured.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .55s var(--ease-out)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 45%, rgba(26,29,35,.75) 100%)",
                transition: "opacity .3s ease",
              }} />
              {/* Badge */}
              <div style={{
                position: "absolute", top: 14, left: 14,
                background: "var(--gold)", color: "var(--navy)",
                fontSize: 10, fontWeight: 700, letterSpacing: "1.5px",
                textTransform: "uppercase", padding: "4px 10px", borderRadius: 4,
              }}>
                Unggulan
              </div>
              {/* Caption */}
              <div style={{ position: "absolute", bottom: 18, left: 18, right: 18 }}>
                <div style={{ fontSize: 10, color: "var(--gold-light)", letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 5, fontWeight: 500 }}>{featured.tag}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 600, color: "#fff", lineHeight: 1.25 }}>{featured.caption}</div>
              </div>
              {/* Zoom icon */}
              <div style={{
                position: "absolute", top: 14, right: 14,
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(255,255,255,.15)", backdropFilter: "blur(4px)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <ZoomIn size={15} color="#fff" />
              </div>
            </div>

            {/* Thumbnail grid */}
            {thumbnails.map(photo => (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                style={{
                  position: "relative", borderRadius: 10, overflow: "hidden",
                  cursor: "pointer", aspectRatio: "16/10",
                  background: "var(--surface-3)",
                }}
              >
                <img
                  src={photo.thumb}
                  alt={photo.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .5s var(--ease-out)" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLImageElement
                    el.style.transform = "scale(1.05)"
                    const overlay = el.nextElementSibling as HTMLElement
                    if (overlay) overlay.style.opacity = "1"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLImageElement
                    el.style.transform = "scale(1)"
                    const overlay = el.nextElementSibling as HTMLElement
                    if (overlay) overlay.style.opacity = "0"
                  }}
                />
                {/* Hover overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(26,29,35,.55)",
                  opacity: 0, transition: "opacity .3s ease",
                  display: "flex", flexDirection: "column",
                  justifyContent: "flex-end", padding: "14px 14px",
                }}>
                  <div style={{ fontSize: 9, color: "var(--gold-light)", letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 3, fontWeight: 500 }}>{photo.tag}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(13px,2vw,15px)", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{photo.caption}</div>
                </div>
                {/* Zoom */}
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(255,255,255,.18)", backdropFilter: "blur(4px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ZoomIn size={12} color="#fff" />
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p style={{ textAlign: "center", fontSize: 11, color: "var(--ink-faint)", marginTop: "clamp(20px,3vw,28px)" }}>
            Klik foto untuk memperbesar · Dokumentasi proyek nyata CV Nugraha Mutiara Abadi
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && current && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 500,
            background: "rgba(10,14,20,.94)",
            backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "clamp(16px,4vw,40px)",
            animation: "fadeIn .22s ease both",
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed", top: 20, right: 20, zIndex: 510,
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,.12)", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.22)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,.12)")}
          >
            <X size={18} color="#fff" />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            style={{
              position: "fixed", left: "clamp(10px,3vw,28px)", top: "50%", transform: "translateY(-50%)", zIndex: 510,
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,.1)", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,.1)")}
          >
            <ChevronLeft size={22} color="#fff" />
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            style={{
              position: "fixed", right: "clamp(10px,3vw,28px)", top: "50%", transform: "translateY(-50%)", zIndex: 510,
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,.1)", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,.1)")}
          >
            <ChevronRight size={22} color="#fff" />
          </button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 1000px)", width: "100%",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
            }}
          >
            <img
              src={current.src}
              alt={current.caption}
              style={{
                width: "100%", maxHeight: "75vh",
                objectFit: "contain", borderRadius: 10,
                boxShadow: "0 24px 80px rgba(0,0,0,.5)",
                animation: "scaleIn .28s var(--ease-out) both",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 5, fontWeight: 500 }}>{current.tag}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 600, color: "#fff" }}>{current.caption}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 8 }}>
                {currentIdx + 1} / {photos.length}
              </div>
            </div>

            {/* Dot nav */}
            <div style={{ display: "flex", gap: 6 }}>
              {photos.map(p => (
                <button key={p.id}
                  onClick={e => { e.stopPropagation(); setLightbox(p.id) }}
                  style={{
                    width: p.id === lightbox ? 20 : 6,
                    height: 6, borderRadius: 3,
                    background: p.id === lightbox ? "var(--gold)" : "rgba(255,255,255,.25)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "width .3s ease, background .3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from { opacity:0; transform:scale(.95); }
          to   { opacity:1; transform:scale(1); }
        }
      `}</style>
    </>
  )
}