import React, { useMemo } from 'react';

import styles from './ReflectImage.module.scss';
import { ReflectImageProps } from './types';

const defaultShadeProps = {
  from: 'rgba(255, 255, 255, 0.5)',
  to: '#eee',
};

const ReflectImage: React.FC<ReflectImageProps> = ({ image, shade = defaultShadeProps, hideReflection, ...props }) => {
  const imageStyle = useMemo(
    () => ({
      backgroundImage: `url('${image}')`,
      ...props.style,
    }),
    [image, props.style],
  );

  const shadeStyle = useMemo(
    () => ({
      background: `linear-gradient(to bottom, ${shade.from}, ${shade.to})`,
    }),
    [shade],
  );

  return (
    <div {...props} className={`${styles.image} ${props.className || ''}`} style={imageStyle} onClick={props.onClick}>
      {!hideReflection && (
        <div className={styles.reflection}>
          <div className={styles.reflect_image}></div>
          <div className={styles.shade} style={shadeStyle}></div>
        </div>
      )}
    </div>
  );
};

export default ReflectImage;
