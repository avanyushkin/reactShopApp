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
import Product from './pages/product/index.jsx'


function App() {
  const [filteredName, setFilteredName] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('asc');
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState({priceFrom: null, priceTo: null});
  console.log(price);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1)
  }, [filteredName, category, sort, price])

  useEffect(() => {
      dispatch(fetchProducts({ filteredName: filteredName, category: category, sort: sort, price: price, page: page}))
  }, [filteredName, category, sort, price, page])

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

  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <Main
          setPrice={setPrice}
          price={price}
          sort={sort}
          handleChangeSort={handleChangeSort}
          handleChangeCategory={handleChangeCategory}
          category={category}
          handleInput={handleInput}
          setPage={setPage}
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
