import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import TrendPage from './pages/TrendPage/TrendPage';
import RandomPage from './pages/RandomPage/RandomPage';

const App = () => {

  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<SearchPage />}
        />
        <Route
          path='trend'
          element={<TrendPage />}
        />
        <Route
          path='random'
          element={<RandomPage />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
