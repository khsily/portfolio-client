import { HintBox } from 'components';
import ProgressBar from 'components/common/ProgressBar/ProgressBar';

import styles from './SkillHint.module.scss';
import { SkillHintProps } from './types';

const SkillHint: React.FC<SkillHintProps> = ({ name, level, ...props }) => {
  return (
    <HintBox className={styles.hint} {...props}>
      <h3 className={styles.name}>
        <span>{name}</span>
        <span className={styles.percentage}> ({level}%)</span>
      </h3>
      <ProgressBar percentage={level} color='#3077C6' />
    </HintBox>
  );
};

export default SkillHint;
