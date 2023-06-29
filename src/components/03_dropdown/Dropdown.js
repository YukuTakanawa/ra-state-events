import React from 'react';
import { useState } from 'react';
import { Public } from '@mui/icons-material';
import DropdownList from './DropdownList';
import './index.css';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <div className="dropdown-wrapper close">
      <button className="btn" onClick={toggleOpen}>
        <span>Account Settings</span>
        <Public />
      </button>
      {<DropdownList opened={open} />}
    </div>
  );
}