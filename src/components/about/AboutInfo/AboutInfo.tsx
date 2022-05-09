import styles from './AboutInfo.module.scss';
import { AboutInfoProps } from './types';

const AboutInfo: React.FC<AboutInfoProps> = ({ title, children }) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AboutInfo;
