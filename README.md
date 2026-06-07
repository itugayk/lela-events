# Lela Events — Düğün & Organizasyon Demo

Zarif, duygusal bir **düğün & organizasyon (event) firması** demo sitesi.
Astro + Tailwind CSS v4 + GSAP ile kurulmuş, premium portfolyo showcase.

> Demo · `dugun.demo.dijifa.com`

## Özellikler

- 🎨 Şampanya/altın + adaçayı yeşili palet, romantik serif (Cormorant) tipografi
- ✨ GSAP yumuşak reveal, ışık partikülleri, smooth scroll (Lenis)
- 🖼️ Konsept galerisi: kategori filtreleme + masonry + lightbox
- 📝 Çok adımlı "Teklif Al" formu (etkinlik → tarih → kişi → bütçe → iletişim) — demo validasyonlu
- 💬 Müşteri (çift) yorum carousel'i
- 📊 Animasyonlu rakam sayaçları, zarif süreç timeline'ı
- 🔍 SEO: JSON-LD `EventPlanning`, sitemap, OpenGraph

## Sayfalar

Ana Sayfa · Hizmetler · Konseptler/Galeri · Gerçek Etkinlikler · Hakkımızda · Teklif Al/İletişim

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ üretir
npm run preview    # build çıktısını önizle
```

## Docker

```bash
docker build -t lela-events .
docker run -p 8080:80 lela-events   # http://localhost:8080
```

Çok aşamalı build: Node ile statik site üretilir, ardından nginx ile servis edilir.

## Teknoloji

| Katman | Araç |
|--------|------|
| Framework | Astro 5 (statik) |
| Stil | Tailwind CSS v4 |
| Animasyon | GSAP + ScrollTrigger, Lenis |
| Servis | nginx (alpine) |
