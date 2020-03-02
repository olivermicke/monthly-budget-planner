import React, { useState } from 'react';
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
const DEFAULT_AMOUNT = 31;
const DEFAULT_DUE_DAY_NUMBER = 1;
const DEFAULT_IS_DISTRIBUTED_DAILY = false;
const DEFAULT_TYPE: Transaction['type'] = 'outgoing';

const formItemProps = {
  marginTop: ['1rem', '1rem', '2rem'],
};

export const TransactionForm = () => {
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
        onSubmit={event => {
          event.preventDefault();

          dispatch(
            addTransaction({
              amount: type === 'incoming' ? amount : -Math.abs(amount),
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
          <FormLabel>Name:</FormLabel>
          <Input
            isRequired
            // @ts-ignore
            onChange={({ target }) => {
              setName(target.value);
            }}
            placeholder='e.g. "Electricity Bill"'
            type='text'
            value={name}
          />
        </FormControl>
        <FormControl {...formItemProps}>
          <FormLabel>Type:</FormLabel>
          <Select
            onChange={({ target }) => {
              setType(target.value as Transaction['type']);
            }}
            value={type}
          >
            <option value={'incoming'}>Incoming</option>
            <option value={'outgoing'}>Outgoing</option>
          </Select>
        </FormControl>
        <FormControl {...formItemProps}>
          <FormLabel>Amount in {currency.symbol}:</FormLabel>
          <Box display='flex'>
            <NumberInput
              flex={1}
              marginRight='2rem'
              max={Number.MAX_SAFE_INTEGER}
              min={0.01}
              // @ts-ignore
              onChange={(amount: number) => {
                setAmount(amount);
              }}
              value={amount}
            >
              <NumberInputField />
            </NumberInput>
            <FormHelperText whiteSpace='nowrap'>e.g. 119.99</FormHelperText>
          </Box>
        </FormControl>
        <FormControl {...formItemProps}>
          <FormLabel>Due on day:</FormLabel>
          <Select
            isDisabled={isDistributedDaily}
            onChange={({ target }) => {
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
          <FormLabel>Distribute over whole month:</FormLabel>
          <Checkbox
            isChecked={isDistributedDaily}
            onChange={({ target }) => {
              setIsDistributedDaily(target.checked);
            }}
            variantColor='teal'
          />
        </FormControl>
        <Button type='submit' variant='outline' variantColor='teal' {...formItemProps}>
          Add
        </Button>
      </form>
    </Box>
  );
};
