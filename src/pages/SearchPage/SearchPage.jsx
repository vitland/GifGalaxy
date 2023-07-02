import { useEffect, useState } from 'react';
import GifContainer from '../../components/GifContainer/GifContainer';
import Pagination from '../../components/Pagination/Pagination';
import Searchbar from '../../components/Searchbar/Searchbar';
import { GiphyApi } from '../../utils/api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [gifList, setGifList] = useState({
    data: null,
    pagination: {
      offset: null,
    },
  });

  useEffect(() => {
    fetchSearch('space', 1);
  }, []);

  useEffect(() => {
      fetchSearch(query, 1);
  }, [query]);

  const switchPage = (offset) => {
    fetchSearch(query, offset);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onClear = () => {
    setQuery('');
  };

  async function fetchSearch(value, offset) {
    try {
      const data = await GiphyApi.searchGif(value, offset);
      setGifList(data);
      setQuery(value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Searchbar onChange={onChange} onClear={onClear} query={query} />
      <GifContainer gifList={gifList.data} />
      {gifList.pagination.total_count > 10 && (
        <Pagination pagination={gifList.pagination} switchPage={switchPage} />
      )}
    </>
  );
};

export default SearchPage;
