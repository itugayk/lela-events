import { img } from './site';

// Gerçek etkinlikler — referans çift hikayeleri
export interface RealEvent {
  slug: string;
  couple: string;
  type: string;
  location: string;
  date: string;
  guests: number;
  image: string;
  cover: string;
  story: string;
  palette: string[];
  gallery: string[];
}

export const events: RealEvent[] = [
  {
    slug: 'elif-can',
    couple: 'Elif & Can',
    type: 'Kır Düğünü',
    location: 'Sapanca Gölü',
    date: 'Eylül 2024',
    guests: 220,
    image: img('1519741497674-611481863552', 1000),
    cover: img('1519741497674-611481863552', 1600),
    story:
      'Göl kıyısında, gün batımıyla başlayan bir düğün. Adaçayı yeşili ve şampanya tonlarında, doğanın içinde zarif bir kutlama tasarladık. Bin adet mum ve asılı çiçek bulutu geceyi sarmaladı.',
    palette: ['#8a9a7b', '#d9c4a0', '#f7f3ec'],
    gallery: [img('1519741497674-611481863552', 800), img('1606216794074-735e91aa2c92', 800), img('1532712938310-34cb3982ef74', 800)],
  },
  {
    slug: 'zeynep-mert',
    couple: 'Zeynep & Mert',
    type: 'Şehir Düğünü',
    location: 'Çırağan Sarayı, İstanbul',
    date: 'Haziran 2024',
    guests: 350,
    image: img('1535254973040-607b474cb50d', 1000),
    cover: img('1535254973040-607b474cb50d', 1600),
    story:
      'Boğaz manzarasına karşı, kristal ve beyaz orkidelerle bezeli görkemli bir salon düğünü. Klasik zarafeti modern ışık tasarımıyla buluşturduk.',
    palette: ['#fdfbf7', '#d9c4a0', '#c9ad7f'],
    gallery: [img('1535254973040-607b474cb50d', 800), img('1460978812857-470ed1c77af0', 800), img('1606216794074-735e91aa2c92', 800)],
  },
  {
    slug: 'derya-kaan',
    couple: 'Derya & Kaan',
    type: 'Sahil Düğünü',
    location: 'Bodrum',
    date: 'Ağustos 2023',
    guests: 180,
    image: img('1464366400600-7168b8af9bc3', 1000),
    cover: img('1464366400600-7168b8af9bc3', 1600),
    story:
      'Ege’nin maviliğine karşı, zeytin dalları ve keten dokularla kurguladığımız bohem-şık bir sahil düğünü. Yalın ama derinden zarif.',
    palette: ['#8a9a7b', '#f7f3ec', '#adbd96'],
    gallery: [img('1464366400600-7168b8af9bc3', 800), img('1469371670807-013ccf25f16a', 800), img('1532712938310-34cb3982ef74', 800)],
  },
  {
    slug: 'naz-emre',
    couple: 'Naz & Emre',
    type: 'Nişan Töreni',
    location: 'Bebek, İstanbul',
    date: 'Mayıs 2024',
    guests: 90,
    image: img('1522673607200-164d1b6ce486', 1000),
    cover: img('1522673607200-164d1b6ce486', 1600),
    story:
      'İki ailenin samimi buluşması için tasarladığımız, pudra ve altın tonlarında butik bir nişan. Akşam ışığında parıldayan zarif bir başlangıç.',
    palette: ['#ebdcc2', '#d9c4a0', '#fdfbf7'],
    gallery: [img('1522673607200-164d1b6ce486', 800), img('1583939003579-730e3918a45a', 800), img('1460978812857-470ed1c77af0', 800)],
  },
];
