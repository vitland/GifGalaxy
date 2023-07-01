import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import TrendPage from './pages/TrendPage/TrendPage';
import RandomPage from './pages/RandomPage/RandomPage';
import { useEffect, useState } from 'react';
import { GiphyApi } from './utils/api';

const App = () => {
  const { pathname } = useLocation();
  const [query, setQuery] = useState(null)
  const [gif, setGif] = useState(null);
  const [gifList, setGifList] = useState({
    data: null,
    pagination: {
      offset: null
    }
  })

  async function fetchSearch(value, offset) {
    try {
      const data = await GiphyApi.searchGif(query, offset);
      setGifList(data);
      setQuery(value)
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTrendy() {
    setGifList(null);
    try {
      const data = await GiphyApi.trendyGifs();
      setGifList(data);
    } catch (error) {
      console.log(error);
    }
  }

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
    fetchSearch('space', 1)
  }, [])

  useEffect(() => {
    console.log(pathname);
    if (pathname === '/random') {
      fetchRandom();
    }
    if (pathname === '/trend') {
      fetchTrendy();
    }
  }, [pathname]);

  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchPage {...{ gifList, fetchSearch, query }} />} />
        <Route path='/trend' element={<TrendPage {...{ gifList }} />} />
        <Route path='/random' element={<RandomPage {...{ gif }} />} />
      </Routes>
    </Layout>
  );
};

export default App;
