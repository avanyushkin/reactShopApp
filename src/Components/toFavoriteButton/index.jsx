import { useSelector, useDispatch } from 'react-redux'
import { deleteFavorites, addToFavorites } from '../../pages/favorite/favoritesSlice'
import { HeartOutlined } from '@ant-design/icons'
import { HeartFilled } from '@ant-design/icons'

export const ToFavoriteButton = ( {product} ) => {

    const { favorites } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    
    
      const onClickFavorites = () => {
        if (favorites.some((el) => el.id === product.id)) {
          dispatch(deleteFavorites(product.id))
        } else {
          dispatch(addToFavorites(product));
        }
      }
      
    const isFavorite = favorites.some(item => item.id === product.id);

  return (
    <>
        <div className='card-icon' onClick = {onClickFavorites}>
            {isFavorite ? <HeartFilled style={{fontSize: '40px', color: 'yellow'}} /> :
            <HeartOutlined style={{fontSize: '40px'}} />}
        </div>
    </>
  );
}