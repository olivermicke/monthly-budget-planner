import { Transactions } from '../transactionsSlice';

export const MOCKED_TRANSACTIONS: Transactions = {
  pay: {
    amount: 3010,
    dueDayNumber: 5,
    isDistributedDaily: false,
    name: 'pay',
    type: 'incoming',
  },
  rent: {
    amount: 600,
    dueDayNumber: 8,
    isDistributedDaily: false,
    name: 'rent',
    type: 'outgoing',
  },
  'cost of living': {
    amount: 310,
    dueDayNumber: null,
    isDistributedDaily: true,
    name: 'cost of living',
    type: 'outgoing',
  },
};
