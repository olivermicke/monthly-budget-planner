import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { range } from 'ramda';

import { slice as transactionsSlice } from '../transactions/transactionsSlice';

import { Day as DayType } from './types';
import { RootState } from '../../store';

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
    changeFirstDayNumber(state, action: PayloadAction<DayType['number']>) {
      state.config.firstDayNumber = action.payload;
    },
  },
  extraReducers: {
    [transactionsSlice.actions.addTransaction.type]: addTransaction,
  },
});

const calculateSortedDayNumbers = (firstDay: number, dueDay: number | null): number[] => {
  if (firstDay === 1) {
    return range(dueDay ?? 1, 32);
  }

  if (dueDay === null) {
    return [...range(firstDay, 32), ...range(1, firstDay)];
  }

  if (dueDay < firstDay) {
    return range(dueDay, firstDay);
  } else {
    return [...range(dueDay, 32), ...range(1, firstDay)];
  }
};

export function addTransaction(
  state: typeof initialState,
  action: ReturnType<typeof transactionsSlice.actions.addTransaction>,
) {
  const { firstDayNumber } = state.config;
  const { amount, dueDayNumber, isDistributedDaily, type } = action.payload;

  const fixedAmount = type === 'incoming' ? amount : -Math.abs(amount);

  if (isDistributedDaily) {
    const sortedDayNumbers = calculateSortedDayNumbers(firstDayNumber, dueDayNumber);

    const dailyAmount = +(fixedAmount / 31).toFixed(2);

    sortedDayNumbers.forEach((dayNumber, index) => {
      state.days[dayNumber].balance += dailyAmount * (index + 1);
    });
    return;
  }

  if (dueDayNumber) {
    const sortedDayNumbers = calculateSortedDayNumbers(firstDayNumber, dueDayNumber);

    sortedDayNumbers.forEach(dayNumber => {
      state.days[dayNumber].balance += fixedAmount;
    });
    return;
  }
}

export const selectDay = (state: RootState, dayNumber: DayType['number']) => state.calendar.days[dayNumber];
export const selectFirstDayNumber = (state: RootState) => state.calendar.config.firstDayNumber;

export const { changeFirstDayNumber } = slice.actions;

export const reducer = slice.reducer;
