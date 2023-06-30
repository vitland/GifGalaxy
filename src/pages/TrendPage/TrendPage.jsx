
import GifContainer from '../../components/GifContainer/GifContainer';
import Loader from '../../components/Loader/Loader';


const TrendPage = ({gifList}) => {



  if (!gifList) {
    return <Loader />;
  }
  return <GifContainer {...{ gifList }} />;
};

export default TrendPage;
