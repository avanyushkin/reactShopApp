import FavoriteIcon from './FavoriteIcon'
import { Link } from 'react-router-dom'

function Header( {handleInput, handleMenu} ) {
  return (
    <>
      <div className='header'>
        <div><img width={60}
               src="data:image/png;base64,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"
               alt='logo-image' />
        </div>
        <div onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z"></path>
</svg>
        </div>
        <input onChange={(e) => handleInput(e.target.value)} />
        <Link to='/favorite'>
          <div className='favoriteIconHeader'>
              <FavoriteIcon />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;