import { useState } from 'react';
import GifCard from '../../components/GifCard/GifCard';
import Loader from '../../components/Loader/Loader';
import { testWebP } from '../../assets/function/webp';

const RandomPage = ({gif}) => {
  const [isWebp, setIsWebp] = useState(null);

  testWebP(function (support) {
    setIsWebp(support);
  });


  if (!gif) {
    return <Loader />
  }

  return (
    <GifCard
      key={gif.id}
      gif={isWebp ? gif.images.fixed_height.webp : gif.images.fixed_height.url}
      title={gif.title}
    />
  );
};

export default RandomPage;
