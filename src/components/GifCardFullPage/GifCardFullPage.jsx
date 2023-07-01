import styles from './GifCardFullPage.module.scss';

const GifCardFullPage = ({ gif, title }) => {
  return (
    <img className={styles.gif} src={gif} alt={title} />
  )
}

export default GifCardFullPage

