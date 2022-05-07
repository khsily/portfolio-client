import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './AnimatedPage.module.scss';

const variants = {
  pageInitial: {
    scale: 0.85,
    y: '100vh',
  },
  pageOut: {
    scale: 0.8,
    y: '-100vh',
    transition: {
      scale: { duration: 0.4 },
      y: { delay: 0.4, duration: 0.4 },
    },
  },
  pageIn: {
    scale: 1,
    y: 0,
    transition: {
      scale: { delay: 0.4, duration: 0.4 },
      y: { duration: 0.4, type: 'spring' },
    },
  },
};

const AnimatedPage: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return (
    <motion.div variants={variants} initial='pageInitial' animate='pageIn' exit='pageOut'>
      <AnimatePresence initial>
        <div className={styles.page}>{children}</div>
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedPage;
