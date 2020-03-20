import { NumberInput, NumberInputProps, PseudoBoxProps, Tab } from '@chakra-ui/core';

import { LinkProps as RouterLinkProps } from 'react-router-dom';

declare module '@chakra-ui/core' {
  declare const NumberInput: React.FC<Omit<NumberInputProps, 'onChange'> & { onChange: (value: number) => void }>;

  declare const Tab: React.FC<PseudoBoxProps & React.ButtonHTMLAttributes<any> & RouterLinkProps>;
}
