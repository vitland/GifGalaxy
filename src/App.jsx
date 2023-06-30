import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
const App = () => {
  return (
    <Layout>
      <Navbar />
      <Searchbar/>
    </Layout>
  )
}

export default App