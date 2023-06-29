import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function Toolbar({ filters, selected, onSelect }) {
  return (
    <div className="toolbar">
      <ul className={styles.toolbar__list}>
        {filters.map((ctg) => {
          const isSelected = selected === ctg;
          return (
            <li
              className={
                styles.toolbar__item +
                (isSelected ? ` ${styles.toolbar__item_selected}` : '')
              }
              onClick={() => onSelect(ctg)}
              key={ctg}
            >
              {ctg}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};