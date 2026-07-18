// ============================================================
// Rajdeep Jewellers — Content for the single-page story
// ============================================================

export const brand = {
  name: 'RAJDEEP',
  full: 'Rajdeep Jewellers',
  tagline: 'Stories you can wear',
  established: 'Est. 1992 · Mumbai',
};

export const nav = [
  { label: 'Story', target: 'story' },
  { label: 'The Craft', target: 'craft' },
  { label: 'Collections', target: 'collections' },
  { label: 'Catalogue', target: 'catalogue' },
  { label: 'Visit', target: 'visit' },
];

export const hero = {
  eyebrow: 'Heritage Indian Jewellery · Since 1992',
  titleTop: 'Every heirloom',
  titleEm: 'holds a name',
  titleBottom: 'before it holds a stone.',
  copy:
    'For over thirty years, we have made jewellery slowly — by hand, in gold, meant to be worn at weddings and then passed down like a story told again and again.',
  image: 'images/portrait-lotus-necklace.jpg',
  imageAlt: 'A woman holding a lotus, wearing a kundan necklace and pearl earrings',
  video: 'videos/hero-mobile.mp4',
  videoPoster: 'videos/hero-mobile-poster.jpg',
  videoDesktop: 'videos/hero-desktop.mp4',
  videoDesktopPoster: 'videos/hero-desktop-poster.jpg',
  scrollCue: 'Scroll to begin',
};

export const story = {
  eyebrow: 'The House',
  title: 'One bench. Two hands. A promise.',
  paras: [
    'Rajdeep began in 1992 with a single workbench and a belief that has not changed since: jewellery should be made to be inherited, not replaced.',
    'What leaves our atelier is never only gold and stone. It carries the patience of the maker, the memory of the family it was made for, and the quiet weight of being kept.',
  ],
  image: 'images/heirloom-box.jpg',
  imageAlt: 'Hands opening an antique box of heirloom jewellery beside old family photographs',
  year: '1992',
};

export const craft = {
  eyebrow: 'The Craft',
  introTitle: 'The long way is the only way',
  introCopy:
    'A single piece can pass through many pairs of hands before it reaches yours. Scroll sideways through the making.',
  hint: 'Scroll →',
  steps: [
    {
      no: '01',
      title: 'The eye',
      copy:
        'It starts with judgement. Each stone is read by hand under the loupe — chosen for depth of colour and life, never merely for size.',
      image: 'images/artisan-bw.jpg',
      alt: 'A master craftsman examining a jewelled piece through a loupe',
    },
    {
      no: '02',
      title: 'The setting',
      copy:
        'Stones are set the old way, one at a time, in the kundan tradition. Pure gold is pressed around each by hand until it holds fast for a lifetime.',
      image: 'images/ring-medallion.jpg',
      alt: 'A floral-medallion gold ring worn against a sandstone pillar',
    },
    {
      no: '03',
      title: 'The detail',
      copy:
        'Peacocks, lotuses, temple arches — motifs drawn from centuries of Indian craft are worked into the metal until the piece has a voice of its own.',
      image: 'images/peacock-chandbali.jpg',
      alt: 'An antique peacock chandbali earring with emerald detailing',
    },
    {
      no: '04',
      title: 'The finish',
      copy:
        'The last hours are the slowest. Every surface is burnished until it holds warm light the way evening holds gold.',
      image: 'images/jhumka-glow.jpg',
      alt: 'Gold jhumka earrings glowing against silk beside a diya',
    },
  ],
};

