import styles from './GifCard.module.scss';
const GifCard = ({ url, name }) => {
  return <img src={url} alt={name} className={styles.card} />;
};

export default GifCard;
