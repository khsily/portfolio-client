import React, { useCallback, useEffect, useState } from 'react';
import { faBook, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import { SideNav } from 'components';

import styles from './MainLayout.module.scss';
import SideNavItem from '../SideNavItem/SideNavItem';
import { useLocation } from 'react-router-dom';

const navlist = [
  { icon: faHome, title: 'Home', to: '/' },
  { icon: faUser, title: 'About', to: '/about' },
  { icon: faBook, title: 'Project', to: '/project' },
];

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = useCallback(() => {
    setNavOpen(true);
  }, []);

  const handleNavClose = useCallback(() => {
    setNavOpen(false);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <SideNav
        open={navOpen}
        activeNavIndex={navlist.findIndex((v) => v.to === pathname)}
        onNavOpen={handleNavOpen}
        onNavClose={handleNavClose}
      >
        {navlist.map((item) => (
          <SideNavItem key={item.to} title={item.title} to={item.to} icon={item.icon} />
        ))}
      </SideNav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
