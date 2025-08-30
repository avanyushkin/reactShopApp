import { Link } from 'react-router-dom';
import Card from './Components/Card.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice.js';
import { addPost } from './postSlice.js';

function FavoritePage( {favoriteProducts} ) {
  const count = useSelector((state) => state.counter.value);
  const posts = useSelector((state) => state.posts.posts);
  

  const dispatch = useDispatch();
  console.log(posts);
  return (
    <>
      <h1>Favorite Page</h1>
      <button onClick = {() => dispatch(addPost('new post'))}>add</button>
      {posts.map((i) => (<div key={i}>i</div>))}
      
      <div className='card-block'>
      {favoriteProducts.length ?
      (favoriteProducts.map((el) => {
          return (
            <Card
              product={el} />
          );
        })) : <h1>Товаров нет</h1>}
        </div>
      <Link to='/'>
        <div>Назад на главную</div>
      </Link>
    </>
  );
}

export default FavoritePage;