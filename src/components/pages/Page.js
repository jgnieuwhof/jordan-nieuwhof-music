import React from 'react';
import styled from '@emotion/styled';
import { FaSpinner } from 'react-icons/fa';

import { Div, Flex } from 'components/uikit';
import { desktop } from 'components/uikit/Responsive';

const StyledPage = styled(Div)`
  background: url(${x => x.background}) no-repeat center center fixed;
  background-size: cover;
  overflow-y: scroll;
`;

const PageHeader = styled.h2`
  font-size: ${x => x.theme.fontSize[4]};
`;

const Page = ({ background, header, loading, children }) => (
  <StyledPage
    flex={1}
    flexGrow={1}
    minHeight={1}
    p={4}
    textAlign="center"
    {...loading && { justifyContent: 'center' }}
    {...{ background }}
  >
    {loading ? (
      <Flex alignItems="center" justifyContent="center" height="100%">
        <FaSpinner className="icon-spin" size={30} />
      </Flex>
    ) : (
      <Div maxWidth={desktop} margin="0 auto">
        {header && <PageHeader>{header}</PageHeader>}
        {children}
      </Div>
    )}
  </StyledPage>
);

export default Page;
