import React, { useCallback } from 'react';

import { MenuButton } from 'components';

import styles from './SideNav.module.scss';
import { SideNavProps } from './types';

const SideNav: React.FC<SideNavProps> = ({ open, children, activeNavIndex = 0, onNavOpen, onNavClose }) => {
  const handleMenuClick = useCallback(() => {
    if (open) onNavClose?.();
    else onNavOpen?.();
  }, [open, onNavClose, onNavOpen]);

  return (
    <nav className={`${styles.nav} ${open ? 'active' : ''}`}>
      <div className={styles.top}>
        <MenuButton active={open} onClick={handleMenuClick} />
        <span className={styles.title}>khsily’s Portfolio</span>
      </div>
      <div className={styles.list}>
        {children}
        <div className={styles.backdrop} style={{ top: activeNavIndex * 50 }}></div>
      </div>
    </nav>
  );
};

export default SideNav;
