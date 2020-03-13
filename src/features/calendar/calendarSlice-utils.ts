import { createNextState as produce } from '@reduxjs/toolkit';
import { range } from 'ramda';

import { initialState } from './calendarSlice';
import { Transactions } from '../transactions/transactionsSlice';

export const recalculateBalance = (
  calendarState: typeof initialState,
  transactions: Transactions,
): typeof initialState.days => {
  const {
    config: { firstDayNumber },
  } = calendarState;

  return produce(calendarState.days, days => {
    Object.values(transactions).forEach(transaction => {
      const { amount, dueDayNumber, isDistributedDaily, type } = transaction;

      const dayNumbers = sortedDayNumbers(firstDayNumber, dueDayNumber);
      const fixedAmount = type === 'incoming' ? amount : -Math.abs(amount);

      if (isDistributedDaily) {
        const dailyAmount = +(fixedAmount / 31).toFixed(2);

        dayNumbers.forEach((dayNumber, index) => {
          days[dayNumber].balance += dailyAmount * (index + 1);
        });
        return;
      }

      dayNumbers.forEach(dayNumber => {
        days[dayNumber].balance += fixedAmount;
      });
      return;
    });
  });
};

const sortedDayNumbers = (firstDay: number, dueDay: number | null): number[] => {
  if (firstDay === 1) {
    return range(dueDay ?? 1, 32);
  }

  if (dueDay === null) {
    return [...range(firstDay, 32), ...range(1, firstDay)];
  }

  if (dueDay < firstDay) {
    return range(dueDay, firstDay);
  } else {
    return [...range(dueDay, 32), ...range(1, firstDay)];
  }
};
