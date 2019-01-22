import React from 'react';

import { Flex } from 'components/uikit';

const Footer = () => {
  return (
    <Flex
      height={80}
      justifyContent="center"
      alignItems="center"
      bg="dark"
      color="light"
    >
      <iframe
        title="spotify-player"
        src="https://open.spotify.com/embed/album/12PhXovGwVbz4XUPc0OV88"
        width="100%"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </Flex>
  );
};

export default Footer;
