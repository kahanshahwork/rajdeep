// ============================================================
// Rajdeep Jewellers — Content for the single-page story
// ============================================================

export const brand = {
  name: 'RAJDEEP',
  full: 'Rajdeep Jewellers',
  tagline: 'Stories you can wear',
  established: 'Kalol · Gujarat',
};

export const nav = [
  { label: 'Story', target: 'story' },
  { label: 'The Craft', target: 'craft' },
  { label: 'Collections', target: 'collections' },
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

export const visit = {
  eyebrow: 'Visit',
  title: 'Come sit with us',
  copy:
    'Every Rajdeep piece begins as a conversation. Visit our showroom in Kalol, and Manojbhai and the team will walk you through motifs, stones, and the story you want to carry.',
  image: 'images/hero-lotus.jpg',
  alt: 'A gold kundan ring worn with an antique bangle on a red saree',

  // Real showroom — Kalol, Gujarat
  store: {
    name: 'Rajdeep Jewellers',
    line1: '18, Shree Vaibhav Complex',
    line2: 'Khuni Bunglow Cross Road, Near GPO',
    city: 'Kalol, Gandhinagar, Gujarat 382721',
    phoneDisplay: '084889 95355',
    phoneDial: '+918488995355',
    hours: 'Mon – Sat · 10am – 8pm',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Rajdeep+Jewellers+Shree+Vaibhav+Complex+Kalol+382721',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=Rajdeep+Jewellers+Shree+Vaibhav+Complex+Khuni+Bunglow+Cross+Road+Kalol+382721',
    whatsapp: 'https://wa.me/918488995355?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20jewellery.',
    instagram: 'https://www.instagram.com/rajdeep_jewellers_/',
    // key-less embed of the address
    mapEmbed: 'https://maps.google.com/maps?q=Rajdeep%20Jewellers%20Shree%20Vaibhav%20Complex%20Khuni%20Bunglow%20Cross%20Road%20Kalol%20382721&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },

  contact: {
    phoneDisplay: '084889 95355',
    phoneDial: '+918488995355',
    hours: 'Mon – Sat · 10am – 8pm',
  },
  cta: 'Call the showroom',
};

export interface Review {
  quote: string;
  name: string;
  meta: string;
}

export const reviews = {
  eyebrow: 'Kind Words',
  title: 'What people love about us',
  ratingValue: '4.3',
  ratingCount: '78',
  items: [
    {
      quote:
        'Amazing experience, since 2006 till today — and looking forward to future shopping too. The most trustworthy and reliable shop for both gold and silver. Manojbhai and his staff are always pleasant and helpful in finding the latest patterns. I highly recommend this place.',
      name: 'Bhoomi Mehta',
      meta: 'Google Review',
    },
    {
      quote:
        'I really liked how trustworthy Rajdeep Jewellers is. They have the latest patterns, which are so pretty. I am very happy with my new jewellery.',
      name: 'Kajal Raval',
      meta: 'Google Review',
    },
    {
      quote:
        'You should definitely go to Rajdeep Jewellers. Their staff was so pleasant and very helpful — I loved my whole experience there.',
      name: 'Vishwajit Pandey',
      meta: 'Google Review',
    },
  ] as Review[],
};

export const footer = {
  tagline: 'Stories you can wear.',
  columns: [
    { heading: 'The House', links: ['Our Story', 'The Craft', 'Collections'] },
    { heading: 'Visit', links: ['Kalol Showroom', 'Get Directions', 'Call Us', 'Reviews'] },
  ],
  copyright: '© 2026 Rajdeep Jewellers · Kalol, Gujarat',
};
