import GifContainer from '../../components/GifContainer/GifContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import Loader from '../../components/Loader/Loader';


const SearchPage = ({gifList}) => {


  return (
    <>
      <Searchbar />
      {gifList ? <GifContainer {...{ gifList }} /> : <Loader />}
    </>
  );
};

export default SearchPage;
