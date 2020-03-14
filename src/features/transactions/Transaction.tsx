import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/core';

import { deleteTransaction, selectCurrency } from './transactionsSlice';

import { Transaction as TransactionType } from './types';

type Props = {
  isDeletable?: boolean;
} & TransactionType;

const SECONDARY_COLOR = 'gray.400';

export const Transaction: FunctionComponent<Props> = ({ isDeletable, ...transactionProps }: Props) => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);

  const memoizedDeleteTransaction = useCallback(() => {
    dispatch(deleteTransaction(transactionProps));
  }, [dispatch, transactionProps]);

  const { amount, dueDayNumber, isDistributedDaily, name, type } = transactionProps;

  return (
    <Stat>
      <StatLabel>
        <Text as='span'>
          {name}
          <Text as='span' color={SECONDARY_COLOR} marginLeft={1}>
            {dueDayNumber ? `[day ${dueDayNumber}]` : '[daily]'}
          </Text>
          {isDeletable && (
            <IconButton
              aria-label='delete transaction'
              bottom={'1px'}
              icon='delete'
              marginLeft={2}
              onClick={memoizedDeleteTransaction}
              size='xs'
              variant='ghost'
              color={SECONDARY_COLOR}
            />
          )}
        </Text>
      </StatLabel>
      <StatHelpText alignItems='center' display='flex'>
        <StatArrow type={type === 'incoming' ? 'increase' : 'decrease'} />
        <StatNumber as='span'>
          {isDistributedDaily ? (amount / 31).toFixed(2) : amount.toFixed(2)}
          {currency.symbol}
        </StatNumber>
      </StatHelpText>
    </Stat>
  );
};
