import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { Day } from './types';

export const slice = createSlice({
  name: 'calendar',
  initialState: {
    daysInMonth: 31,
    firstDay: 1 as Day
  },
  reducers: {
    changeDaysInMonth(state, action: PayloadAction<number>) {
      state.daysInMonth = action.payload;
    },
    changeFirstDay(state, action: PayloadAction<Day>) {
      state.firstDay = action.payload;
    }
  }
});

export const selectCalendar = (state: RootState) => state.calendar;
export const selectDaysInMonth = (state: RootState) =>
  state.calendar.daysInMonth;

export const { changeDaysInMonth, changeFirstDay } = slice.actions;

export const reducer = slice.reducer;
