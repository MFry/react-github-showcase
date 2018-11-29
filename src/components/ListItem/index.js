import React from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

const ListItem = ({ item }: { item: {} }) => (
  <Wrapper>
    <Item>{item}</Item>
  </Wrapper>
);

export default ListItem;
