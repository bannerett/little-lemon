export interface Booking {
  id: number;
  username: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  contactType: 'email' | 'phone';
  contact: string;
  additionalInfo?: string;
}
