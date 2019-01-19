import React from 'react';
import { Switch, Route } from 'react-router';
import styled from '@emotion/styled';

import background from 'img/background.jpg';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Home, Contact } from 'components/pages';
import { Flex } from 'components/uikit';

const Content = styled(Flex)`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`;

const App = () => {
  return (
    <Flex flexDirection="column" height="100%">
      <Header />
      <Content flexGrow={1} minHeight={1} p={4} justifyContent="center">
        <Switch>
          <Route exact path="/" render={x => <Home {...x} />} />
          <Route exact path="/contact" render={x => <Contact {...x} />} />
        </Switch>
      </Content>
      <Footer />
    </Flex>
  );
};

export default App;
