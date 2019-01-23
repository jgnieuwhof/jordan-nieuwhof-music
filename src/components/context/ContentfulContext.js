import React from 'react';

import { contentfulAccessToken, contentfulSpace } from 'common/constants';

const contentful = require('contentful');

var contentfulClient = contentful.createClient({
  accessToken: contentfulAccessToken,
  space: contentfulSpace
});

const ContentfulContext = React.createContext();

export const ContentfulProvider = x => (
  <ContentfulContext.Provider value={contentfulClient} {...x} />
);

export const withContentful = Component => props => (
  <ContentfulContext.Consumer>
    {x => <Component {...props} contentfulClient={x} />}
  </ContentfulContext.Consumer>
);

export default ContentfulContext.Consumer;
