import { Link } from 'react-router-dom';
import Card from '../../Components/productCard/index.jsx';
import { useSelector } from 'react-redux';
import { ButtonBack } from '../../Components/buttonBack'

function FavoritePage( ) {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log(favorites);
  return (
    <>
      <h1>Favorite Page</h1>
      
      <div className='card-block'>
      {favorites.length ?
      (favorites.map((el) => {
          return (
            <Card
              product={el} />
          );
        })) : <h1>Товаров нет</h1>}
        </div>
      <ButtonBack />
    </>
  );
}

export default FavoritePage;