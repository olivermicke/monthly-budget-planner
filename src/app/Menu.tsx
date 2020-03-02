import React from 'react';
import { Box, useColorMode } from '@chakra-ui/core';

import { Heading, IconButton } from '@chakra-ui/core';

export const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <menu style={{ margin: '0 0 3rem', padding: 0 }}>
      <Box alignItems='center' display='flex' justifyContent='space-between'>
        <Heading as='h1' fontSize={['xl', 'xl', '2xl', '3xl']}>
          Monthly Budget Planner
        </Heading>
        <Box display='flex' justifyContent='flex-end'>
          <IconButton
            aria-label='switch color mode'
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
            size='md'
            variant='ghost'
          />
        </Box>
      </Box>
    </menu>
  );
};
