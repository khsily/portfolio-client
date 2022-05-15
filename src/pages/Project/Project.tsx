import { AnimatedPage, ProjectSlider } from 'components';
import { useCallback, useState } from 'react';
import { smapleData } from 'shared/utils/dummy';

const Project = () => {
  const [slideIndex, setSlideIndex] = useState(Math.floor(smapleData.length / 2));
  const [active, setActive] = useState(false);

  const handleSelect = useCallback(() => {
    setActive(true);
  }, []);

  const handleDeselect = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <AnimatedPage>
      <ProjectSlider
        data={smapleData}
        currentIndex={slideIndex}
        selected={active}
        onChange={setSlideIndex}
        onSelect={handleSelect}
        onDeselect={handleDeselect}
      />
    </AnimatedPage>
  );
};

export default Project;
