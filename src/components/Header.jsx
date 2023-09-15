import pardaLogo from '../assets/prada-logo.png';
import Cart from './Cart';
import AboutUs from './AboutUs'
const Logo = () => (
    <img className='w-1/1 h-1/2 ml-4'
        src={pardaLogo}
        alt='PardaLogo'
        title='Parda Logo'
    />


);



function Header() {
    return (
        <>
            <div className=" h-24 w-auto bg-amber-900 flex justify-between ">
                <Logo />
                <div className=' flex gap-4 '>
                    <AboutUs />
                    <Cart />
                </div>

            </div>
        </>
    )
}

export default Header;