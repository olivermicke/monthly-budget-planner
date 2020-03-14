import { map, range } from 'ramda';

// Reference: https://github.com/ramda/ramda/wiki/Cookbook#create-an-incrementing-or-decrementing-range-of-numbers-with-a-step
export const rangeStep = (start: number, step: number, stop: number): number[] =>
  map(n => start + step * n, range(0, (1 + (stop - start) / step) >>> 0));
