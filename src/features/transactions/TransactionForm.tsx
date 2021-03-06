import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { range } from 'ramda';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/core';

import { addTransaction, selectCurrency } from './transactionsSlice';

import { Transaction } from './types';

const DEFAULT_NAME = '';
const DEFAULT_AMOUNT = 10;
const DEFAULT_DUE_DAY_NUMBER = 1;
const DEFAULT_IS_DISTRIBUTED_DAILY = false;
const DEFAULT_TYPE: Transaction['type'] = 'outgoing';

const ARIA_TRANSACTION_AMOUNT_INPUT = 'transaction-amount-input';
const ARIA_TRANSACTION_DISTRIBUTION_CHECKBOX = 'transaction-distribution-checkbox';
const ARIA_TRANSACTION_DUE_DAY_SELECT = 'transaction-due-day-select';
const ARIA_TRANSACTION_NAME_INPUT = 'transaction-name-input';
const ARIA_TRANSACTION_TYPE_SELECT = 'transaction-type-select';

const formItemProps = {
  marginTop: ['1rem', '1rem', '2rem'],
};

export const TransactionForm: FunctionComponent<{}> = () => {
  const currency = useSelector(selectCurrency);
  const dispatch = useDispatch();

  const [name, setName] = useState(DEFAULT_NAME);
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [dueDayNumber, setDueDayNumber] = useState(DEFAULT_DUE_DAY_NUMBER);
  const [isDistributedDaily, setIsDistributedDaily] = useState(DEFAULT_IS_DISTRIBUTED_DAILY);
  const [type, setType] = useState<Transaction['type']>(DEFAULT_TYPE);

  return (
    <Box marginBottom={['2rem', '2rem', 0]}>
      <form
        onSubmit={(event): void => {
          event.preventDefault();

          const roundedAmount = +amount.toFixed(2);

          dispatch(
            addTransaction({
              amount: type === 'incoming' ? roundedAmount : -Math.abs(roundedAmount),
              dueDayNumber: isDistributedDaily ? null : dueDayNumber,
              isDistributedDaily,
              name,
              type,
            }),
          );

          setAmount(DEFAULT_AMOUNT);
          setDueDayNumber(DEFAULT_DUE_DAY_NUMBER);
          setIsDistributedDaily(DEFAULT_IS_DISTRIBUTED_DAILY);
          setName(DEFAULT_NAME);
          setType(DEFAULT_TYPE);
        }}
      >
        <Heading as='h3' display={['none', 'none', 'block']} size='md'>
          Add transaction
        </Heading>
        <FormControl {...formItemProps}>
          <FormLabel htmlFor={ARIA_TRANSACTION_NAME_INPUT}>Name:</FormLabel>
          <Input
            id={ARIA_TRANSACTION_NAME_INPUT}
            isRequired
            // @ts-ignore
            onChange={({ target }): void => {
              setName(target.value);
            }}
            placeholder='e.g. "Electricity Bill"'
            type='text'
            value={name}
          />
        </FormControl>
        <FormControl {...formItemProps}>
          <FormLabel htmlFor={ARIA_TRANSACTION_TYPE_SELECT}>Type:</FormLabel>
          <Select
            id={ARIA_TRANSACTION_TYPE_SELECT}
            onChange={({ target }): void => {
              setType(target.value as Transaction['type']);
            }}
            value={type}
          >
            <option value={'incoming'}>Incoming</option>
            <option value={'outgoing'}>Outgoing</option>
          </Select>
        </FormControl>
        <FormControl {...formItemProps}>
          <FormLabel htmlFor={ARIA_TRANSACTION_AMOUNT_INPUT}>Amount in {currency.symbol}:</FormLabel>
          <Box display='flex'>
            <NumberInput
              flex={1}
              marginRight='2rem'
              max={Number.MAX_SAFE_INTEGER}
              min={0.01}
              onChange={(amount: number): void => {
                setAmount(amount);
              }}
              value={amount}
            >
              <NumberInputField id={ARIA_TRANSACTION_AMOUNT_INPUT} />
            </NumberInput>
            <FormHelperText whiteSpace='nowrap'>e.g. 119.99</FormHelperText>
          </Box>
        </FormControl>
        <FormControl {...formItemProps}>
          <FormLabel htmlFor={ARIA_TRANSACTION_DUE_DAY_SELECT}>Due on day:</FormLabel>
          <Select
            id={ARIA_TRANSACTION_DUE_DAY_SELECT}
            isDisabled={isDistributedDaily}
            onChange={({ target }): void => {
              const nextDayNumber: NonNullable<Transaction['dueDayNumber']> = +target.value;

              if (isNaN(nextDayNumber)) {
                return;
              }

              setDueDayNumber(nextDayNumber);
            }}
            value={dueDayNumber}
          >
            {range(1, 32).map(dayNumber => (
              <option key={dayNumber} value={dayNumber}>
                {dayNumber}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl display='flex' {...formItemProps}>
          <FormLabel htmlFor={ARIA_TRANSACTION_DISTRIBUTION_CHECKBOX}>Distribute over whole month:</FormLabel>
          <Checkbox
            id={ARIA_TRANSACTION_DISTRIBUTION_CHECKBOX}
            isChecked={isDistributedDaily}
            onChange={({ target }): void => {
              setIsDistributedDaily(target.checked);
            }}
            variantColor='tealVariant'
          />
        </FormControl>
        <Button type='submit' variant='outline' variantColor='tealVariant' {...formItemProps}>
          Add
        </Button>
      </form>
    </Box>
  );
};
