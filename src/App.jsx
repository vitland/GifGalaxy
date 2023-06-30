import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import { GiphyApi } from './utils/api'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage'

const App = () => {
  const [query, setQuery] = useState(null)
  const [gifList, setGifList] = useState({
    data: null,
    pagination: {
      offset: null
    }
  })

  async function fetchSearch(value, offset) {
    const data = await GiphyApi.searchGif(value, offset)
    setQuery(value)
    setGifList(data)
    console.log(data)
  }

  useEffect(() => {
    fetchSearch('space', 1)
  }, [])
  

  return (
    <Layout>
      <Navbar />
      <Routes>
          <Route path='/' element={<SearchPage {...{ gifList, fetchSearch, query }} />} />
      </Routes>
    </Layout>
  )
}

export default App