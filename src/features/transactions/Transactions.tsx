import React from 'react';

import { TransactionForm } from './TransactionForm';
import { TransactionsList } from './TransactionsList';

export const Transactions = () => (
  <>
    <hr />
    <h3>Transactions</h3>
    <TransactionsList />
    <TransactionForm />
  </>
);
