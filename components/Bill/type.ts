import { ReactNode } from 'react';

export interface BillResponse {
  bill_id: number;
  bill_name: string;
  represent_proposer: string;
  public_proposer: string[];
  summary: string;
  propose_date: string;
}

export interface BillProps extends BillResponse {
  divide: boolean;
  children?: ReactNode;
}
