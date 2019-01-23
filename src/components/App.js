import React from 'react';
import { Switch, Route } from 'react-router';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Home, Contact, Music, Shows } from 'components/pages';
import { Flex } from 'components/uikit';

const App = () => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Header />
      <Switch>
        <Route exact path="/" render={x => <Home {...x} />} />
        <Route exact path="/music" render={x => <Music {...x} />} />
        <Route exact path="/shows" render={x => <Shows {...x} />} />
        <Route exact path="/contact" render={x => <Contact {...x} />} />
      </Switch>
      <Footer />
    </Flex>
  );
};

export default App;