export const collections = {
  eyebrow: 'The Collections',
  title: 'Turn through the house',
  copy: 'Drag, scroll, or use the arrow keys to move through our signature pieces.',
  // Items for the CircularGallery (image + label)
  items: [
    { image: '/images/portrait-lotus-necklace.jpg', text: 'Kundan Bridal' },
    { image: '/images/peacock-chandbali.jpg', text: 'Peacock Chandbali' },
    { image: '/images/temple-necklace-linen.jpg', text: 'Lakshmi Temple' },
    { image: '/images/jhumka-glow.jpg', text: 'Pearl Jhumka' },
    { image: '/images/ring-medallion.jpg', text: 'Medallion Ring' },
    { image: '/images/temple-set-heirloom.jpg', text: 'Temple Heirloom' },
    { image: '/images/portrait_gold_necklace.jpg', text: 'Emerald Choker' },
    { image: '/images/story_portrait.jpg', text: 'The Bride' },
  ],
};

export interface Leaf {
  folio: string;
  name: string;
  line: string;
  note: string;
  image: string;
  alt: string;
}

export const catalogue = {
  eyebrow: 'The Catalogue',
  title: 'An heirloom book',
  copy: 'A few pieces worth keeping. Turn the pages.',
  leaves: [
    {
      folio: 'Plate I',
      name: 'The Lakshmi Necklace',
      line: 'Temple · 22k gold',
      note:
        'The goddess seated on a lotus, flanked by peacocks, cast in pure gold by the lost-wax method and finished by hand. A piece made for the first day of a marriage — and every anniversary after.',
      image: 'images/temple-necklace-linen.jpg',
      alt: 'Lakshmi temple necklace and earrings laid on linen',
    },
    {
      folio: 'Plate II',
      name: 'The Long Temple Haar',
      line: 'Heirloom · 22k gold, pearl',
      note:
        'A long Lakshmi haar in the 19th-century style, its pendant crowned with peacocks and dropped with river pearls. Weighty, ceremonial, and made to be handed down.',
      image: 'images/temple-set-heirloom.jpg',
      alt: 'Antique long temple necklace with jhumka earrings',
    },
    {
      folio: 'Plate III',
      name: 'Peacock Chandbali',
      line: 'Bridal · gold, emerald, pearl',
      note:
        'Two peacocks meet at the centre in green enamel and kundan, framed by a crescent of pearls. The earring that turns a bride’s profile into a portrait.',
      image: 'images/peacock-chandbali.jpg',
      alt: 'Antique peacock chandbali earring with emeralds',
    },
    {
      folio: 'Plate IV',
      name: 'The Medallion Ring',
      line: 'Statement · gold, ruby, emerald',
      note:
        'A design that unfolds like a floral medallion — ruby petals, emerald leaves, and a pearl border, worn like a small piece of architecture on the hand.',
      image: 'images/ring-medallion.jpg',
      alt: 'A floral medallion gold ring against sandstone',
    },
  ] as Leaf[],
};

export const visit = {
  eyebrow: 'Visit',
  title: 'Come sit with us',
  copy:
    'Every Rajdeep piece begins as a conversation. Book a private appointment at the atelier, and we’ll walk you through motifs, stones, and the story you want to carry.',
  image: 'images/hero-lotus.jpg',
  alt: 'A gold kundan ring worn with an antique bangle on a red saree',
  studios: [
    { city: 'Mumbai', role: 'Flagship Atelier', address: 'Kala Ghoda, Fort' },
    { city: 'Delhi', role: 'Studio', address: 'Sundar Nagar' },
    { city: 'Bangalore', role: 'Gallery', address: 'Vittal Mallya Road' },
  ],
  contact: {
    phone: '+91 22 4000 1992',
    email: 'atelier@rajdeepjewellers.in',
    hours: 'Tue – Sun · 11am – 7pm',
  },
  cta: 'Request an appointment',
};

export const footer = {
  tagline: 'Stories you can wear, since 1992.',
  columns: [
    { heading: 'The House', links: ['Our Story', 'The Craft', 'Collections', 'Catalogue'] },
    { heading: 'Visit', links: ['Mumbai Atelier', 'Delhi Studio', 'Bangalore Gallery', 'Book Appointment'] },
  ],
  copyright: '© 2026 Rajdeep Jewellers · Mumbai',
};
