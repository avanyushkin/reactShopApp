import { useSelector } from 'react-redux'
import { ButtonBack } from '../../Components/buttonBack'
import Card from '../../Components/Card'

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cart)
  return (
    <>
      <div className='card-block'>
      {cart.length ?
      (cart.map((el) => {
          return (
            <Card
              product={el} />
          );
        })) : <h1>Товаров нет</h1>}
      </div>
      <ButtonBack />
    </>
  )
}