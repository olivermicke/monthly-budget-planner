import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { range } from 'ramda';

import { Day as DayType } from './types';

import {
  changeDaysInMonth,
  changeFirstDay,
  selectCalendar
} from './calendarSlice';

const createMonth = ({
  firstDay,
  daysInMonth
}: {
  firstDay: DayType;
  daysInMonth: number;
}): DayType[] | null =>
  firstDay <= daysInMonth
    ? [...range(firstDay, daysInMonth + 1), ...range(1, firstDay)]
    : null;

export const Calendar = () => {
  const { daysInMonth, firstDay } = useSelector(selectCalendar);
  const dispatch = useDispatch();

  const month = createMonth({ firstDay, daysInMonth });

  return (
    <>
      <label>
        Start month at day:
        <input
          max='31'
          min='1'
          onChange={({ target }) => {
            dispatch(changeFirstDay(+target.value));
          }}
          type='number'
          value={firstDay}
        />
      </label>
      <label>
        Number of days:
        <input
          max='31'
          min='28'
          onChange={({ target }) => {
            dispatch(changeDaysInMonth(+target.value));
          }}
          type='number'
          value={daysInMonth}
        />
      </label>

      <DaysWrapper>
        {month ? (
          month.map(day => <Day key={day}>{day}</Day>)
        ) : (
          <p>
            ERROR: First day of month cannot be higher than the total number of
            days.
          </p>
        )}
      </DaysWrapper>
    </>
  );
};

const DaysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  flex-basis: calc(100% / 7);
`;
