import FavoriteIcon from './FavoriteIcon.jsx'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Card( {favoriteIds, 
                cartIds,
                onClickFavorites,
                product,
                onClickAddToCart  
              } ) {
  const {name, brand, price, img, rating, id} = product;

  const color = cartIds && cartIds.includes(id) ? 'green' : '#c7c7c7';

  return (
    <>
      <div className='card'>
        <Link to={`/product/${id}`}>
          <img width={200} height={200} src={img} alt='image' />
        </Link>
        <div className='card-bottom'>
        <Link to={`/product/${id}`}>
          <div>
            <div>{brand}</div>
            <div>{name}</div>
            <div>rating: {rating}</div>
            <div>{price}</div>
          </div>
        </Link>
          <div>
            {favoriteIds && (
            <div className='card-icon' onClick = {() => onClickFavorites( product )}>
              <FavoriteIcon isFavorite={favoriteIds.includes(id)} />
            </div>
            )}
            {cartIds && (<ShoppingCartOutlined 
            onClick={() => onClickAddToCart(product)}
            style={{fontSize: '40px', color: color}}/>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

