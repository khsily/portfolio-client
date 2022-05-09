import { ProgressBar } from 'components';
import { useEffect, useState } from 'react';

import styles from './AboutSkill.module.scss';
import { AboutSkillProps } from './types';

const AboutSkill: React.FC<AboutSkillProps> = ({ name, percentage, color, delay }) => {
  const [prgoress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(percentage || 0), delay);
  }, [percentage, delay]);

  return (
    <div className={styles.skill}>
      <h3 className={styles.name}>{name}</h3>
      <ProgressBar className={styles.progress} percentage={prgoress} color={color} />
    </div>
  );
};

export default AboutSkill;
