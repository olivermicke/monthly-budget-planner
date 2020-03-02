import { Currency } from './types';

export const CURRENCIES: { [key in Currency['name']]: Currency } = {
  'Australian Dollar': {
    name: 'Australian Dollar',
    symbol: 'AU$',
  },
  'British Pound': {
    name: 'British Pound',
    symbol: '£',
  },
  'Canadian Dollar': {
    name: 'Canadian Dollar',
    symbol: 'CA$',
  },
  Euro: {
    name: 'Euro',
    symbol: '€',
  },
  'Japanese Yen': {
    name: 'Japanese Yen',
    symbol: '¥',
  },
  'Swiss Franc': { name: 'Swiss Franc', symbol: 'CHF' },
  'US Dollar': {
    name: 'US Dollar',
    symbol: '$',
  },
};
