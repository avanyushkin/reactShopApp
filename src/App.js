import './App.css'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Main from './Main.jsx'
import FavoritePage from './FavoritePage.jsx'
import { fetchFavorites } from './favoritesSlice.js'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filteredName, setFilteredName] = useState('');
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const favorites = useSelector((state) => state.favorites.favorites);
  
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
//  const [favoriteIds, setFavoriteIds] = useState([]);

//  useEffect(() => {
//    setLoading(true);
//    fetch(`http://localhost:5000/products?name_like=${filteredName}&category_like=${category}`)
//      .then((response) => response.json())
//      .then((result) => {setLoading(false)
//                         setProducts(result)
//                        })
//      .catch(error => console.log(error))
//  }, [filteredName, category]);

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:5000/products?q=${filteredName}&category_like=${category}`
    )
      .then((response) => response.json())
      .then((result)=> {
        setLoading(false)
        setProducts(result)
      })
      .catch((error) => console.log(error))
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

const addToFavorites = (product) => {
  if (favorites.some((el) => el.id === product.id)) {
    fetch(`http://localhost:5000/favorites/${product.id}`, {
      method: "DELETE",
    }).then(() => dispatch(fetchFavorites()))
  } else {
    fetch('http://localhost:5000/favorites', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => dispatch(fetchFavorites()))
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
          addToFavorites={addToFavorites}
          loading={loading} />
        </>}/>
        
        <Route path='/favorite' element={<>
          <FavoritePage favoriteProducts={favorites} />
        </>}/>
        
      </Routes>
    </>
  );
}

export default App;
