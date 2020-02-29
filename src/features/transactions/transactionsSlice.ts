import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { Transaction } from './types';

export const slice = createSlice({
  name: 'transactions',
  initialState: {} as { [key: string]: Transaction },
  reducers: {
    add: (state, action: PayloadAction<Transaction>) => {
      const {
        amount,
        dueDay,
        isDistributedDaily,
        name,
        ...rest
      } = action.payload;

      // TODO: Round amount

      state[name] = {
        amount,
        dueDay: isDistributedDaily ? null : dueDay,
        isDistributedDaily,
        name,
        ...rest
      };
    }
    // TODO: add missing actions
    // edit:
    // remove:
  }
});

export const selectTransactions = (state: RootState) => state.transactions;

export const { add } = slice.actions;

export const reducer = slice.reducer;
