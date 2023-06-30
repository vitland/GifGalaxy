import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import GifContainer from './components/GifContainer/GifContainer'
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
      <Searchbar/>
      <GifContainer/>
    </Layout>
  )
}

export default App