export interface Booking {
  id: number;
  username: string;
  date: string;
  time: string;
  persons: number;
  contactType: 'email' | 'phone';
  contact: string;
  additionalInfo?: string;
}
