import styles from './ProjectInfo.module.scss';
import { ProjectInfoProps } from './types';

const ProjectInfo: React.FC<ProjectInfoProps> = ({ className, title, children, ...props }) => {
  return (
    <div className={`${styles.info} ${className ? className : ''}`} {...props}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ProjectInfo;
