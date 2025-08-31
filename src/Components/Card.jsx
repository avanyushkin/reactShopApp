import FavoriteIcon from './FavoriteIcon.jsx'

function Card( {favoriteIds, 
                onClickFavorites,
                product} ) {
  const {name, brand, price, img, rating, id} = product;
  return (
    <>
      <div className='card'>
        <img width={200} height={200} src={img} alt='image' />
        <div className='card-bottom'>
          <div>
            <div>{brand}</div>
            <div>{name}</div>
            <div>rating: {rating}</div>
            <div>{price}</div>
          </div>
          {favoriteIds && (
          <div className='card-icon' onClick = {() => onClickFavorites( product )}>
            <FavoriteIcon isFavorite={favoriteIds.includes(id)} />
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;

