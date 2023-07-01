import { useEffect, useState } from 'react';
import GifContainer from '../../components/GifContainer/GifContainer';
import Pagination from '../../components/Pagination/Pagination';
import { GiphyApi } from '../../utils/api';

const TrendPage = () => {
  const [gifList, setGifList] = useState({
    data: null,
    pagination: {
      offset: null
    }
  })

  useEffect(() => {
    fetchTrendy(1)
  }, [])

  async function fetchTrendy(offset) {
    try {
      const data = await GiphyApi.trendyGifs(offset);
      setGifList(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <GifContainer gifList={gifList.data} />
    {gifList.pagination.total_count > 10 && (
      <Pagination
        pagination={gifList.pagination}
        switchPage={fetchTrendy} />
    )}
  </>
  )
};

export default TrendPage;