import { useParams } from 'react-router-dom'
import { loadProduct } from './slices/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './index.css'
import { ToCartButton } from '../../Components/toCardButton'
import { ToFavoriteButton } from '../../Components/toFavoriteButton'

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
            <ToFavoriteButton product={product} />
            <ToCartButton product={product} />
          </div>
      </div>
    </>
  )
}

export default Product;