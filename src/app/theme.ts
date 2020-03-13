import { theme as chakraTheme, DefaultTheme } from '@chakra-ui/core';
import { mergeDeepRight } from 'ramda';

import { rangeStep } from '../utils/ramda-utils';

type TealVariant = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Transaction = {
  incoming: string;
  outgoing: string;
};

type Theme = DefaultTheme & {
  colors: {
    tealVariant: TealVariant;
    transaction: Transaction;
  };
};

const TEAL_VARIANT = chakraTheme.colors.cyan[500];

export const theme: Theme = mergeDeepRight(chakraTheme, {
  colors: {
    tealVariant: rangeStep(100, 100, 900).reduce(
      (acc, val) => ({
        ...acc,
        [val]: TEAL_VARIANT,
      }),
      {} as TealVariant,
    ),
    transaction: {
      incoming: chakraTheme.colors.green[500],
      outgoing: chakraTheme.colors.red[500],
    },
  },
});
