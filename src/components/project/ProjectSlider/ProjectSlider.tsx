import React, { useMemo } from 'react';

import { ReflectImage } from 'components';

import { ProjectSliderProps } from './types';
import styles from './ProjectSlider.module.scss';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  data = [],
  currentIndex = 0,
  selected,
  size = { width: 550, height: 350 },
  onChange,
  onSelect,
  onDeselect,
}) => {
  const slidePositionStyle = useMemo(
    () => ({
      transform: `translateX(calc(50vw - 30px - ${size.width / 2}px - ${size.width * currentIndex}px))`,
    }),
    [currentIndex, size],
  );

  const handleSlideClick = (index: number) => {
    if (index === currentIndex) {
      if (!selected) onSelect?.();
    } else {
      onChange?.(index);
      onDeselect?.();
    }
  };

  const handleSlideClose = () => {
    onDeselect?.();
  };

  return (
    <div className={`${styles.slider} ${selected ? 'selected' : ''}`}>
      <div className={styles.inner} style={slidePositionStyle}>
        {data.map((slide, i) => (
          <div
            key={`slide_${slide.id}`}
            className={`${styles.slide} ${currentIndex === i ? 'active' : ''}`}
            style={{ zIndex: 100 - Math.abs(currentIndex - i), width: size.width, height: size.height }}
            onClick={() => handleSlideClick(i)}
          >
            <ReflectImage image={slide.thumbnail} hideReflection={currentIndex === i && selected} />
            <div className={styles.overlay}></div>
            <div className={styles.scaled_content}>
              <ProjectDetail data={slide} visible={selected && currentIndex === i} onClose={handleSlideClose} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
