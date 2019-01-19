import React from 'react';
import { Switch, Route } from 'react-router';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Home, Contact } from 'components/pages';
import { Div, Flex } from 'components/uikit';

const App = () => {
  return (
    <Flex flexDirection="column" height="100%">
      <Header />
      <Div flexGrow={1} minHeight={1}>
        <Switch>
          <Route exact path="/" render={x => <Home {...x} />} />
          <Route exact path="/contact" render={x => <Contact {...x} />} />
        </Switch>
      </Div>
      <Footer />
    </Flex>
  );
};

export default App;
