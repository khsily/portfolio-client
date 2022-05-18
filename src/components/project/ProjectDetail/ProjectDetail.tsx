import { useCallback, useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FadeIn, ProjectInfo, ProjectTech, ImageSlideViewer } from 'components';

import styles from './ProjectDetail.module.scss';
import { ProjectDetailProps } from './types';

const ProjectDetail: React.FC<ProjectDetailProps> = ({ data, visible = false, onClose }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageChange = useCallback((index: number) => {
    setImageIndex(index);
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.detail} ${visible ? 'visible' : ''}`}>
      <FadeIn duration={0.8} yStart={-5}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span>{data?.title}</span>
          </h1>
          <FontAwesomeIcon className={styles.close} icon={faClose} onClick={onClose} />
        </div>
      </FadeIn>
      <div className={styles.content}>
        <div className={styles.left}>
          <FadeIn duration={0.8} delay={0.1} yStart={-5}>
            <ProjectInfo className={styles.tech} title='Tech & Languages'>
              <ProjectTech tech={data?.tech} />
            </ProjectInfo>
          </FadeIn>
          <FadeIn duration={0.8} delay={0.2} yStart={-5}>
            <ProjectInfo className={styles.description} title='Description'>
              {data?.description}
            </ProjectInfo>
          </FadeIn>
        </div>
        <div className={styles.right}>
          <FadeIn duration={0.8} delay={0.3} yStart={-5}>
            <ImageSlideViewer images={data?.images} activeIndex={imageIndex} onChangeIndex={handleImageChange} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
