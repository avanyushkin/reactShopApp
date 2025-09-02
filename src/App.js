import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main.jsx'
import FavoritePage from './pages/favorite/index.jsx'
import { fetchProducts } from './pages/main/productsSlice.js'
import { useDispatch } from 'react-redux'
import { fetchFavorites } from './pages/favorite/favoritesSlice.js'
import { CartPage } from './pages/cart/index.jsx'
import { loadCart } from './pages/cart/slices/index.js'
import { useSelector } from 'react-redux'
import { addToFavorites, deleteFavorites } from './pages/favorite/favoritesSlice.js'
import Product from './pages/product/index.jsx'


function App() {
  const [filteredName, setFilteredName] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('asc');
  const favorites = useSelector((state) => state.favorites.favorites);
    
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchProducts({ filteredName: filteredName, category: category, sort: sort }))
  }, [filteredName, category, sort])

  useEffect(() => {
    dispatch(fetchFavorites());
    dispatch(loadCart());
  }, [])

  const handleInput = (text) => {
    //console.log(text);
    setFilteredName(text)
  }


  const handleChangeCategory = (prop) => {
    // console.log(prop);
    if (prop === category) {
      setCategory('');
    } else {
      setCategory(prop);
    }
  }

  const handleChangeSort = (order) => {
    console.log(order);
    if (sort === order) {
      setSort('');
      return;
    }

    setSort(order);
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
          onClickFavorites={onClickFavorites}
          sort={sort}
          handleChangeSort={handleChangeSort}
          handleChangeCategory={handleChangeCategory}
          category={category}
          handleInput={handleInput}
          />
        </>}/>
        
        <Route path='/favorite' element={
          <>
            <FavoritePage />
          </>
        }/>

        <Route path='/product/:id' element={
          <>
            <Product />
          </>
        }/>

        <Route path='/cart' element={
          <>
            <CartPage />
          </>
        }/>
        
      </Routes>
    </>
  );
}

export default App;
