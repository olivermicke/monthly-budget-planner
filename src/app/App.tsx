import React, { FunctionComponent } from 'react';
import { Box, CSSReset, DarkMode, Tab, TabList, TabPanel, TabPanels, Tabs, ThemeProvider } from '@chakra-ui/core';

import { Menu } from './Menu';
import { Calendar } from '../features/calendar/Calendar';
import { Transactions } from '../features/transactions/Transactions';

import { theme } from './theme';

export const App: FunctionComponent<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <DarkMode>
        <CSSReset />
        <Box minHeight='inherit' padding='2rem'>
          <Box
            display='flex'
            flexDirection='column'
            margin='0 auto'
            width={[
              '100%', // base
              '90%', // 480px upwards
              '90%', // 768px upwards
              '80%', // 992px upwards
              '70%',
            ]}
          >
            <Menu />
            <Tabs variant='enclosed' variantColor='tealVariant'>
              <TabList>
                <Tab>Calendar</Tab>
                <Tab>Transactions</Tab>
              </TabList>

              <TabPanels marginTop='2rem'>
                <TabPanel>
                  <Calendar />
                </TabPanel>
                <TabPanel>
                  <Transactions />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </DarkMode>
    </ThemeProvider>
  );
};
