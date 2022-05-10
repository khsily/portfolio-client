import { FadeIn } from 'components';

import styles from './AboutInfo.module.scss';
import { AboutInfoProps } from './types';

const AboutInfo: React.FC<AboutInfoProps> = ({ title, children }) => {
  return (
    <div className={styles.info}>
      <FadeIn delay={0}>
        <h2 className={styles.title}>{title}</h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className={styles.content}>{children}</div>
      </FadeIn>
    </div>
  );
};

export default AboutInfo;
