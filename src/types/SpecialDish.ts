import { MouseEvent, ReactElement } from 'react';

export interface SpecialDish {
  id: string;
  name: string;
  imgSrc: string;
  heading: string;
  price: number;
  description: string;
  icon?: ReactElement;
  onAdd?: (e: MouseEvent<HTMLButtonElement>) => void;
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  count?: number;
}
