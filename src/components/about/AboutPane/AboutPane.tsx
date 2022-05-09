import styles from './AboutPane.module.scss';

const AboutPane: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return <div className={styles.pane}>{children}</div>;
};

export default AboutPane;
