import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { CURRENCIES } from './constants';

import { Currency, Transaction } from './types';
import { Day as DayType } from '../calendar/types';

type InitialState = {
  config: { currency: Currency };
  transactions: Transactions;
};

export type Transactions = {
  [key: string]: Transaction;
};

const initialState: InitialState = {
  config: {
    currency: {
      name: 'Euro',
      symbol: '€',
    },
  },
  transactions: {},
};

export const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      const { name, ...rest } = action.payload;

      state.transactions[name] = {
        name,
        ...rest,
      };
    },
    changeCurrency: (state, action: PayloadAction<Currency['name']>) => {
      state.config.currency = CURRENCIES[action.payload];
    },
    deleteTransaction: (state, action: PayloadAction<Transaction>) => {
      delete state.transactions[action.payload.name];
    },
  },
});

export const selectCurrency = (state: RootState) => state.transactions.config.currency;
export const selectTransactions = (state: RootState) => state.transactions.transactions;
export const selectTransactionsForDay = (state: RootState, dayNumber: DayType['number']) =>
  Object.values(state.transactions.transactions).filter(
    ({ dueDayNumber, isDistributedDaily }) => isDistributedDaily || dueDayNumber === dayNumber,
  );

export const { addTransaction, changeCurrency, deleteTransaction } = slice.actions;

export const reducer = slice.reducer;
