import { useEffect, useState } from 'react';
import GifCard from '../../components/GifCard/GifCard';
import Loader from '../../components/Loader/Loader';
import { GiphyApi } from '../../utils/api';
import { testWebP } from '../../assets/function/webp';

const RandomPage = () => {
  const [gif, setGif] = useState(null);
  const [isWebp, setIsWebp] = useState(null);

  testWebP(function (support) {
    setIsWebp(support);
  });

  async function fetchRandom() {

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

  if (!gif) {
    return <Loader />
  }

  return (
    <GifCard
      key={gif.id}
      gif={isWebp ? gif.images.fixed_height.webp : gif.images.fixed_height.url}
      title={gif.title}
    />
  );
};

export default RandomPage;
