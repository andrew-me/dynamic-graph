import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = ({ items }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.sort}
        {...item}
      />
    )}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    sort: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ItemList;
