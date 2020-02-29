import { Day } from '../calendar/types';

export type Transaction = {
  amount: number;
  dueDay: Day | null;
  isDistributedDaily: boolean;
  isOutgoing: boolean;
  name: string;
};
