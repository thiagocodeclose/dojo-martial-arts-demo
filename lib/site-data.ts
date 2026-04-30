// lib/site-data.ts
export const studioInfo = {
  name: 'Bushido Dojo',
  tagline: 'Discipline. Respect. Strength.',
  headline: 'FORGE YOUR CHARACTER. MASTER THE ARTS.',
  subheadline: "Chicago's premier traditional martial arts school. Karate, Judo, Taekwondo, and more — for all ages.",
  cta_primary: 'Start Free Trial',
  cta_secondary: 'View Programs',
  address: '2440 N Lincoln Ave, Chicago, IL 60614',
  phone: '(312) 555-0234',
  email: 'info@bushidodojo.com',
  instagram: 'https://instagram.com/bushidodojo',
  facebook: 'https://facebook.com/bushidodojo',
  hours: {
    'Mon–Fri': '9:00 AM – 9:00 PM',
    'Saturday': '9:00 AM – 3:00 PM',
    'Sunday': 'Closed',
  },
};

export const stats = [
  { value: '500+', label: 'Active Students' },
  { value: '30+', label: 'Years in Chicago' },
  { value: '12', label: 'Black Belt Instructors' },
  { value: '5', label: 'Disciplines' },
];

export const programs = [
  { name: 'Karate', ages: 'Ages 5+', belt_system: true, description: 'Traditional Shotokan Karate — striking, katas, discipline. Belt promotion every 3 months.' },
  { name: 'Judo', ages: 'Ages 8+', belt_system: true, description: 'Olympic-style throws and grappling. Competition preparation for all skill levels.' },
  { name: 'Taekwondo', ages: 'Ages 5+', belt_system: true, description: 'Korean kicking art with a focus on speed, flexibility, and mental discipline.' },
  { name: 'Kung Fu', ages: 'Ages 10+', belt_system: false, description: 'Traditional Shaolin-influenced Kung Fu — forms, weapons, and self-defense applications.' },
  { name: 'Aikido', ages: 'Ages 14+', belt_system: true, description: 'The way of harmonious spirit. Redirection, throws, and joint locks. Great for self-defense.' },
  { name: 'Kids Martial Arts', ages: 'Ages 4–7', belt_system: true, description: 'Focus, discipline, and coordination for young students. Structured, safe, and incredibly fun.' },
];

export const instructors = [
  {
    name: 'Sensei Hiroshi Tanaka',
    rank: '7th Dan Black Belt — Shotokan Karate',
    bio: 'Trained in Osaka for 15 years under Hirokazu Kanazawa. 30 years of teaching in the US.',
    image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=400&q=80',
  },
  {
    name: 'Sensei Maria Gutierrez',
    rank: '5th Dan Black Belt — Taekwondo',
    bio: 'Pan-American Championship medalist. Focuses on youth development and competition training.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  },
  {
    name: 'Sensei David Chen',
    rank: '6th Dan Black Belt — Judo',
    bio: 'Former Olympic Judo team coach. Author of "The Ground Game" — a bestselling judo manual.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
  },
];

export const beltPath = [
  { belt: 'White', color: '#FFFFFF', description: 'Beginner. Blank slate. The journey begins.' },
  { belt: 'Yellow', color: '#FFD700', description: 'First knowledge — like sunlight on the path.' },
  { belt: 'Orange', color: '#FF8C00', description: 'Growing strength and expanding awareness.' },
  { belt: 'Green', color: '#228B22', description: 'Technique takes root and begins to grow.' },
  { belt: 'Blue', color: '#1565C0', description: 'Deeper understanding, like the sky above.' },
  { belt: 'Brown', color: '#8B4513', description: 'Ripening. Almost ready. Roots run deep.' },
  { belt: 'Black', color: '#111111', description: 'Mastery and the beginning of true learning.' },
];

export const testimonials = [
  { name: 'Kevin O.', text: 'My son has been training here since age 6. He\'s now 14, a brown belt, and has more focus and confidence than any kid I know. Sensei Tanaka is the real deal.', rating: 5 },
  { name: 'Lisa M.', text: 'I joined at 42 thinking I was too old. Two years in, I have my green belt in Aikido and I\'ve lost 25 lbs. Best decision of my adult life.', rating: 5 },
  { name: 'James R.', text: 'The Judo program here is world-class. Sensei Chen has coached multiple regional champions. The mat culture is supportive and challenging at the same time.', rating: 5 },
  { name: 'Ana S.', text: 'We enrolled all three of our kids. The structure, the respect, the community — it\'s everything we were looking for. They\'ve all improved in school too.', rating: 5 },
];

export const pricing = [
  {
    name: 'Single Art',
    price: '$119',
    period: '/month',
    features: ['1 martial art', 'Unlimited classes', 'Belt testing included', 'Free uniform', 'Family discounts'],
    cta: 'Enroll Now',
    highlight: false,
  },
  {
    name: 'Multi-Art',
    price: '$169',
    period: '/month',
    features: ['2 martial arts', 'Unlimited classes', 'Belt testing included', 'Competition prep', 'Priority scheduling'],
    cta: 'Best Value',
    highlight: true,
  },
  {
    name: 'Full Access',
    price: '$219',
    period: '/month',
    features: ['All 5 disciplines', 'Open mat access', 'Private lessons (2/mo)', 'Competition entry fees', 'Instructor mentorship'],
    cta: 'Go All In',
    highlight: false,
  },
];
