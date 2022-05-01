import React from 'react';

export interface SideNavProps extends React.HTMLProps<HTMLDivElement> {
  open?: boolean;
  activeNavIndex?: number;
  onNavOpen?: () => void;
  onNavClose?: () => void;
}
