# ─────────────────────────────────────────────
# Lela Events — çok aşamalı build (Astro → nginx)
# ─────────────────────────────────────────────

# 1) Build aşaması
FROM node:22-alpine AS build
WORKDIR /app

# Bağımlılıkları önce kopyala (katman önbelleği)
COPY package*.json ./
RUN npm ci

# Kaynakları kopyala ve statik siteyi üret
COPY . .
RUN npm run build

# 2) Servis aşaması — nginx ile statik dosyalar
FROM nginx:1.27-alpine AS runtime

# Varsayılan nginx konfigürasyonunu değiştir
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Üretilen statik çıktıyı kopyala
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Basit sağlık kontrolü
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
