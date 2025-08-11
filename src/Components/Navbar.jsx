
function Navbar( {handleChangeCategory, category} ) {
    return (
        <>
            <div className='navbar'>
                <div onClick={() => handleChangeCategory('phone')}
                    className={category === 'phone' && 'active'}>Phones
                </div>
                <div onClick={() => handleChangeCategory('laptop')}
                    className={category === 'laptop' && 'active'}>Laptops
                </div>
                <div onClick={() => handleChangeCategory('monitor')}
                    classNAme={category === 'monitor' && 'active'}>Monitors
                </div>
            </div>
        </>
    );
}

export default Navbar;