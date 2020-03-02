import { Day } from '../calendar/types';

export type Currency =
  | {
      name: 'Australian Dollar';
      symbol: 'AU$';
    }
  | {
      name: 'British Pound';
      symbol: '£';
    }
  | {
      name: 'Canadian Dollar';
      symbol: 'CA$';
    }
  | {
      name: 'Euro';
      symbol: '€';
    }
  | {
      name: 'Japanese Yen';
      symbol: '¥';
    }
  | {
      name: 'Swiss Franc';
      symbol: 'CHF';
    }
  | {
      name: 'US Dollar';
      symbol: '$';
    };

export type Transaction = {
  amount: number;
  dueDayNumber: Day['number'] | null;
  isDistributedDaily: boolean;
  name: string;
  type: 'incoming' | 'outgoing';
};
