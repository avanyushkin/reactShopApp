import { Link } from 'react-router-dom'
import './index.scss'

export const ButtonBack = () => {
    return(
        <>
          <h2 className='buttonBack'>
            <Link to='/'>
                <div>Назад на главную</div>
            </Link>
          </h2>
        </>
    );
}