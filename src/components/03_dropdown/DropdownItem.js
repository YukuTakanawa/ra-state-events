import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function DropdownItem({ title, active, index, onActive }) {
  return (
    <li
      className={active ? 'active' : null}
      onClick={(evt) => onActive(evt, index)}
    >
      <a href="#">{title}</a>
    </li>
  );
}

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onActive: PropTypes.func.isRequired,
};