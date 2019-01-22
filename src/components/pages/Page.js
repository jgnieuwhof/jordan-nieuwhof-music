import React from 'react';
import styled from '@emotion/styled';

import { Flex } from 'components/uikit';

const StyledPage = styled(Flex)`
  background: url(${x => x.background}) no-repeat center center fixed;
  background-size: cover;
`;

const Page = ({ background, children }) => (
  <StyledPage
    flexGrow={1}
    minHeight={1}
    p={4}
    justifyContent="center"
    {...{ background }}
  >
    {children}
  </StyledPage>
);

export default Page;
