import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MediaQuery from 'react-responsive';

import { Button, Flex } from 'components/uikit';
import { desktop, tablet } from 'components/uikit/Responsive';

const MenuLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: ${x => x.theme.space[3]}px;
  color: ${x => x.theme.colors.light};
  font-weight: bold;
`;

const Header = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <MediaQuery minWidth={desktop}>
      {isDesktop => (
        <MediaQuery minWidth={tablet}>
          {isTablet => {
            const isTabletOrDesktop = isDesktop || isTablet;
            return (
              <Flex
                minHeight={70}
                justifyContent="center"
                alignItems="center"
                bg="dark"
                color="light"
              >
                <Flex
                  width={isDesktop ? desktop : '100%'}
                  justifyContent="space-between"
                  flexDirection={isTabletOrDesktop ? 'row' : 'column'}
                  textAlign="center"
                  position="relative"
                >
                  {!isTabletOrDesktop && (
                    <Button
                      position="absolute"
                      right={17}
                      top={isCollapsed ? -17 : 18}
                      onClick={() => setCollapsed(!isCollapsed)}
                    >
                      Collapse
                    </Button>
                  )}
                  {(isTabletOrDesktop || !isCollapsed) && (
                    <>
                      <MenuLink to="/">Home</MenuLink>
                      <MenuLink to="/music">Music</MenuLink>
                      <MenuLink to="/tour">Tour</MenuLink>
                      <MenuLink to="/contact">Contact</MenuLink>
                    </>
                  )}
                </Flex>
              </Flex>
            );
          }}
        </MediaQuery>
      )}
    </MediaQuery>
  );
};

export default Header;
