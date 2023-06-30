import styles from './GifCard.module.scss';

const GifCard = ({ gif, title }) => {
  return (
    <img className={styles.gif} src={gif} alt={title} />
  )
}

export default GifCard

