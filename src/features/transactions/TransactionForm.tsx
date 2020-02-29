import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectDaysInMonth } from '../calendar/calendarSlice';
import { add } from './transactionsSlice';

const DEFAULT_NAME = '';
const DEFAULT_AMOUNT = 10.5;
const DEFAULT_DUE_DAY = 1;
const DEFAULT_IS_DISTRIBUTED_DAILY = false;
const DEFAULT_IS_OUTGOING = true;

const INCOMING = 'incoming';
const OUTGOING = 'outgoing';

export const TransactionForm = () => {
  const daysInMonth = useSelector(selectDaysInMonth);

  const [name, setName] = useState(DEFAULT_NAME);
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [dueDay, setDueDay] = useState(DEFAULT_DUE_DAY);
  const [isDistributedDaily, setIsDistributedDaily] = useState(
    DEFAULT_IS_DISTRIBUTED_DAILY
  );
  const [isOutgoing, setIsOutgoing] = useState(DEFAULT_IS_OUTGOING);
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        dispatch(
          add({
            amount,
            dueDay,
            isDistributedDaily,
            isOutgoing,
            name
          })
        );

        setAmount(DEFAULT_AMOUNT);
        setDueDay(DEFAULT_DUE_DAY);
        setIsDistributedDaily(DEFAULT_IS_DISTRIBUTED_DAILY);
        setIsOutgoing(DEFAULT_IS_OUTGOING);
        setName(DEFAULT_NAME);
      }}
    >
      <p>Add a transaction</p>
      <InputContainer>
        <label>
          Name:
          <input
            onChange={({ target }) => {
              setName(target.value);
            }}
            placeholder='e.g. "Electricity Bill"'
            required
            type='text'
            value={name}
          />
        </label>
        <label>
          <select
            onChange={({ target }) => {
              debugger;
              setIsOutgoing(target.value === OUTGOING);
            }}
            value={isOutgoing ? OUTGOING : INCOMING}
          >
            <option value={INCOMING}>Incoming</option>
            <option value={OUTGOING}>Outgoing</option>
          </select>
        </label>
        <label>
          Amount:
          <input
            max={Number.MAX_SAFE_INTEGER}
            min={0.01}
            onChange={({ target }) => {
              setAmount(+target.value);
            }}
            step='any'
            type='number'
          />
        </label>
        <label>
          Due on day:
          <input
            disabled={isDistributedDaily}
            max={daysInMonth}
            min='1'
            onChange={({ target }) => {
              setDueDay(+target.value);
            }}
            required={!isDistributedDaily}
            type='number'
            value={dueDay}
          />
        </label>
        <label>
          Distribute over whole month:
          <input
            onChange={({ target }) => {
              setIsDistributedDaily(target.checked);
            }}
            type='checkbox'
          />
        </label>
        <input type='submit' value='Add' />
      </InputContainer>
    </form>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
