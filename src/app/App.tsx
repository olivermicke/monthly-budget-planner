import React, { FunctionComponent } from 'react';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Box, CSSReset, DarkMode, Tab, TabList, TabPanels, Tabs, ThemeProvider } from '@chakra-ui/core';

import { Menu } from './Menu';
import { Calendar } from '../features/calendar/Calendar';
import { Transactions } from '../features/transactions/Transactions';

import { theme } from './theme';

const ARIA_TABS = 'tabs';
const ARIA_CALENDAR_TAB = 'tabs-calendar-tab';
const ARIA_TRANSACTIONS_TAB = 'tabs-transactions-tab';

const CALENDAR_PATH = '/calendar';
const TRANSACTIONS_PATH = '/transactions';

export const App: FunctionComponent<{}> = () => {
  const { pathname } = useLocation();

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
              <TabList id={ARIA_TABS}>
                <Tab
                  aria-controls={ARIA_TABS}
                  aria-selected={pathname === CALENDAR_PATH}
                  as={Link}
                  id={ARIA_CALENDAR_TAB}
                  tabIndex={0}
                  to={CALENDAR_PATH}
                >
                  Calendar
                </Tab>
                <Tab
                  aria-controls={ARIA_TABS}
                  aria-selected={pathname === TRANSACTIONS_PATH}
                  as={Link}
                  id={ARIA_TRANSACTIONS_TAB}
                  tabIndex={0}
                  to={TRANSACTIONS_PATH}
                >
                  Transactions
                </Tab>
              </TabList>

              <TabPanels marginTop='2rem'>
                <Switch>
                  <Route exact path={CALENDAR_PATH}>
                    <Calendar />
                  </Route>
                  <Route exact path={TRANSACTIONS_PATH}>
                    <Transactions />
                  </Route>
                  <Redirect from='/' to={CALENDAR_PATH} />
                </Switch>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </DarkMode>
    </ThemeProvider>
  );
};
