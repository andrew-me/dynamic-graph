import React, { PropTypes } from 'react';

const Item = ({ year, rank }) => (
  <li>
    year: {year}, rank: {rank}
  </li>
);

Item.propTypes = {
  year: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Item;
