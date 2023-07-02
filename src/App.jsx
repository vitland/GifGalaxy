import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import SearchPage from './pages/SearchPage/SearchPage';
import TrendPage from './pages/TrendPage/TrendPage';
import RandomPage from './pages/RandomPage/RandomPage';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  const [query, setQuery] = useState('space');

  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchPage {...{query, setQuery}} />} />
        <Route path='/trend' element={<TrendPage />} />
        <Route path='/random' element={<RandomPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;