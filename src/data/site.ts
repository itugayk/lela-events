// Lela Events — site genel bilgileri
export const site = {
  name: 'Lela Events',
  tagline: 'Düğün & Organizasyon Atölyesi',
  description:
    'Lela Events; düğün, nişan, kına ve kurumsal etkinliklerde zarif konsept tasarımı ve kusursuz planlama sunan bir organizasyon atölyesidir.',
  url: 'https://dugun.demo.dijifa.com',
  email: 'merhaba@lelaevents.com',
  phone: '+90 212 000 00 00',
  phoneHref: '+902120000000',
  whatsapp: '+90 532 000 00 00',
  address: 'Bağdat Caddesi No. 124, Kadıköy / İstanbul',
  instagram: 'https://instagram.com',
  pinterest: 'https://pinterest.com',
  founded: 2013,
};

export const nav = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Konseptler', href: '/konseptler' },
  { label: 'Gerçek Etkinlikler', href: '/etkinlikler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
];

// Unsplash görsel yardımcısı — responsive, optimize
export function img(id: string, w = 1200, q = 70) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}
