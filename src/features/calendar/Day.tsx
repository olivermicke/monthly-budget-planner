import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  PseudoBox,
  Text,
} from '@chakra-ui/core';

import { Transaction } from '../transactions/Transaction';
import { TransactionTypeFlag } from '../transactions/TransactionTypeFlag';

import { selectDay } from '../calendar/calendarSlice';
import { selectCurrency, selectTransactionsForDay } from '../transactions/transactionsSlice';

import { Day as DayType } from './types';
import { RootState } from '../../store';

const memoizedSelectDay = createSelector(selectDay, day => day);
const memoizedSelectTransactionsForDay = createSelector(selectTransactionsForDay, transactions => transactions);

type Props = {
  dayNumber: DayType['number'];
};

export const Day: FunctionComponent<Props> = ({ dayNumber }: Props) => {
  const { balance, number } = useSelector((state: RootState) => memoizedSelectDay(state, dayNumber));
  const transactions = useSelector((state: RootState) => memoizedSelectTransactionsForDay(state, dayNumber));
  const currency = useSelector(selectCurrency);

  return (
    <Popover>
      <PopoverTrigger>
        <PseudoBox height='100%' key={number} minHeight={32} width='100%'>
          <Button bg='transparent' height='100%' width='100%'>
            {number}
            <TransactionTypeFlag transactions={transactions} />
          </Button>
        </PseudoBox>
      </PopoverTrigger>
      <PopoverContent minWidth='20rem' zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize='lg'>Day {number}</PopoverHeader>
        <PopoverBody>
          <Text>
            Balance:{' '}
            <Text as='b' color={balance >= 0 ? 'transaction.incoming' : 'transaction.outgoing'}>
              {balance.toFixed(2)}
              {currency.symbol}
            </Text>
          </Text>
          {transactions.length > 0 && <Divider />}
          {transactions.map(transaction => (
            <Transaction key={transaction.name} {...transaction} />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
