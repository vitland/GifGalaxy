import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import { GiphyApi } from './utils/api'

const App = () => {

  useEffect(() => {
    async function fetchSearch() {
      const data = await GiphyApi.searchGif('auto', 1)
      console.log(data)
    }
    fetchSearch()
  }, [])
  

  return (
    <Layout>
      <Navbar />
    </Layout>
  )
}

export default App