// Süreç adımları, rakamlar, tedarikçi/mekan ağı

export interface ProcessStep {
  no: string;
  title: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  {
    no: '01',
    title: 'İlk Görüşme',
    text: 'Sizi, hikayenizi ve hayalinizdeki günü dinliyoruz. Beklentilerinizi, bütçenizi ve tarzınızı birlikte netleştiriyoruz.',
  },
  {
    no: '02',
    title: 'Konsept Tasarımı',
    text: 'Size özel moodboard, renk paleti ve çiçek dili hazırlıyoruz. Etkinliğinizin görsel hikayesi burada şekilleniyor.',
  },
  {
    no: '03',
    title: 'Planlama & Koordinasyon',
    text: 'Mekan, tedarikçi, takvim ve bütçe yönetimi… Tüm operasyonu uçtan uca kuruyor, her detayı titizlikle takip ediyoruz.',
  },
  {
    no: '04',
    title: 'Etkinlik Günü',
    text: 'Gün boyu sahadayız. Siz anın tadını çıkarırken, görünmeyen bir el gibi her şeyi kusursuzca yönetiyoruz.',
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 640, suffix: '+', label: 'Organize Edilen Etkinlik' },
  { value: 12, suffix: ' yıl', label: 'Deneyim' },
  { value: 120, suffix: '+', label: 'Mekan & Tedarikçi Ağı' },
  { value: 98, suffix: '%', label: 'Çift Memnuniyeti' },
];

// Mekan / tedarikçi ağı — logolar yerine isim rozetleri (demo)
export const partners: string[] = [
  'Çırağan Sarayı',
  'Four Seasons',
  'Sapanca Lake',
  'Zorlu PSM',
  'Esma Sultan',
  'Adile Sultan',
  'Les Ottomans',
  'Sait Halim Paşa',
  'Mandarin Bodrum',
  'Haliç Kongre',
];
