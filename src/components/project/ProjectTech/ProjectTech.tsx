import React from 'react';
import styles from './ProjectTech.module.scss';
import { ProjectTechProps } from './types';

const ProjectTech: React.FC<ProjectTechProps> = ({ tech = {} }) => {
  return (
    <div className={styles.tech}>
      {Object.entries(tech).map(([key, val]) => (
        <div className={styles.row} key={`tech_${key}`}>
          <div className={styles.key}>{key}</div>
          <div className={styles.value}>{val}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProjectTech);
