import React from 'react';

import desert from 'img/desert.jpg';

import Page from './Page';

const Music = () => {
  return (
    <Page background={desert}>
      <script
        charSet="utf-8"
        src="https://widget.bandsintown.com/main.min.js"
      />
      <a
        className="bit-widget-initializer"
        data-artist-name="jnieuwhofmusic"
        data-display-local-dates="false"
        data-display-past-dates="false"
        data-auto-style="false"
        data-text-color="#000000"
        data-link-color="#00b4b3"
        data-background-color="rgba(0,0,0,0)"
        data-display-limit="15"
        data-link-text-color="#FFFFFF"
        data-display-lineup="false"
        data-separator-color=""
      />
    </Page>
  );
};

export default Music;
