import React from 'react';
import { Switch, Route } from 'react-router';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Home, Contact, Music, Tour } from 'components/pages';
import { Flex } from 'components/uikit';

const App = () => {
  return (
    <Flex flexDirection="column" height="100%">
      <Header />
      <Switch>
        <Route exact path="/" render={x => <Home {...x} />} />
        <Route exact path="/music" render={x => <Music {...x} />} />
        <Route exact path="/tour" render={x => <Tour {...x} />} />
        <Route exact path="/contact" render={x => <Contact {...x} />} />
      </Switch>
      <Footer />
    </Flex>
  );
};

export default App;
