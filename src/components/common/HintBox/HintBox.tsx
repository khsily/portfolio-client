import React from 'react';

import styles from './HintBox.module.scss';
import { HintBoxProps } from './types';

const HintBox: React.FC<HintBoxProps> = ({ className, children, visible, position, ...props }) => {
  return (
    <div
      {...props}
      className={`${styles.hintbox} ${visible ? 'visible' : ''} ${className ? className : ''}`}
      style={position}
    >
      {children}
    </div>
  );
};

export default HintBox;
