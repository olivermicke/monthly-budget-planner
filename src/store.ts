import { combineReducers, configureStore } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer
});
