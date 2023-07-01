import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { testWebP } from '../../assets/function/webp';
import { GiphyApi } from '../../utils/api';
import GifCardFullPage from '../../components/GifCardFullPage/GifCardFullPage';

const RandomPage = () => {
  const [isWebp, setIsWebp] = useState(null);
  const [gif, setGif] = useState(null);

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
    return <Loader />
  }
    
  return (
      <GifCardFullPage
        key={gif.id}
        gif={isWebp ? gif.images.fixed_height.webp : gif.images.fixed_height.url}
        title={gif.title}
      />
  )
};

export default RandomPage;
