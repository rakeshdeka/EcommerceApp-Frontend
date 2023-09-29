
import hannahLogo from '../../assets/dummy-png.png';
import shoppingCart from '../../assets/shopping_cart.svg';
import { BsCart4 } from 'react-icons/bs'
import { BsFillBagHeartFill } from 'react-icons/bs'
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
                <div className=' flex gap-4 mt-4  h-8 justify-center items-center '>
                    <div className='w-8 h-8'>
                        <Link to="/wishlist"><BsFillBagHeartFill className='w-8 h-8 hover:text-gray-700 cursor-pointer' /></Link>
                    </div>
                    <div className='   w-8 h-8 ' >
                        <Link to="/cart"> <BsCart4 className='w-8 h-8 hover:text-gray-700' /> </Link>
                    </div>
                    <div className='mr-4 '>
                        <Link to="/about" className='border border-black rounded-md pl-1 pr-1 text-center text-white bg-black font-semibold hover:text-gray-300'>About</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header;