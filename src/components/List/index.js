import React from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';

const List = ({
  items,
  component,
}: {
  items: ?Array<Object>,
  component: Function,
}) => {
  const ComponentToRender = component;
  let content = <div />;

  // If we have items, render them
  if (items) {
    content = items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
};

export default List;
