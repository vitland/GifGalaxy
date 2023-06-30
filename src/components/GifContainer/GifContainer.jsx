import styles from './GifContainer.module.scss';

const GifContainer = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default GifContainer;
