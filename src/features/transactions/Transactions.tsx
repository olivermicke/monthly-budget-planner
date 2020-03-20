import React, { FunctionComponent, Suspense } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
} from '@chakra-ui/core';
import { useWindowWidth } from '@react-hook/window-size';

import { convertWidthToEM } from '../../utils/dom-utils';

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

const ACCORDION_BREAKPONT_EM = 62;

export const Transactions: FunctionComponent<{}> = () => {
  const widthPX = useWindowWidth(0, { leading: true, wait: 250 });
  const widthEM = convertWidthToEM(widthPX);
  const shouldShowAccordion = widthEM <= ACCORDION_BREAKPONT_EM;

  return (
    <Suspense fallback={null}>
      {shouldShowAccordion ? (
        <>
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
        </>
      ) : (
        <Box display='flex' marginBottom='2rem'>
          <Box width='50%' paddingRight='6rem'>
            <TransactionForm />
          </Box>
          <Divider orientation='vertical' />
          <Box width='50%' paddingLeft='6rem'>
            <TransactionsList />
          </Box>
        </Box>
      )}
    </Suspense>
  );
};
