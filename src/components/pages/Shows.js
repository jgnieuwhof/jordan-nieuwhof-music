import React from 'react';
import styled from '@emotion/styled';
import MediaQuery from 'react-responsive';
import { FaExternalLinkAlt } from 'react-icons/fa';

import desert from 'img/desert.jpg';

import Page, { PageItem } from './Page';
import { ContentfulState } from 'components/state';
import { Button, Div } from 'components/uikit';
import { tablet } from 'components/uikit/Responsive';
import { toHuman } from 'util/date';

const ShowRow = styled(Div)`
  --padding: ${x => x.theme.space[x.isMobile ? 2 : 4]}px;

  ${x => !x.isMobile && 'display: grid;'}
  grid-template-columns: 60% 20% 20%;

  > div {
    display: flex;
    align-items: center;
    &:first-of-type {
      padding-left: var(--padding);
    }
    &:last-child {
      padding-right: var(--padding);
    }
    padding-top: var(--padding);
    padding-bottom: var(--padding);
  }
`;

const Show = ({ date, name, url, venue }) => (
  <MediaQuery maxWidth={tablet - 1}>
    {isMobile => (
      <ShowRow {...{ isMobile }}>
        <Div justifyContent={isMobile ? 'center' : 'flex-start'}>
          {name} - {venue}
        </Div>
        <Div justifyContent="center">{toHuman(date)}</Div>
        <Div justifyContent={isMobile ? 'center' : 'flex-end'}>
          <Button href={url} Icon={FaExternalLinkAlt}>
            Event
          </Button>
        </Div>
      </ShowRow>
    )}
  </MediaQuery>
);

const Shows = () => {
  return (
    <ContentfulState query={{ content_type: 'events', order: 'fields.date' }}>
      {({ items, loading }) => (
        <Page header="Shows" background={desert} {...{ loading }}>
          {items.map((x, i) => (
            <PageItem key={x.id} index={i}>
              <Show {...x} />
            </PageItem>
          ))}
        </Page>
      )}
    </ContentfulState>
  );
};

export default Shows;
