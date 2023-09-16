import hannahLogo from '../assets/dummy-png.png';
import shoppingCart from '../assets/shopping_cart.svg'
import { Link } from 'react-router-dom';
const Logo = () => (
    <Link to='/'>

        <img className='w-1/1 h-1/2 ml-4 mt-4'
            src={hannahLogo}
            alt='hannahLogo'
            title='Hannah Logo'
        />
    </Link>


);



function Header() {
    return (
        <>
            <div className=" h-24 w-auto bg-custom-purple flex justify-between">
                <Logo />
                <div className=' flex gap-4 mt-4'>
                    <div  >
                        <Link to="/cart"><img src={shoppingCart} alt="cart" /> </Link>
                    </div>
                    <div className='mr-4  '>
                        <Link to="/about">About</Link>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Header;