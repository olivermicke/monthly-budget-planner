import React, { FunctionComponent } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
} from '@chakra-ui/core';

const TransactionForm = React.lazy(() =>
  import('./TransactionForm').then(({ TransactionForm }) => ({
    default: TransactionForm,
  })),
);

const TransactionsList = React.lazy(() =>
  import('./TransactionsList').then(({ TransactionsList }) => ({
    default: TransactionsList,
  })),
);

export const Transactions: FunctionComponent<{}> = () => (
  <React.Suspense fallback={null}>
    <Box display={['block', 'block', 'none']}>
      <Accordion allowMultiple allowToggle>
        <AccordionItem>
          <AccordionHeader>
            <Box flex='1' textAlign='left'>
              Add transaction
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel>
            <TransactionForm />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Box flex='1' textAlign='left'>
              List of transactions
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel>
            <TransactionsList />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>

    <Box display={['none', 'none', 'block']}>
      <Box display='flex' marginBottom='2rem'>
        <Box width='50%' paddingRight='6rem'>
          <TransactionForm />
        </Box>
        <Divider orientation='vertical' />
        <Box width='50%' paddingLeft='6rem'>
          <TransactionsList />
        </Box>
      </Box>
    </Box>
  </React.Suspense>
);
