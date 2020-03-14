import React, { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/core';

import { Transaction as TransactionType } from './types';

const hasIncomingNonDailyTransaction = (
  transactions: TransactionType[],
  transactionType: TransactionType['type'],
): boolean => transactions.some(({ dueDayNumber, type }) => dueDayNumber && type === transactionType);

type Props = {
  transactions: TransactionType[];
};

export const TransactionTypeFlag: FunctionComponent<Props> = ({ transactions }: Props) => {
  const hasIncomingNonDailyTransactions = hasIncomingNonDailyTransaction(transactions, 'incoming');
  const hasOutgoingNonDailyTransactions = hasIncomingNonDailyTransaction(transactions, 'outgoing');

  return (
    <Box display='flex' position='absolute' right='25%'>
      {hasIncomingNonDailyTransactions && <Text color='transaction.incoming'>|</Text>}
      {hasOutgoingNonDailyTransactions && <Text color='transaction.outgoing'>|</Text>}
    </Box>
  );
};
