import { Link } from 'react-router-dom'
import Card from './Components/Card.jsx'

function FavoritePage( {favoriteProducts} ) {
  return (
    <>
      <h1>Favorite Page</h1>
      <div className='card-block'>
      {favoriteProducts.length ?
      (favoriteProducts.map((el) => {
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