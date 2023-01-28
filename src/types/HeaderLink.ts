import { MouseEvent } from 'react';

export interface HeaderLink {
  id: string;
  props: {
    to: string;
    label: string;
    disabled?: boolean;
    type?: 'link' | 'button';
    action?: (e: MouseEvent<HTMLElement>) => void;
  };
}
