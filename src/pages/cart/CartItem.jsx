import './index.css'

function CartItem({ product, onClickFavorites }) {
  const {name, brand, price, img, rating, id} = product;  

  let quantity = 1;
  
  return (
    <>
      <div className='cartItemBlock'>
        <img width={100} height={100} src={img} alt='image' />
        <div className='cartItemTitle'>
            <h3>{brand}</h3>
            <div>{name}</div>
        </div> 
        <div className='cartItemPriceWrapper'>
          <div className='cartItemQuantity'>
            <button>+</button>
            <span>{quantity}</span>
            <button>-</button>
          </div>
          <div className='cartItemPrice'>{price}</div>
        </div>
        
      </div>
    </>  
  );
}

export default CartItem;