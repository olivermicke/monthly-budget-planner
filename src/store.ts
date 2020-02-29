import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as calendarReducer } from './features/calendar/calendarSlice';
import { reducer as transactionsReducer } from './features/transactions/transactionsSlice';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  calendar: calendarReducer,
  transactions: transactionsReducer
});

export const store = configureStore({
  reducer: rootReducer
});
