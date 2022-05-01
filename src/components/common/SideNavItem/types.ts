import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SideNavItemProps {
  icon: IconProp;
  title: string;
  to: string;
  active?: boolean;
}
