import styles from './ProgressBar.module.scss';
import { ProgressBarProps } from './types';

const ProgressBar: React.FC<ProgressBarProps> = ({ className, color, percentage = 0 }) => {
  return (
    <div className={styles.progressbar}>
      <div
        className={`${styles.inner} ${className ? className : ''}`}
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
