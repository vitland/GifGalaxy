import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import { GiphyApi } from './utils/api'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage'

const App = () => {
  const [gifList, setGifList] = useState(null)

  useEffect(() => {
    async function fetchSearch() {
      const data = await GiphyApi.searchGif('space', 1)
      setGifList(data.data)
      console.log(data.data)
    }
    fetchSearch()
  }, [])
  

  return (
    <Layout>
      <Navbar />
      <Routes>
          <Route path='/' element={<SearchPage {...{gifList}} />} />
      </Routes>
    </Layout>
  )
}

export default App