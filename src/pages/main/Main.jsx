import Header from '../../Components/Header.jsx'
import Card from '../../Components/Card.jsx'
import Navbar from '../../Components/Navbar.jsx'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, deleteFavorites } from '../favorite/favoritesSlice.js'
import Sort from '../../Components/Sort/Sort.jsx'

function Main( {
    sort,
    handleChangeSort,
    handleChangeCategory,
    category,
    handleInput,
  } ) {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    const favorites = useSelector((state) => state.favorites.favorites);
    const {products, loading} = useSelector((state) => state.products);

    const dispatch = useDispatch();
    

    const handleMenu = () => {
      // console.log('in handleMenu');
      setIsOpenedMenu(!isOpenedMenu);
    }

    const onClickFavorites = (product) => {
      if (favorites.some((el) => el.id === product.id)) {
        dispatch(deleteFavorites(product.id))
      } else {
        dispatch(addToFavorites(product));
      }
    }

  
  return (
    <>
    <Header handleInput={handleInput} handleMenu={handleMenu} />

    <Sort handleChangeSort={handleChangeSort} sort={sort}/>

    {loading && <h1>Loading...</h1>}
      {isOpenedMenu && (
        <Navbar handleChangeCategory={handleChangeCategory} category={category}/>
      )}
      <div className='card-block'>
        {products.map((el) => {
          return (
            <Card
              key={el.id}
              favoriteIds={favorites.map((i) => i.id)}
              onClickFavorites={onClickFavorites}
              product={el}
              />
          );
        })}
      </div>
    </>
  );
}

export default Main;