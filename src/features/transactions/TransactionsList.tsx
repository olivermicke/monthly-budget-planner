import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/core';

import { Transaction } from './Transaction';
import { TransactionsConfig } from './TransactionsConfig';

import { selectTransactions } from './transactionsSlice';

const boxProps = { marginTop: ['1rem', '1rem', '2rem'] };

export const TransactionsList: FunctionComponent<{}> = () => {
  const transactions = useSelector(selectTransactions);

  const transactionsValues = Object.values(transactions);

  return (
    <Box>
      <Heading as='h3' display={['none', 'none', 'block']} size='md'>
        Transactions
      </Heading>

      <TransactionsConfig />

      {transactionsValues.length === 0 ? (
        <Box marginTop='2rem' {...boxProps}>
          No transactions added yet.
        </Box>
      ) : (
        transactionsValues.map(transaction => (
          <Box key={transaction.name} marginTop='2rem'>
            <Transaction isDeletable {...transaction} />
          </Box>
        ))
      )}
    </Box>
  );
};
