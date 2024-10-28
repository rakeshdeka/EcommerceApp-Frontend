
import {  FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link to='/'>
       
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" // Replace with the actual logo image
          alt="Logo"
          className="h-10"
        />
         </Link>
        <nav className="flex space-x-6 text-gray-700 text-sm font-bold">
          <a href="#" className="hover:text-gray-900">MEN</a>
          <a href="#" className="hover:text-gray-900">WOMEN</a>
          <a href="#" className="hover:text-gray-900">KIDS</a>
          <a href="#" className="hover:text-gray-900">HOME & LIVING</a>
          <a href="#" className="hover:text-gray-900">BEAUTY</a>
          <a href="#" className="text-pink-500 font-bold relative">STUDIO <span className=" absolute -top-1 -right-8 text-xs text-pink-500">NEW</span></a>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className=" w-96 px-10 py-2 rounded-md focus:outline-none bg-[#F5F5F6] focus:bg-white focus:ring-1 text-sm focus:ring-slate-200"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        <Link to='/my/dashboard' className="flex flex-col items-center cursor-pointer hover:text-gray-900">
          <FiUser className="text-xl" />
          <span className="text-xs font-bold">Profile</span>
        </Link>
        <Link to='/wishlist' className="flex flex-col items-center cursor-pointer hover:text-gray-900">
          <CiHeart  className="text-xl" />
          <span className="text-xs font-bold">Wishlist</span>
        </Link>
        <Link to='/checkout/bag' className="relative flex flex-col items-center cursor-pointer hover:text-gray-900">
          <HiOutlineShoppingBag className=" text-xl" />
          <span className="text-xs font-bold">Bag</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
