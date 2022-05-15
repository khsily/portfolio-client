import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './ImageSlideViewer.module.scss';
import { ImageSlideViewerProps } from './types';

const ImageSlideViewer: React.FC<ImageSlideViewerProps> = ({ images = [], activeIndex = 0, onChangeIndex }) => {
  const index = (next: number) => {
    let nextIndex = activeIndex + next;

    if (nextIndex >= images.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = images.length - 1;

    return nextIndex;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {images.map((v, i) => (
          <img
            draggable={false}
            src={v.url}
            className={activeIndex === i ? 'active' : ''}
            key={`iamge_slide_${i}`}
            alt={`image_${i}`}
          />
        ))}
      </div>

      <div className={styles.controller}>
        <FontAwesomeIcon className={styles.arrow} icon={faChevronLeft} onClick={() => onChangeIndex?.(index(-1))} />
        <div className={styles.title}>{images[activeIndex].title}</div>
        <FontAwesomeIcon className={styles.arrow} icon={faChevronRight} onClick={() => onChangeIndex?.(index(-1))} />
      </div>
    </div>
  );
};

export default ImageSlideViewer;
