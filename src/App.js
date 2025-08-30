import './App.css'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Main from './Main.jsx'
import FavoritePage from './FavoritePage.jsx'

function App() {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filteredName, setFilteredName] = useState('');
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const [category, setCategory] = useState('');
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

  const loadFavorites = async () => {
    /* fetch(`http://localhost:5000/favorites`)
      .then((response) => response.json())
      .then((result) => {
        setFavoriteProducts(result);
      })
      .catch((error) => console.log(error)) */

      try {
        const response = await fetch('http://localhost:5000/favorites');
        const result = await response.json();
        setFavoriteProducts(result);
        console.log(result);
      
      } catch(err) {
        console.log(err);
      }

  }

  useEffect(() => {
    loadFavorites()
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
  if (favoriteProducts.some((el) => el.id === product.id)) {
    fetch(`http://localhost:5000/favorites/${product.id}`, {
      method: "DELETE",
    }).then((result) => loadFavorites())
  } else {
    fetch('http://localhost:5000/favorites', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => loadFavorites())
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
          favoriteIds={favoriteProducts.map(i => i.id)}
          addToFavorites={addToFavorites}
          loading={loading} />
        </>}/>
        
        <Route path='/favorite' element={<>
          <FavoritePage favoriteProducts={favoriteProducts} />
        </>}/>
        
      </Routes>
    </>
  );
}

export default App;
