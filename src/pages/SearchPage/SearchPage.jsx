import { useEffect, useState } from 'react';
import { GiphyApi } from '../../utils/api';
import GifContainer from '../../components/GifContainer/GifContainer';
import Pagination from '../../components/Pagination/Pagination';
import Searchbar from '../../components/Searchbar/Searchbar';

const SearchPage = ({ query, setQuery }) => {
  const [gifList, setGifList] = useState({
    data: null,
    pagination: {
      offset: null,
    },
  });

  useEffect(() => {
    fetchSearch(query, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchPage = (offset) => {
    fetchSearch(query, offset);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchSearch(query, 1);
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
      <Searchbar
        onChange={onChange}
        onSubmit={onSubmit}
        onClear={onClear}
        query={query}
      />
      <GifContainer gifList={gifList.data} />
      {gifList.pagination.total_count > 10 && (
        <Pagination pagination={gifList.pagination} switchPage={switchPage} />
      )}
    </>
  );
};

export default SearchPage;
