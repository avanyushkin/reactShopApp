import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main.jsx'
import FavoritePage from './pages/favorite/FavoritePage.jsx'
import { fetchProducts } from './pages/main/productsSlice.js'
import { useDispatch } from 'react-redux'
import { fetchFavorites } from './pages/favorite/favoritesSlice.js'

function App() {
  // const [products, setProducts] = useState([]);
  const [filteredName, setFilteredName] = useState('');
  const [category, setCategory] = useState('');
  
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


  const handleChangeCategory = (prop) => {
    // console.log(prop);
    if (prop === category) {
      setCategory('');
    } else {
      setCategory(prop);
    }
  }


//  console.log(favoriteIds);

  // const favoriteProducts = products.filter(product => favoriteIds.includes(product.id));

  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <Main
          handleChangeCategory={handleChangeCategory}
          category={category}
          handleInput={handleInput}
          />
        </>}/>
        
        <Route path='/favorite' element={<>
          <FavoritePage />
        </>}/>
        
      </Routes>
    </>
  );
}

export default App;
