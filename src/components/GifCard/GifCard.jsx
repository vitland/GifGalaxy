import { useState } from 'react';
import GifCardSceletone from '../GifCardSceletone/GifCardSceletone';
import styles from './GifCard.module.scss';

const GifCard = ({ gif, title }) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
        <img
          className={styles.gif}
          src={gif}
          alt={title}
          style={!isLoading ? {
            visibility: 'hidden',
            position: 'absolute'
          } : {}}
          onLoad={() => setIsLoading(true)} />
        {(!isLoading && <GifCardSceletone />
      )}
    </>
  )
}

export default GifCard

