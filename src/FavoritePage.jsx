import { Link } from 'react-router-dom';
import Card from './Components/Card.jsx';
import { useSelector } from 'react-redux';

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
      <Link to='/'>
        <div>Назад на главную</div>
      </Link>
    </>
  );
}

export default FavoritePage;