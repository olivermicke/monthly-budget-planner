import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, FormLabel, Select } from '@chakra-ui/core';

import { changeCurrency, selectCurrency } from './transactionsSlice';

import { CURRENCIES } from './constants';

import { Currency } from './types';

export const TransactionsConfig: FunctionComponent<{}> = () => {
  const currency = useSelector(selectCurrency);
  const dispatch = useDispatch();

  return (
    <FormControl marginTop={['1rem', '1rem', '2rem']}>
      <FormLabel>Currency:</FormLabel>
      <Select
        onChange={({ target }): void => {
          dispatch(changeCurrency(target.value as Currency['name']));
        }}
        value={currency.name}
      >
        {Object.values(CURRENCIES).map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
