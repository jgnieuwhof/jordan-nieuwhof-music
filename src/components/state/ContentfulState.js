import { useEffect, useState } from 'react';

import { withContentful } from 'components/context/ContentfulContext';

const ContentfulState = ({ contentfulClient, children, query }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      contentfulClient.getEntries(query).then(x => {
        setItems(x.items.map(x => ({ id: x.sys.id, ...x.fields })));
        setLoading(false);
      });
    },
    [query]
  );

  return children({ loading, items });
};

export default withContentful(ContentfulState);
