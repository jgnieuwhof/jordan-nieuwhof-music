import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MediaQuery from 'react-responsive';
import { FaBars } from 'react-icons/fa';

import { Flex } from 'components/uikit';
import { desktop, tablet } from 'components/uikit/Responsive';

const MenuLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: ${x => x.theme.space[3]}px;
  color: ${x => x.theme.colors.light};
  font-weight: bold;
`;

const CollapseButton = styled(FaBars)`
  height: 19px;
  width: 19px;
  position: absolute;
  right: 20px;
  top: ${x => (x.isCollapsed ? -10 : 25)}px;
`;

const Header = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <MediaQuery minWidth={desktop}>
      {isDesktop => (
        <MediaQuery minWidth={tablet}>
          {isTablet => {
            const isTabletOrDesktop = isDesktop || isTablet;
            const showCollapsable = !isTabletOrDesktop;
            const CollapsableLink = x => (
              <MenuLink
                onClick={() => showCollapsable && setCollapsed(!isCollapsed)}
                {...x}
              />
            );
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
                  flexDirection={showCollapsable ? 'column' : 'row'}
                  textAlign="center"
                  position="relative"
                  {...showCollapsable &&
                    !isCollapsed && {
                      paddingTop: '10px'
                    }}
                >
                  {showCollapsable && (
                    <CollapseButton
                      {...{ isCollapsed }}
                      cursor="pointer"
                      onClick={() => setCollapsed(!isCollapsed)}
                    />
                  )}
                  {(!showCollapsable || !isCollapsed) && (
                    <>
                      <CollapsableLink to="/">Home</CollapsableLink>
                      <CollapsableLink to="/music">Music</CollapsableLink>
                      <CollapsableLink to="/tour">Tour</CollapsableLink>
                      <CollapsableLink to="/contact">Contact</CollapsableLink>
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
