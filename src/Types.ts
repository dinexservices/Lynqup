
export interface IP {
  id: string;
  name: string;
  genre: string;
  format: string;
  promise: string;
  scale: string;
  availability: string;
  description: string;
  image: string;
}

export interface PastEdition {
  id: string;
  eventName: string;
  campusCity: string;
  type: string;
}

export interface Metric {
  label: string;
  value: string;
}

export type NavItem = {
  label: string;
  href: string;
};
