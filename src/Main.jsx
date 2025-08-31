import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Navbar from './Components/Navbar.jsx'

function Main( {
    isOpenedMenu,
    handleChangeCategory,
    category,
    handleInput,
    handleMenu,
    products,
    favoriteIds,
    onClickFavorites,
    loading} ) {
  return (
    <>
    <Header handleInput={handleInput} handleMenu={handleMenu} />
    {loading && <h1>Loading...</h1>}
      {isOpenedMenu && (
        <Navbar handleChangeCategory={handleChangeCategory} category={category}/>
      )}
      <div className='card-block'>
        {products.map((el) => {
          return (
            <Card
              key={el.id}
              favoriteIds={favoriteIds}
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