import { range } from 'ramda';

import { initialState, reducer, selectFirstDayNumber, slice, selectDay } from '../calendarSlice';
import { slice as transactionsSlice } from '../../transactions/transactionsSlice';

import { MOCKED_TRANSACTIONS } from '../../transactions/spec/mocks';

import { Day } from '../types';
import { RootState } from '../../../store';

describe('calendarSlice', () => {
  describe('addTransaction', () => {
    describe('handles transactions distributed over the month', () => {
      test('when first day is 1', () => {
        const payload = {
          amount: 310,
          dueDayNumber: null,
          isDistributedDaily: true,
          name: 'foo',
          type: 'incoming',
        } as const;

        const action = {
          payload,
          type: transactionsSlice.actions.addTransaction.type,
        };

        const nextState = reducer(initialState, action);
        const balances = Object.values(nextState.days).map(day => day.balance);

        expect(balances).toMatchSnapshot();
      });

      test('when first day is not 1', () => {
        const modifiedInitialState = {
          ...initialState,
          config: {
            ...initialState.config,
            firstDayNumber: 5,
          },
        };

        const payload = {
          amount: 310,
          dueDayNumber: null,
          isDistributedDaily: true,
          name: 'foo',
          type: 'incoming',
        } as const;

        const action = {
          payload,
          type: transactionsSlice.actions.addTransaction.type,
        };

        const nextState = reducer(modifiedInitialState, action);
        const balances = Object.values(nextState.days).map(day => day.balance);

        expect(balances).toMatchSnapshot();
      });
    });

    describe('handles transactions on a given day', () => {
      test('when first day is 1', () => {
        const payload = {
          amount: 10,
          dueDayNumber: 2,
          isDistributedDaily: false,
          name: 'foo',
          type: 'incoming',
        } as const;

        const action = {
          payload,
          type: transactionsSlice.actions.addTransaction.type,
        };

        const nextState = reducer(initialState, action);
        const balances = Object.values(nextState.days).map(day => day.balance);

        const expectedBalances = [0, ...new Array(30).fill(payload.amount)];

        expect(balances).toEqual(expectedBalances);
      });

      test('when first day is not 1 and firstDay > dueDay', () => {
        const modifiedInitialState = {
          ...initialState,
          config: {
            ...initialState.config,
            firstDayNumber: 5,
          },
        };

        const payload = {
          amount: 10,
          dueDayNumber: 2,
          isDistributedDaily: false,
          name: 'foo',
          type: 'incoming',
        } as const;

        const action = {
          payload,
          type: transactionsSlice.actions.addTransaction.type,
        };

        const nextState = reducer(modifiedInitialState, action);
        const balances = Object.values(nextState.days).map(day => day.balance);

        const expectedBalances = [0, ...new Array(3).fill(payload.amount), ...new Array(27).fill(0)];

        expect(balances).toEqual(expectedBalances);
      });

      test('when first day is not 1 and firstDay < dueDay', () => {
        const modifiedInitialState = {
          ...initialState,
          config: {
            ...initialState.config,
            firstDayNumber: 2,
          },
        };

        const payload = {
          amount: 10,
          dueDayNumber: 5,
          isDistributedDaily: false,
          name: 'foo',
          type: 'incoming',
        } as const;

        const action = {
          payload,
          type: transactionsSlice.actions.addTransaction.type,
        };

        const nextState = reducer(modifiedInitialState, action);
        const balances = Object.values(nextState.days).map(day => day.balance);

        const expectedBalances = [payload.amount, ...new Array(3).fill(0), ...new Array(27).fill(payload.amount)];

        expect(balances).toEqual(expectedBalances);
      });
    });
  });

  describe('changedFirstDayNumber', () => {
    it('changes calendar config', () => {
      const nextState = reducer(
        initialState,
        slice.actions.changedFirstDayNumber({ nextFirstDayNumber: 5, transactions: {} }),
      );
      const rootState = { calendar: nextState } as RootState;

      expect(selectFirstDayNumber(rootState)).toEqual(5);
    });

    it('recalculates balance of days', () => {
      const nextState = reducer(
        initialState,
        slice.actions.changedFirstDayNumber({ nextFirstDayNumber: 6, transactions: MOCKED_TRANSACTIONS }),
      );
      const rootState = { calendar: nextState } as RootState;

      const daysBalance: Day['balance'][] = range(1, 32).map(dayNumber => selectDay(rootState, dayNumber).balance);

      expect(daysBalance).toMatchSnapshot();
    });
  });
});
