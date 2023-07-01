import GifContainer from '../../components/GifContainer/GifContainer';
import Pagination from '../../components/Pagination/Pagination'
import Searchbar from '../../components/Searchbar/Searchbar';



const SearchPage = ({ gifList, query, fetchSearch }) => {


  return (
    <>
      <Searchbar />
      <GifContainer gifList={gifList.data} />
      {gifList.pagination.total_count > 10 && (
        <Pagination
          pagination={gifList.pagination}
          {...{ fetchSearch, query }} />
      )}
    </>
  )
}

export default SearchPage