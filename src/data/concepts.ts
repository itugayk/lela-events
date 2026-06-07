import { img } from './site';

export type ConceptCategory = 'dugun' | 'nisan' | 'kurumsal';

export interface Concept {
  id: string;
  title: string;
  category: ConceptCategory;
  categoryLabel: string;
  location: string;
  image: string;
  // masonry yükseklik ipucu: 'tall' | 'std'
  ratio: 'tall' | 'std';
}

export const categoryFilters: { value: ConceptCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'dugun', label: 'Düğün' },
  { value: 'nisan', label: 'Nişan' },
  { value: 'kurumsal', label: 'Kurumsal' },
];

export const concepts: Concept[] = [
  { id: 'c1', title: 'Adaçayı Bahçesi', category: 'dugun', categoryLabel: 'Düğün', location: 'Sapanca', image: img('1519741497674-611481863552', 900), ratio: 'tall' },
  { id: 'c2', title: 'Şampanya & Tül', category: 'dugun', categoryLabel: 'Düğün', location: 'Çırağan, İstanbul', image: img('1606216794074-735e91aa2c92', 900), ratio: 'std' },
  { id: 'c3', title: 'Akşam Işıltısı', category: 'nisan', categoryLabel: 'Nişan', location: 'Bebek, İstanbul', image: img('1522673607200-164d1b6ce486', 900), ratio: 'std' },
  { id: 'c4', title: 'Beyaz Orkide', category: 'nisan', categoryLabel: 'Nişan', location: 'Nişantaşı', image: img('1460978812857-470ed1c77af0', 900), ratio: 'tall' },
  { id: 'c5', title: 'Marka Lansmanı', category: 'kurumsal', categoryLabel: 'Kurumsal', location: 'Maslak, İstanbul', image: img('1540575467063-178a50c2df87', 900), ratio: 'std' },
  { id: 'c6', title: 'Gala Gecesi', category: 'kurumsal', categoryLabel: 'Kurumsal', location: 'Zorlu PSM', image: img('1511795409834-ef04bbd61622', 900), ratio: 'tall' },
  { id: 'c7', title: 'Zeytin Dalı', category: 'dugun', categoryLabel: 'Düğün', location: 'Çeşme', image: img('1464366400600-7168b8af9bc3', 900), ratio: 'std' },
  { id: 'c8', title: 'Pudra & Altın', category: 'nisan', categoryLabel: 'Nişan', location: 'Kadıköy', image: img('1583939003579-730e3918a45a', 900), ratio: 'std' },
  { id: 'c9', title: 'Kristal Salon', category: 'dugun', categoryLabel: 'Düğün', location: 'Four Seasons', image: img('1535254973040-607b474cb50d', 900), ratio: 'tall' },
  { id: 'c10', title: 'Ödül Töreni', category: 'kurumsal', categoryLabel: 'Kurumsal', location: 'Haliç Kongre', image: img('1505236858219-8359eb29e329', 900), ratio: 'std' },
  { id: 'c11', title: 'Bahar Buketi', category: 'nisan', categoryLabel: 'Nişan', location: 'Emirgan', image: img('1532712938310-34cb3982ef74', 900), ratio: 'tall' },
  { id: 'c12', title: 'Sahil Akşamı', category: 'dugun', categoryLabel: 'Düğün', location: 'Bodrum', image: img('1469371670807-013ccf25f16a', 900), ratio: 'std' },
];
