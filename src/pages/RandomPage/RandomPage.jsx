import { useEffect, useState } from 'react';
import { testWebP } from '../../assets/function/webp';
import { GiphyApi } from '../../utils/api';
import Loader from '../../components/Loader/Loader';
import GifCardFullPage from '../../components/GifCardFullPage/GifCardFullPage';
import Button from '../../components/Button/Button';
import styles from './RandomPage.module.scss';

const RandomPage = () => {
  const [isWebp, setIsWebp] = useState(null);
  const [gif, setGif] = useState(null);
  // const [isLoading, setIsLoading] = useState(false)


  async function fetchRandom() {
    setGif(null);
    try {
      const data = await GiphyApi.randomGif();
      setGif(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRandom();
  }, []);

  testWebP(function (support) {
    setIsWebp(support);
  });


  if (!gif) {
    return ( <Loader /> )
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Button
          text='Обновить гиф'
          // isLoading={isLoading}
          handleClick={fetchRandom} />
      </div>
      <GifCardFullPage
        key={gif.id}
        gif={isWebp ? gif.images.fixed_height.webp : gif.images.fixed_height.url}
        title={gif.title}
      />
    </>
  )
};

export default RandomPage;
