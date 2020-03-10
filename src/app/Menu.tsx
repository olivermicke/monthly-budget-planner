import React from 'react';

import { Heading } from '@chakra-ui/core';

export const Menu = () => {
  return (
    <menu style={{ margin: '0 0 3rem', padding: 0 }}>
      <Heading as='h1' fontSize={['xl', 'xl', '2xl', '3xl']}>
        Monthly Budget Planner
      </Heading>
    </menu>
  );
};
