import { useParams } from 'react-router-dom'
import { loadProduct } from './slices/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './index.scss'
import { ToCartButton } from '../../Components/toCardButton'
import { ToFavoriteButton } from '../../Components/toFavoriteButton'
import { ProductComments } from './comments/index.jsx'

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

  const { name, brand, price, img, rating, description } = product;

  // dispatch(loadProduct(id));
  return (
    <>
      <div className='productPageBlock'>
        <img width={400} height={400} src={img} alt='image' />
        <div className='productPageContent'>
          <div>
            <div><b>{brand}</b></div>
            <div>{name}</div>
            <div>rating: {rating}</div>
            <div><b>{price}</b></div>
            <div>{description}</div>
          </div>
          <div className='productPageIcons'>
            <ToFavoriteButton product={product} />
            <ToCartButton product={product} />
          </div>
          </div>
      </div>
      <ProductComments />
    </>
  )
}

export default Product;