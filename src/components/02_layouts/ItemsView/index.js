import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from '../ShopItem';
import styles from './index.module.css';

export default function ItemsView({ products }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <ShopItem key={`${product.name} ${product.color}`} item={product} />
      ))}
    </ul>
  );
}

ItemsView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};