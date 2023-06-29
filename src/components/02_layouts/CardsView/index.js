import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from '../ShopCard';
import styles from './index.module.css';

export default function CardsView({ products }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <ShopCard key={`${product.name} ${product.color}`} card={product} />
      ))}
    </ul>
  );
}

CardsView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};