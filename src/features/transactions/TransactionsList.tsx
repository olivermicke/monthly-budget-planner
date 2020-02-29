import React from 'react';
import { useSelector } from 'react-redux';

import { selectTransactions } from './transactionsSlice';

export const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <>
      {Object.values(transactions).map(transaction => (
        <div
          key={transaction.name}
          style={{
            border: '1px solid gray',
            borderRadius: 8,
            padding: '0 8px 8px 8px'
          }}
        >
          <h3>
            {transaction.name}: {transaction.amount}€
          </h3>
          {transaction.dueDay && `Due on day ${transaction.dueDay}`}
          {transaction.isDistributedDaily &&
            'Is distributed over the whole month'}
        </div>
      ))}
    </>
  );
};
