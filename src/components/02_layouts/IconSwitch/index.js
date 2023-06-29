import React from 'react';
import PropTypes from 'prop-types';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import styles from './index.module.css';

export default function IconSwitch({ icon, onSwitch }) {
  function useUcon() {
    if (icon === 'list') {
      return <ViewListIcon />;
    } else if (icon === 'module') {
      return <ViewModuleIcon />;
    } else {
      throw new Error(`${icon} not found in styles`);
    }
  }
  return (
    <div className="header">
      <div className={styles.icon} onClick={() => onSwitch()}>
        {useUcon()}
      </div>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};