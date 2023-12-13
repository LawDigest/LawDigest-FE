import { ReactNode } from 'react';

export interface BillProps {
  bill_id: number;
  name: string;
  people: string;
  content: string;
  date: string;
  is_represent: boolean;
  children?: ReactNode;
}
