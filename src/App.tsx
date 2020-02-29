import React from 'react';

import { Calendar } from './features/calendar/Calendar';
import { Transactions } from './features/transactions/Transactions';

import './App.css';

export const App = () => (
  <div style={{ margin: '32px auto', maxWidth: 1000 }}>
    <Calendar />
    <Transactions />
  </div>
);
