import React from 'react';
import { useSelector } from 'react-redux';
import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/core';

import { selectCurrency } from './transactionsSlice';

import { Transaction as TransactionType } from './types';

export const Transaction = ({ amount, isDistributedDaily, name, type }: TransactionType) => {
  const currency = useSelector(selectCurrency);

  return (
    <Stat>
      <StatLabel>
        {name}
        {isDistributedDaily && (
          <Text as='span' color='gray.400'>
            {' '}
            [daily]
          </Text>
        )}
      </StatLabel>
      <StatHelpText alignItems='center' display='flex'>
        <StatArrow type={type === 'incoming' ? 'increase' : 'decrease'} />
        <StatNumber as='span'>
          {isDistributedDaily ? (amount / 31).toFixed(2) : amount}
          {currency.symbol}
        </StatNumber>
      </StatHelpText>
    </Stat>
  );
};
