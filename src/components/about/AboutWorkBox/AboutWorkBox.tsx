import { FadeIn } from 'components';

import styles from './AboutWorkBox.module.scss';
import { AboutWorkBoxProps } from './types';

const AboutWorkBox: React.FC<AboutWorkBoxProps> = ({ title, desc }) => {
  return (
    <FadeIn className={styles.workbox} delay={0.45}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </FadeIn>
  );
};

export default AboutWorkBox;
