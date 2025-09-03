import Header from '../../Components/header/index.jsx'
import Card from '../../Components/productCard/index.jsx'
import Navbar from '../../Components/navbar/index.jsx'
import { useState } from "react"
import { useSelector } from "react-redux"
import Sort from '../../Components/Sort/Sort.jsx'

function Main( {
    sort,
    handleChangeSort,
    handleChangeCategory,
    category,
    handleInput,
  } ) {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const {products, loading} = useSelector((state) => state.products);

    const handleMenu = () => {
      setIsOpenedMenu(!isOpenedMenu);
    }
  
  return (
    <>
    <Header handleInput={handleInput} handleMenu={handleMenu} />

    <Sort handleChangeSort={handleChangeSort} sort={sort}/>

    {loading && <h1>Loading...</h1>}
      {isOpenedMenu && (
        <Navbar handleChangeCategory={handleChangeCategory} category={category}/>
      )}
      <div className='card-block'>
        {products.map((el) => {
          return (
            <Card
              key={el.id}
              product={el}
              />
          );
        })}
      </div>
    </>
  );
}

export default Main;