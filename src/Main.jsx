import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Navbar from './Components/Navbar.jsx'

function Main( {
    isOpenedMenu,
    handleChangeCategory,
    category,
    handleInput,
    handleMenu,
    filteredProducts,
    favoriteIds,
    addToFavorites} ) {
  return (
    <>
    <Header handleInput={handleInput} handleMenu={handleMenu} />
      {isOpenedMenu && (
        <Navbar handleChangeCategory={handleChangeCategory} category={category}/>
      )}
      <div className='card-block'>
        {filteredProducts.map((el) => {
          return (
            <Card
              favoriteIds={favoriteIds}
              addToFavorites={addToFavorites}
              id={el.id}
              brand={el.brand}
              name={el.name}
              price={el.price}
              rating={el.rating}
              img={el.img} />
          );
        })}
      </div>
    </>
  );
}

export default Main;