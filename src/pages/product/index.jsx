import { ShoppingCartOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { loadProduct } from './slices/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './index.css'

function Product() {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { product } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(loadProduct(id))
  }, [])

  if (!product) {
    return (
        <>
            <div>Loading...</div>
        </>
    );
  }

  const { name, brand, price, img, rating } = product;

  // dispatch(loadProduct(id));
  return (
    <>
      <div className='productPageBlock'>
      <img width={400} height={400} src={img} alt='image' />
        <div className='card-bottom'>
          <div>
            <div>{brand}</div>
            <div>{name}</div>
            <div>rating: {rating}</div>
            <div>{price}</div>
          </div>
        </div>
          <div>
           {/*  {favoriteIds && (
            <div className='card-icon' onClick = {() => onClickFavorites( product )}>
              <FavoriteIcon isFavorite={favoriteIds.includes(id)} />
            </div>
            )} */}
            {/* {cartIds && (<ShoppingCartOutlined 
            onClick={() => onClickAddToCart(product)}
            style={{fontSize: '40px', color: color}}/>)} */}
          </div>
      </div>
    </>
  )
}

export default Product;