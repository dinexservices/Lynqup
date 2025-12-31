
import { IP, PastEdition, Metric, NavItem } from './Types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About Lynqup', href: 'about' },
  { label: 'Our IPs', href: 'ips' },
  { label: 'Campus Partnership Model', href: 'partnership' },
  { label: 'Past Editions', href: 'editions' },
  { label: 'Collaborations & Partners', href: 'collaborations' },
  { label: 'Contact', href: 'contact' },
];

export const IPS: IP[] = [
  {
    id: 'ragex',
    name: 'RageX',
    genre: 'EDM Campus Experience',
    format: 'Night Event',
    promise: 'High-energy, mainstage-level production with top-tier electronic artists.',
    scale: '1500 - 5000+ Students',
    availability: 'Campus / Tour',
    description: 'The flagship EDM IP designed for massive institutional impact.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'graveyard',
    name: 'Graveyard',
    genre: 'Underground / Dark EDM Concept',
    format: 'Night Event',
    promise: 'Techno and Deep House aesthetics with industrial visual design.',
    scale: '500 - 1500 Students',
    availability: 'Special Edition',
    description: 'A niche, immersive underground experience for true music enthusiasts.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8a19740c1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hack-adhyaay',
    name: 'Hack-Adhyaay',
    genre: 'Hackathon IP',
    format: '24–48 hr Festival',
    promise: 'Innovation-driven builder experience with industry mentors and sponsor tracks.',
    scale: '200 - 500 Participants',
    availability: 'Campus / Multi-College',
    description: 'The premier innovation IP fostering builder culture on campuses.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'astitwa',
    name: 'Astitwa',
    genre: 'Technology & Innovation Festival',
    format: 'Multi-Day Festival',
    promise: 'Convergence of culture, technology, and futuristic youth trends.',
    scale: '2000+ Students',
    availability: 'Tour / Special Edition',
    description: 'A holistic celebration of student innovation and future-tech.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

export const METRICS: Metric[] = [
  { label: '25+ campus editions executed', value: '25+' },
  { label: '50,000+ student footfall across IPs', value: '50k+' },
  { label: 'Multiple recurring college partnerships', value: 'Recurring' },
  { label: 'Multi-genre IP portfolio (Music + Tech)', value: 'Multi-genre' },
];

export const PAST_EDITIONS: PastEdition[] = [
  { id: '1', eventName: 'RageX Pune Edition', campusCity: 'Symbiosis, Pune', type: 'Music Festival' },
  { id: '2', eventName: 'Hack-Adhyaay v2', campusCity: 'IIT Delhi', type: 'Innovation Hackathon' },
  { id: '3', eventName: 'Astitwa Tech Summit', campusCity: 'BITS Pilani', type: 'Tech Festival' },
  { id: '4', eventName: 'Graveyard Underground', campusCity: 'Bangalore Campus', type: 'Boutique EDM' },
  { id: '5', eventName: 'RageX North Tour', campusCity: 'Chandigarh University', type: 'Campus Tour' },
];
