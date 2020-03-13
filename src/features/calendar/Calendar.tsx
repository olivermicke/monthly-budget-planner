import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { range } from 'ramda';

import { Box, FormControl, FormLabel, Select, SimpleGrid } from '@chakra-ui/core';

import { Day } from './Day';

import { changeFirstDayNumber, selectFirstDayNumber } from './calendarSlice';

import { Day as DayType } from './types';

const createMonth = (firstDayNumber: DayType['number']): DayType['number'][] => [
  ...range(firstDayNumber, 32),
  ...range(1, firstDayNumber),
];

export const Calendar = () => {
  const firstDayNumber = useSelector(selectFirstDayNumber);
  const dispatch = useDispatch();

  const month = createMonth(firstDayNumber);

  return (
    <Box margin='0 0 3rem'>
      <Box>
        <Box display='flex' flexDirection={['row']}>
          <FormControl alignItems='center' display='flex' margin='0 0 2rem'>
            <FormLabel whiteSpace='nowrap'>First day of month:</FormLabel>
            <Select
              onChange={({ target }) => {
                const nextDayNumber: DayType['number'] = +target.value;

                if (isNaN(nextDayNumber)) {
                  return;
                }

                dispatch(changeFirstDayNumber(nextDayNumber));
              }}
              value={firstDayNumber}
            >
              {range(1, 32).map(dayNumber => (
                <option key={dayNumber} value={dayNumber}>
                  {dayNumber}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <SimpleGrid columns={[3, 3, 7]}>
        {month.map(dayNumber => (
          <Day dayNumber={dayNumber} key={dayNumber} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
