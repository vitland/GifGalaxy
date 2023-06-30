import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import GifContainer from './components/GifContainer/GifContainer'

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Searchbar/>
      <GifContainer/>
    </Layout>
  )
}

export default App