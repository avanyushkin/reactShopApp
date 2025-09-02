import { useDispatch } from 'react-redux'
import './index.css'
import { updateProductCart } from './slices/index'
import { DeleteOutlined } from '@ant-design/icons'
import { deleteFromCart } from './slices/index'
import { Link } from 'react-router-dom'

function CartItem({ product }) {
  const {name, brand, price, img, id, quantity} = product;  
  const dispatch = useDispatch();

  const handleChangePlusQuantity = () => {
    const newQuantity = quantity + 1;
    const newProduct = {...product, quantity: newQuantity};

    dispatch(updateProductCart(newProduct));
  }

  const handleChangeMinusQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const newProduct = {...product, quantity: newQuantity};
      dispatch(updateProductCart(newProduct));
    }
  }

  return (
    <>
      <div className='cartItemBlock'>
        <Link to={`/product/${id}`}>
        <img width={100} height={100} src={img} alt='image' />
        </Link>
        <Link to={`/product/${id}`}>
        <div className='cartItemTitle'>
            <h3>{brand}</h3>
            <div>{name}</div>
        </div> 
        </Link>
        <div className='cartItemPriceWrapper'>
          <div className='cartItemQuantity'>
            <button onClick={handleChangeMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleChangePlusQuantity}>+</button>
          </div>
          <div className='cartItemPrice'>{price * quantity}</div>
        </div>
        <DeleteOutlined onClick={() => dispatch(deleteFromCart(id))} style={{ fontSize: '27px', color: 'red'}}/>
      </div>
    </>  
  );
}

export default CartItem;