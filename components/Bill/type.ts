import { ReactNode } from 'react';

export interface BillProps {
  id: number;
  name: string;
  people: string;
  content: string;
  date: string;
  divide: boolean;
  children?: ReactNode;
}
