import { Link } from 'react-router-dom'
import { ToFavoriteButton } from './toFavoriteButton/index.jsx'
import { ToCartButton } from './toCardButton/index.jsx'

function Card({ product }) {
  const {name, brand, price, img, rating, id} = product;

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
          <div className='iconsMainBlock'>
            <ToFavoriteButton product={product} />
            <ToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;