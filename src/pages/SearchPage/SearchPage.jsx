import GifContainer from '../../components/GifContainer/GifContainer'
import Searchbar from '../../components/Searchbar/Searchbar'

const SearchPage = ({gifList}) => {
  return (
    <>
      <Searchbar />
      <GifContainer {...{gifList}}/>
    </>
  )
}

export default SearchPage