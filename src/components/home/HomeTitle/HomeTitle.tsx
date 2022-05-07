import { motion } from 'framer-motion';

import styles from './HomeTitle.module.scss';
import { HomeTitleProps } from './types';

const HomeTitle: React.FC<HomeTitleProps> = ({ name, desc }) => {
  return (
    <div className={styles.title}>
      <motion.div animate={{ y: [-70, 0], opacity: [0, 1] }} transition={{ delay: 0.5, duration: 0.8 }}>
        <h2>I'M</h2>
        <h1>{name}</h1>
        <span>{desc}</span>
      </motion.div>
    </div>
  );
};

export default HomeTitle;
