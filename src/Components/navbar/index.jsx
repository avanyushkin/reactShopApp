import { Flex, Input } from 'antd';
import './index.scss'

function Navbar( {handleChangeCategory, category, setPrice, price} ) {
    return (
        <>
            <div className='navbar'>
                <div onClick={() => handleChangeCategory('phone')}
                    className={category === 'phone' ? 'active' : ''}>Phones
                </div>
                <div onClick={() => handleChangeCategory('laptop')}
                    className={category === 'laptop' ? 'active' : ''}>Laptops
                </div>
                <div onClick={() => handleChangeCategory('monitor')}
                    className={category === 'monitor' ? 'active' : ''}>Monitors
                </div>
            </div>
            <div className='priceBlock'>
                <h3>Cost</h3>
                <Flex gap="middle">
                    <Input onChange={(e) => setPrice({...price, priceFrom: e.target.value})} />-
                    <Input onChange={(e) => setPrice({...price, priceTo: e.target.value})} />
                </Flex>
            </div>
        </>
    );
}

export default Navbar;