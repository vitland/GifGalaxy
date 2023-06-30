import GifContainer from '../../components/GifContainer/GifContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { GiphyApi } from '../../utils/api';

const SearchPage = () => {
  const [gifList, setGifList] = useState(null);

  async function fetchSearch(query, offset) {
    try {
      const data = await GiphyApi.searchGif(query, offset);
      setGifList(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSearch('space', 1);
  }, []);

  return (
    <>
      <Searchbar />
      {gifList ? <GifContainer {...{ gifList }} /> : <Loader />}
    </>
  );
};

export default SearchPage;
