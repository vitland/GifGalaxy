import { useState } from 'react';
import { testWebP } from '../../assets/function/webp';
import GifCard from '../GifCard/GifCard';
import styles from './GifContainer.module.scss';
import GifCardSceletone from '../GifCardSceletone/GifCardSceletone';

const GifContainer = ({ gifList }) => {
  const [isWebp, setIsWebp] = useState(null)
  
  testWebP(function (support) {
    setIsWebp(support)
  })

  return (
    <div className={styles.container}>
      {gifList ? gifList.map((gif) => (
        <GifCard
          key={gif.id}
          gif={isWebp ? gif.images.fixed_height.webp : gif.images.fixed_height.url}
          title={gif.title} />
      )) : (
        <>
          <GifCardSceletone />
          <GifCardSceletone />
          <GifCardSceletone />
        </>
      )}
    </div>
  )
};
