import './App.css'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Main from './Main.jsx'
import FavoritePage from './FavoritePage.jsx'
import { fetchProducts } from './productsSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavorites, addToFavorites, deleteFavorites } from './favoritesSlice.js'

function App() {
  // const [products, setProducts] = useState([]);
  const [filteredName, setFilteredName] = useState('');
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [category, setCategory] = useState('');

  const favorites = useSelector((state) => state.favorites.favorites);
  const products = useSelector((state) => state.products.products);
  const productsLoading = useSelector((state) => state.products.loading);


  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchProducts({ filteredName: filteredName, category: category }))
  }, [filteredName, category])

  useEffect(() => {
    // loadFavorites()
    dispatch(fetchFavorites());
  }, [])

  const handleInput = (text) => {
    //console.log(text);
    setFilteredName(text)
  }

  const handleMenu = () => {
    // console.log('in handleMenu');
    setIsOpenedMenu(!isOpenedMenu);
  }

  const handleChangeCategory = (prop) => {
    // console.log(prop);
    if (prop === category) {
      setCategory('');
    } else {
      setCategory(prop);
    }
  }

const onClickFavorites = (product) => {
  if (favorites.some((el) => el.id === product.id)) {
    dispatch(deleteFavorites(product.id))
  } else {
    dispatch(addToFavorites(product));
  }
}
//  console.log(favoriteIds);

  // const favoriteProducts = products.filter(product => favoriteIds.includes(product.id));

  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <Main
          isOpenedMenu={isOpenedMenu}
          handleChangeCategory={handleChangeCategory}
          category={category}
          handleInput={handleInput}
          handleMenu={handleMenu}
          products={products}
//          favoriteIds={favoriteIds}
          favoriteIds={favorites.map(i => i.id)}
          onClickFavorites={onClickFavorites}
          loading={productsLoading} />
        </>}/>
        
        <Route path='/favorite' element={<>
          <FavoritePage favoriteProducts={favorites} />
        </>}/>
        
      </Routes>
    </>
  );
}

export default App;
