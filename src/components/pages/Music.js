import React from 'react';
import styled from '@emotion/styled';
import MediaQuery from 'react-responsive';

import desert from 'img/desert.jpg';

import { ContentfulState } from 'components/state';
import { Button, Div, Flex, Img } from 'components/uikit';
import { tablet } from 'components/uikit/Responsive';
import Page, { PageItem } from './Page';
import { toHuman } from 'util/date';

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

const Badge = ({ url, ...x }) => (
  <Button href={url} fontWeight="auto" fontSize="10px" p={1} m={1} {...x} />
);

const Music = () => {
  return (
    <ContentfulState
      query={{ content_type: 'albums', order: '-fields.releaseDate' }}
    >
      {({ loading, items }) => (
        <Page background={desert} header="Music" {...{ loading }}>
          <Flex alignItems="center" flexDirection="column">
            {items.map((x, i) => (
              <MediaQuery key={x.id} minWidth={tablet}>
                {isTabletOrDesktop => (
                  <PageItem index={i} p={3}>
                    <Div>
                      <Div fontSize={4}>{x.title}</Div>
                      <Div fontSize={1}>{toHuman(x.releaseDate)}</Div>
                    </Div>
                    <Flex buffer>
                      <Div mr={2}>
                        <Div>
                          <AlbumCover url={x.image.fields.file.url} />
                        </Div>
                        <Div>
                          <Badge url={x.spotifyUrl}>Spotify</Badge>
                          <Badge url={x.itunesUrl}>iTunes</Badge>
                          <Badge url={x.bandcampUrl}>Bandcamp</Badge>
                          <Badge url={x.googlePlayUrl}>Google Play</Badge>
                        </Div>
                      </Div>
                      {isTabletOrDesktop && (
                        <Div ml={2}>
                          {x.tracks.map((y, i) => (
                            <Track key={y} number={i + 1} title={y} />
                          ))}
                        </Div>
                      )}
                    </Flex>
                  </PageItem>
                )}
              </MediaQuery>
            ))}
          </Flex>
        </Page>
      )}
    </ContentfulState>
  );
};

export default Music;
