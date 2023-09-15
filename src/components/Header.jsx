import pardaLogo from '../assets/prada-logo.png';
import Cart from './Cart';
import AboutUs from './AboutUs'
import { Link } from 'react-router-dom';
const Logo = () => (
    <Link to='/'>

        <img className='w-1/1 h-1/2 ml-4 mt-4'
            src={pardaLogo}
            alt='PardaLogo'
            title='Parda Logo'
        />
    </Link>


);



function Header() {
    return (
        <>
            <div className=" h-24 w-auto bg-custom-purple flex justify-between">
                <Logo />
                <div className=' flex gap-4 mt-4'>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div className='mr-4  ' >
                        <Link to="/cart">Cart</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header;