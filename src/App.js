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

  const loadFavorites = () => {
    fetch(`http://localhost:5000/favorites`)
      .then((response) => response.json())
      .then((result) => {
        setFavoriteProducts(result);
      })
      .catch((error) => console.log(error))
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

const addToFavorites = async (product) => {
  try {
    console.log('=== DEBUG INFO ===');
    console.log('Product ID:', product.id);
    console.log('Product:', product);
    
    const response = await fetch('http://localhost:5000/favorites');
    if (!response.ok) {
      throw new Error('Failed to fetch favorites');
    }
    const currentFavorites = await response.json();
    
    console.log('All favorites from server:', currentFavorites);
    console.log('Favorites IDs:', currentFavorites.map(f => f.id));
    
    const favoriteItem = currentFavorites.find((el) => el.id === product.id);
    
    console.log('Found favorite item:', favoriteItem);
    
    if (favoriteItem) {
      console.log('Attempting to delete favorite with ID:', favoriteItem.id);
      
      const deleteResponse = await fetch(`http://localhost:5000/favorites/${favoriteItem.id}`, {
        method: "DELETE",
      });
      
      if (!deleteResponse.ok) {
        console.error('Delete failed with status:', deleteResponse.status);
        console.error('URL attempted:', `http://localhost:5000/favorites/${favoriteItem.id}`);
        throw new Error('Failed to delete favorite');
      }
      
      console.log('Successfully removed from favorites');
      loadFavorites();
    } else {
      console.log('Product not in favorites, adding...');
      const addResponse = await fetch('http://localhost:5000/favorites', {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!addResponse.ok) {
        throw new Error('Failed to add favorite');
      }
      
      console.log('Successfully added to favorites');
      loadFavorites();
    }
  } catch (error) {
    console.error('Error in addToFavorites:', error);
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
