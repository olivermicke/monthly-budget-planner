import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { range } from 'ramda';

import { recalculateBalance } from './calendarSlice-utils';
import { slice as transactionsSlice, Transactions } from '../transactions/transactionsSlice';

import { Day as DayType } from './types';
import { AppDispatch, RootState } from '../../store';

export const initialState = {
  config: {
    firstDayNumber: 1 as DayType['number'],
  },
  days: range(1, 32).reduce(
    (days, day) => ({
      ...days,
      [day]: {
        balance: 0.0,
        number: day,
      },
    }),
    {},
  ) as { [key: number]: DayType },
};

export const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changedFirstDayNumber(
      state,
      action: PayloadAction<{ nextFirstDayNumber: DayType['number']; transactions: Transactions }>,
    ) {
      const { nextFirstDayNumber, transactions } = action.payload;

      state.config.firstDayNumber = nextFirstDayNumber;

      const nextDays = recalculateBalance(state, transactions);
      state.days = nextDays;
    },
  },
  extraReducers: {
    [transactionsSlice.actions.addTransaction.type]: function(
      state: typeof initialState,
      action: ReturnType<typeof transactionsSlice.actions.addTransaction>,
    ) {
      const transaction = action.payload;
      const nextDays = recalculateBalance(state, { [transaction.name]: transaction });
      state.days = nextDays;
    },
  },
});

const thunks = {
  changeFirstDayNumber: function(dayNumber: DayType['number']) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
      dispatch(
        slice.actions.changedFirstDayNumber({
          nextFirstDayNumber: dayNumber,
          transactions: getState().transactions.transactions,
        }),
      );
    };
  },
};

export const { changeFirstDayNumber } = thunks;

export const selectDay = (state: RootState, dayNumber: DayType['number']) => state.calendar.days[dayNumber];
export const selectFirstDayNumber = (state: RootState) => state.calendar.config.firstDayNumber;

export const reducer = slice.reducer;
