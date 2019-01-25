import React from 'react';
import styled from '@emotion/styled';

import desert from 'img/desert.jpg';

import { ContentfulState } from 'components/state';
import { Button, Div, Flex, Img } from 'components/uikit';
import Page from './Page';

const AlbumCover = ({ url }) => <Img src={url} alt={url} maxWidth={300} />;

const StyledTrack = styled(Div)`
  --border: 1px solid ${x => x.theme.dark};

  width: 300px;
  text-align: left;
  padding: ${x => x.theme.space[1]}px;
  border-top: var(--border);
  &:last-child {
    border-bottom: var(--border);
  }
`;

const Track = ({ number, title }) => (
  <StyledTrack>
    {number}. {title}
  </StyledTrack>
);

const Music = () => {
  return (
    <ContentfulState
      query={{ content_type: 'albums', order: '-fields.releaseDate' }}
    >
      {({ loading, items }) => (
        <Page background={desert} header="Music" {...{ loading }}>
          <Flex alignItems="center" flexDirection="column">
            {items.map(
              ({
                id,
                title,
                description,
                releaseDate,
                image,
                tracks,
                spotifyUrl,
                itunesUrl,
                bandcampUrl,
                googlePlayUrl
              }) => (
                <Flex key={id} p={3}>
                  <Div>
                    <Div>{title}</Div>
                    <Div>{releaseDate}</Div>
                    <Div>
                      <AlbumCover url={image.fields.file.url} />
                    </Div>
                    <Button href={spotifyUrl}>Spotify</Button>
                    <Button href={itunesUrl}>iTunes</Button>
                    <Button href={bandcampUrl}>Bandcamp</Button>
                    <Button href={googlePlayUrl}>Google Play</Button>
                  </Div>
                  <Div>
                    {tracks.map((x, i) => (
                      <Track key={x} number={i + 1} title={x} />
                    ))}
                  </Div>
                </Flex>
              )
            )}
          </Flex>
        </Page>
      )}
    </ContentfulState>
  );
};

export default Music;
