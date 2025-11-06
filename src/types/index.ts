export type TicketType = 'vendredi' | 'samedi' | 'dimanche' | 'lundi' | '4-jours';
export type ContestType = 'skate-freestyle' | 'musique';

export interface Reservation {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  ticket_type: TicketType;
  created_at: string;
}

export interface ContestRegistration {
  id: string;
  email: string;
  contest_type: ContestType;
  created_at: string;
}

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  created_at: string;
}
