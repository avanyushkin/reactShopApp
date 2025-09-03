import { useSelector } from 'react-redux'
import { ButtonBack } from '../../Components/buttonBack'
import CartItem from './CartItem'
import './index.scss'

export const CartPage = ({ onClickFavorites }) => {
  const { cart } = useSelector((state) => state.cart)
  const totalPrice = cart.reduce((acc, product) => acc + product.quantity * product.price, 0); 
  const productCount = cart.reduce((acc, product) => acc + product.quantity, 0);
  return (
    <>
      <div className=''>
      {cart.length ?
      (cart.map((el) => {
          return (
            <CartItem
              key={el.id}
              product={el}
              onClickFavorites={onClickFavorites}
              />
          );
        })) : <h1>Товаров нет</h1>}
      </div>
      <div className='totalPriceBlock'>
        <div className='totalPriceRow'>
          <div>Количество шт:</div>&nbsp;&nbsp;
          <b>{productCount}</b>
        </div>
        <div className='totalPriceRow'>
          <h3>Итого:</h3>
          <h3 className='totalPrice'>{totalPrice}</h3>
        </div>
      </div>
      <ButtonBack />
    </>
  )
}