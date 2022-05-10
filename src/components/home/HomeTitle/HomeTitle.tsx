import { FadeIn } from 'components';

import styles from './HomeTitle.module.scss';
import { HomeTitleProps } from './types';

const HomeTitle: React.FC<HomeTitleProps> = ({ name, desc }) => {
  return (
    <div className={styles.title}>
      <FadeIn delay={0.5} duration={0.8} yStart={-70}>
        <h2>I'M</h2>
        <h1>{name}</h1>
        <span>{desc}</span>
      </FadeIn>
    </div>
  );
};

export default HomeTitle;
