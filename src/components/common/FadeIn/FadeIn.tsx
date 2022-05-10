import { motion } from 'framer-motion';

import { FadeInProps } from './types';

const FadeIn: React.FC<FadeInProps> = ({ children, className, delay = 0, duration = 1, yStart = -10 }) => {
  return (
    <motion.div className={className} animate={{ y: [yStart, 0], opacity: [0, 1] }} transition={{ delay, duration }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
