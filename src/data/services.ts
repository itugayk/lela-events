import { img } from './site';

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  icon: string; // basit svg path tanımlayıcısı
}

export const services: Service[] = [
  {
    slug: 'dugun',
    title: 'Düğün Organizasyonu',
    short: 'Hayalinizdeki günü, en ince ayrıntısına kadar.',
    description:
      'Mekan seçiminden çiçek tasarımına, sahne kurgusundan müzik akışına kadar düğün gününüzün her anını uçtan uca planlıyoruz. Siz yalnızca anın tadını çıkarın.',
    features: ['Mekan & konsept tasarımı', 'Çiçek ve masa süslemeleri', 'Sahne, ışık & ses', 'Gün koordinasyonu'],
    image: img('1519741497674-611481863552', 1100),
    icon: 'rings',
  },
  {
    slug: 'nisan',
    title: 'Nişan & Söz',
    short: 'İki ailenin buluştuğu zarif bir başlangıç.',
    description:
      'Samimi ve şık bir atmosferde, ailelerinizi bir araya getiren nişan ve söz törenleri için butik konseptler hazırlıyoruz.',
    features: ['Butik mekan kurulumu', 'Pasta & ikram tasarımı', 'Renk paleti danışmanlığı', 'Fotoğraf köşesi'],
    image: img('1522673607200-164d1b6ce486', 1100),
    icon: 'heart',
  },
  {
    slug: 'kina',
    title: 'Kına Gecesi',
    short: 'Geleneği modern bir zarafetle buluşturuyoruz.',
    description:
      'Anadolu geleneklerini çağdaş bir estetikle yeniden yorumladığımız, ışıltılı ve duygusal kına geceleri tasarlıyoruz.',
    features: ['Otantik & modern konseptler', 'Kına alayı koreografisi', 'Tematik dekor', 'Canlı müzik koordinasyonu'],
    image: img('1583939003579-730e3918a45a', 1100),
    icon: 'flame',
  },
  {
    slug: 'kurumsal',
    title: 'Kurumsal Etkinlik',
    short: 'Markanızı yansıtan profesyonel organizasyonlar.',
    description:
      'Lansman, gala, bayi toplantısı ve ödül törenleri… Markanızın hikayesini sahneye taşıyan kurumsal etkinlikler üretiyoruz.',
    features: ['Lansman & gala', 'Sahne & teknik prodüksiyon', 'Marka deneyimi tasarımı', 'Catering & protokol'],
    image: img('1540575467063-178a50c2df87', 1100),
    icon: 'building',
  },
  {
    slug: 'konsept-tasarim',
    title: 'Konsept Tasarım',
    short: 'Her etkinliğe özel, sıfırdan bir görsel dil.',
    description:
      'Renk paleti, çiçek dili, davetiye ve mekan akışını bütünleştiren özgün konsept tasarımları geliştiriyoruz. Her detay aynı hikayeyi anlatsın diye.',
    features: ['Moodboard & renk paleti', 'Davetiye & basılı tasarım', 'Çiçek dili kurgusu', 'Mekan akış planı'],
    image: img('1535254973040-607b474cb50d', 1100),
    icon: 'palette',
  },
];
