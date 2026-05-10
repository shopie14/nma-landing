# NMA Landing Page — CV Nugraha Mutiara Abadi

Landing page profesional untuk CV Nugraha Mutiara Abadi, dibangun dengan Next.js 14, Tailwind CSS, dan TypeScript.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline styles (navy & gold theme)
- **Language**: TypeScript
- **Font**: Playfair Display (heading) + DM Sans (body)
- **Icons**: Lucide React

## Setup

```bash
# 1. Buat project Next.js baru
npx create-next-app@latest nma-landing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd nma-landing

# 2. Install dependencies tambahan
npm install lucide-react clsx tailwind-merge

# 3. Salin semua file dari folder ini ke dalam project

# 4. Jalankan dev server
npm run dev
```

## Struktur File

```
src/
├── app/
│   ├── layout.tsx          ← root layout + SEO metadata
│   ├── page.tsx            ← assembly semua sections
│   └── globals.css         ← font imports + custom CSS vars
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← sticky navbar dengan mobile menu
│   │   └── Footer.tsx      ← footer dengan link & kontak
│   └── sections/
│       ├── Hero.tsx        ← hero + animated particle canvas
│       ├── Services.tsx    ← 8 layanan dalam grid card
│       ├── About.tsx       ← profil + visi misi
│       ├── Legalitas.tsx   ← NIB + data legal perusahaan
│       ├── Team.tsx        ← tim + CTA
│       └── Contact.tsx     ← form → WhatsApp + info kontak
├── lib/
│   └── utils.ts
└── constants/
    └── company.ts          ← SEMUA data NMA di sini
```

## Kustomisasi

Semua data perusahaan ada di **`src/constants/company.ts`**. Untuk update:
- Nama, kontak, alamat → edit field di `COMPANY`
- Tambah/kurang layanan → edit array `services`
- Data tim → edit array `team`
- Legalitas → edit array `legalitas`

## Deploy ke Vercel

```bash
git init && git add . && git commit -m "init: NMA landing page"
# Push ke GitHub lalu connect di vercel.com → auto deploy
```