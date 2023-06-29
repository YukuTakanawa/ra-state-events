import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';
import './index.css';

export default function DropdownList({ opened }) {
  const [active, setActive] = useState(0);

  const listItems = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];

  const clickItemHandler = (evt, idx) => {
    evt.preventDefault();
    setActive(idx);
  };

  return (
    <ul className={'dropdown' + (!opened ? ' close' : '')}>
      {listItems.map((item, idx) => (
        <DropdownItem
          title={item}
          active={idx === active}
          onActive={clickItemHandler}
          index={idx}
          key={item}
        />
      ))}
    </ul>
  );
}

DropdownList.propTypes = {
  opened: PropTypes.bool.isRequired,
};