import React, { useEffect, useMemo, useState } from 'react';
import styles from './CircularDiv.module.scss';
import { CircularDivProps } from './types';

const CircularDiv: React.FC<CircularDivProps> = ({ image, children, className, style, ...props }) => {
  const [mounted, setMounted] = useState(false);
  const count = useMemo(() => React.Children.count(children), [children]);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <div
      className={`${styles.container} ${className ? className : ''}`}
      style={{ backgroundImage: `url('${image}')`, ...style }}
      {...props}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child as React.ReactElement<any>, {
          className: styles.child_div,
          style: mounted && {
            transform: `rotate(${(360 / count) * i}deg) translateY(-175px) rotate(-${(360 / count) * i}deg)`,
          },
        }),
      )}
    </div>
  );
};

export default CircularDiv;
