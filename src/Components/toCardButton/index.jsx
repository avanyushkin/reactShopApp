import { ShoppingCartOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart } from '../../pages/cart/slices'
import { addToCart } from '../../pages/cart/slices'

export const ToCartButton = ( {product} ) => {

    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    

  const onClickAddToCart = () => {
        if (cartItems.some((el) => el.id === product.id)) {
          dispatch(deleteFromCart(product.id))
        } else {
          dispatch(addToCart(product));
        }
      }
    
     const color = cartItems.some(item => product.id === item.id) ? 'green' : '#c7c7c7';

  return (
    <>
        <ShoppingCartOutlined 
            onClick={onClickAddToCart}
            style={{fontSize: '40px', color: color}}/>
    </>
  );
}