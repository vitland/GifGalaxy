import { useEffect, useState } from 'react';
import GifContainer from '../../components/GifContainer/GifContainer';
import Loader from '../../components/Loader/Loader';
import { GiphyApi } from '../../utils/api';

const TrendPage = () => {
  const [gifList, setGifList] = useState(null);

  async function fetchTrendy() {
    try {
      const data = await GiphyApi.trendyGifs();
      setGifList(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTrendy();
  },[]);

  if (!gifList) {
    return <Loader />;
  }
  return <GifContainer {...{ gifList }} />;
};

export default TrendPage;
