import { img } from './site';

export interface Testimonial {
  couple: string;
  event: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    couple: 'Elif & Can',
    event: 'Sapanca Kır Düğünü',
    quote:
      'Hayalimizdeki günü kelimelere döktüğümüzde, Lela ekibi onu bizden bile iyi anladı. Gün boyunca hiçbir şeyi düşünmek zorunda kalmadık; sadece birbirimize baktık.',
    avatar: img('1469371670807-013ccf25f16a', 200, 60),
  },
  {
    couple: 'Zeynep & Mert',
    event: 'Çırağan Düğünü',
    quote:
      '350 kişilik bir düğünün bu kadar zahmetsiz hissettirmesi inanılmazdı. Her detay tam yerindeydi. Misafirlerimiz hâlâ o geceyi konuşuyor.',
    avatar: img('1522673607200-164d1b6ce486', 200, 60),
  },
  {
    couple: 'Derya & Kaan',
    event: 'Bodrum Sahil Düğünü',
    quote:
      'Zeytin dallarının arasında, denize karşı… Tam istediğimiz sadelikte ama bir o kadar zarif. Lela, bütçemize de hayallerimize de saygı duydu.',
    avatar: img('1464366400600-7168b8af9bc3', 200, 60),
  },
  {
    couple: 'Naz & Emre',
    event: 'Bebek Nişan Töreni',
    quote:
      'İki aileyi bu kadar sıcak bir atmosferde buluşturdukları için minnettarız. Konsept tasarımı tam bize göreydi, sanki yıllardır bizi tanıyorlardı.',
    avatar: img('1460978812857-470ed1c77af0', 200, 60),
  },
];
