import React from 'react';

import styles from './MenuButton.module.scss';
import { MenuButtonProps } from './types';

const MenuButton: React.FC<MenuButtonProps> = ({ active = false, onClick }) => {
  return (
    <nav className={`${styles.menu} ${active ? 'active' : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
};

export default MenuButton;
