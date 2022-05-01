import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SideNavItem.module.scss';
import { SideNavItemProps } from './types';

const SideNavItem: React.FC<SideNavItemProps> = ({ icon, title, to }) => {
  const { pathname } = useLocation();

  return (
    <Link className={`${styles.item} ${pathname === to ? 'active' : ''}`} to={to}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.title}>{title}</div>
    </Link>
  );
};

export default SideNavItem;
