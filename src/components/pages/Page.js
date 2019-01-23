import React from 'react';
import styled from '@emotion/styled';

import { Div } from 'components/uikit';
import { desktop } from 'components/uikit/Responsive';

const StyledPage = styled(Div)`
  background: url(${x => x.background}) no-repeat center center fixed;
  background-size: cover;
  overflow-y: scroll;
`;

export const PageHeader = styled.h2`
  font-size: ${x => x.theme.fontSize[4]};
`;

const Page = ({ background, children }) => (
  <StyledPage
    flex={1}
    flexGrow={1}
    minHeight={1}
    p={4}
    textAlign="center"
    {...{ background }}
  >
    <Div maxWidth={desktop} margin="0 auto">
      {children}
    </Div>
  </StyledPage>
);

export default Page;
