import styles from './GifContainer.module.scss';

const GifContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default GifContainer;
