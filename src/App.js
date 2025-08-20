import './App.css'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Main from './Main.jsx'
import FavoritePage from './FavoritePage.jsx'

const products = [{
  id: 1,
  brand: 'samsung',
  name: 'samsung s25 ultra',
  price: 300,
  category:
    'phone',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/71yUVEekQWL._AC_SX679_.jpg'
},
{
  id: 2,
  brand: 'apple',
  name: 'iphone 13',
  price: 400,
  category: 'phone',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/61VuVU94RnL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
},
{
  id: 3,
  brand: 'apple',
  name: 'iphone 14 pro',
  price: 1000,
  category: 'phone',
  rating: 4,
  img: 'https://m.media-amazon.com/images/I/41al5-lNvML._AC_SX679_.jpg'
},
{
  id: 4,
  brand: 'HP',
  name: 'HP 14',
  price: 900,
  category: 'laptop',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SX466_.jpg'
},
{
  id: 5,
  brand: 'Philips',
  name: 'Philips 22 Class Thin Full HD',
  price: 1300,
  category: 'monitor',
  rating: 4,
  img: 'https://m.media-amazon.com/images/I/71RTruFctrL._AC_SX466_.jpg'
},
{
  id: 6,
  brand: 'samsung',
  name: 'samsung s25 ultra',
  price: 300,
  category:
    'phone',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/71yUVEekQWL._AC_SX679_.jpg'
},
{
  id: 7,
  brand: 'apple',
  name: 'iphone 13',
  price: 400,
  category: 'phone',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/61VuVU94RnL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
},
{
  id: 8,
  brand: 'apple',
  name: 'iphone 14 pro',
  price: 1000,
  category: 'phone',
  rating: 4,
  img: 'https://m.media-amazon.com/images/I/41al5-lNvML._AC_SX679_.jpg'
},
{
  id: 9,
  brand: 'HP',
  name: 'HP 14',
  price: 900,
  category: 'laptop',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SX466_.jpg'
},
{
  id: 10,
  brand: 'Philips',
  name: 'Philips 22 Class Thin Full HD',
  price: 1300,
  category: 'monitor',
  rating: 4,
  img: 'https://m.media-amazon.com/images/I/71RTruFctrL._AC_SX466_.jpg'
},
{
  id: 11,
  brand: 'apple',
  name: 'iphone 14 pro',
  price: 1000,
  category: 'phone',
  rating: 4,
  img: 'https://m.media-amazon.com/images/I/41al5-lNvML._AC_SX679_.jpg'
},
{
  id: 12,
  brand: 'HP',
  name: 'HP 14',
  price: 900,
  category: 'laptop',
  rating: 5,
  img: 'https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SX466_.jpg'
},

];

function App() {
  const [filteredName, setFilteredName] = useState('');
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const [category, setCategory] = useState('');
  const [favoriteIds, setFavoriteIds] = useState([]);

  let filteredProducts = [...products];

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

  const addToFavorites = (id) => {
    // console.log(id);
    if (!favoriteIds.includes(id)) {
      setFavoriteIds([...favoriteIds, id]);
    } else {
      setFavoriteIds(favoriteIds.filter((it) => it !== id));
    }
  }
  console.log(favoriteIds);

  /*
  if (filteredName !== '') {
    filteredProducts = products.filter((it) => it.name.includes(filteredName));
  }
  */

  filteredProducts = products.filter(
    (it) => it.category.includes(category) && it.name.includes(filteredName)
  );

  const favoriteProducts = products.filter(product => favoriteIds.includes(product.id));

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
          filteredProducts={filteredProducts}
          favoriteIds={favoriteIds}
          addToFavorites={addToFavorites} />
        </>}/>
        
        <Route path='/favorite' element={<>
          <FavoritePage favoriteProducts={favoriteProducts} />
        </>}/>
        
      </Routes>
    </>
  );
}

export default App;
