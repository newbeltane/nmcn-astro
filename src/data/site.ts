/**
 * Central static site data. Content that is also editable through TinaCMS lives
 * in /content as markdown; this file holds structural defaults (org details,
 * navigation, placeholder media) used across pages.
 */

export const org = {
  name: 'National Mission Commission of Nepal',
  shortName: 'NMCN',
  tagline: 'Training & equipping saints to reach out the unreached',
  poBox: 'P.O. Box 8975, EPC-830',
  city: 'Kathmandu',
  country: 'NEPAL',
  govRegNo: '3344/068',
  panNo: '305265614',
  swcNo: '33418/068',
  phone: '+977 1 5591706',
  phoneHref: '+97715591706',
  email: 'nmcn2001@gmail.com',
  established: 2001,
  registered: 2011,
  bankName: 'Bank details available on request',
  accountName: 'National Mission Commission - Nepal',
  accountNumber: '1200 3801 5600 18',
  social: {
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    instagram: 'https://instagram.com/',
  },
};

/** Placeholder image helper — user replaces these via TinaCMS. */
export function ph(width: number, height: number, label = 'NMCN') {
  const text = encodeURIComponent(label);
  return `https://placehold.co/${width}x${height}/046bd2/ffffff/png?text=${text}`;
}

/** Navigation items — key maps to i18n nav.* strings; path is locale-less. */
export const navItems = [
  { key: 'home', path: '/' },
  { key: 'whoWeAre', path: '/who-we-are' },
  { key: 'whatWeDo', path: '/what-we-do' },
  { key: 'news', path: '/news' },
  { key: 'getInvolved', path: '/get-involved' },
  { key: 'donate', path: '/donate' },
  { key: 'contact', path: '/contact' },
] as const;

/** Footer quick links (subset). */
export const footerLinks = [
  { key: 'whoWeAre', path: '/who-we-are' },
  { key: 'whatWeDo', path: '/what-we-do' },
  { key: 'news', path: '/news' },
  { key: 'getInvolved', path: '/get-involved' },
  { key: 'donate', path: '/donate' },
  { key: 'contact', path: '/contact' },
] as const;

export interface Stat {
  value: number;
  suffix?: string;
  labelKey: string;
}

export const homeStats: Stat[] = [
  { value: 400, suffix: '+', labelKey: 'home.statsChildrenLabel' },
  { value: 135, labelKey: 'home.statsEnrolledLabel' },
  { value: 24, suffix: '+', labelKey: 'home.statsYearsLabel' },
  { value: 2, labelKey: 'home.statsCentresLabel' },
];

export interface Program {
  id: string;
  title: string;
  location: string;
  established: number;
  description: string;
  image: string;
}

export const programs: Program[] = [
  {
    id: 'kathmandu',
    title: 'Kathmandu Education Centre',
    location: 'Central Kathmandu',
    established: 2009,
    description:
      'Provides regular weekday classes and extracurricular activities that help children and families learn new skills and improve their lives. A holistic approach includes trips, shared meals and confidence-building.',
    image: ph(640, 400, 'Kathmandu+EC'),
  },
  {
    id: 'godawari',
    title: 'Godawari Education Centre',
    location: 'Godawari, ~10km from Kathmandu',
    established: 2014,
    description:
      'Opened in 2014 and supported by sponsor Orphan Outreach, this centre serves children from a slum area, bringing dreams within reach and fostering community unity across many ethnic groups.',
    image: ph(640, 400, 'Godawari+EC'),
  },
];

export interface Story {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const stories: Story[] = [
  {
    id: 'sushit',
    name: 'Sushit Gyaba',
    role: 'Godawari Education Centre',
    quote:
      "Sushit initially struggled academically and lacked confidence. GEC's after-school programme gave him guidance and encouragement, helping him pass his annual examinations, develop his interests in art and football, and form lasting friendships.",
    image: ph(200, 200, 'Sushit'),
  },
  {
    id: 'srijana',
    name: 'Srijana Chepang',
    role: 'Thapathali Tuition Center — Grade 9',
    quote:
      'Srijana lives in the Thapathali slum area and has attended the tuition centre since Grade 6. The centre supports her with homework, project assignments, academic improvement, and personal concerns.',
    image: ph(200, 200, 'Srijana'),
  },
];

export interface Fact {
  value: string;
  label: string;
}

export const nepalFacts: Fact[] = [
  { value: '142', label: 'Ethnic groups (inc. castes) — 2021 census' },
  { value: '25% → 3.6%', label: 'Poverty fell between 2011 and 2023' },
  { value: '29.6M', label: 'Population of Nepal' },
  { value: '23.8%', label: "Nepal's population that is urban (2024)" },
];

export interface Approach {
  title: string;
  description: string;
}

export const approaches: Approach[] = [
  {
    title: 'Vocational Training Programme',
    description: 'Empowering society with practical skills to sustain the community.',
  },
  {
    title: 'Networking with other agencies',
    description: 'Partnering with like-minded national and international agencies.',
  },
  {
    title: 'School for marginalised children',
    description: 'Education and scholarships for marginalised people groups.',
  },
  {
    title: 'Prison Ministry',
    description: 'Reaching and supporting those often overlooked by society.',
  },
  {
    title: 'Volunteering programme',
    description: 'Engaging national and international volunteers in social transformation.',
  },
];

export const values = [
  { title: 'Compassion', description: 'We serve the marginalised with dignity and care.' },
  { title: 'Empowerment', description: 'We equip people to build sustainable, independent futures.' },
  { title: 'Community', description: 'We foster unity across ethnic groups and backgrounds.' },
  { title: 'Integrity', description: 'We are transparent and accountable in all our work.' },
];
