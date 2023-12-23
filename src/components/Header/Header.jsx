
import { GiClothes } from "react-icons/gi";
// import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";
// import { FaSnowman } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
// import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
// import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  return (
  <div className="h-20 flex justify-between fixed w-full bg-[#008000a8] z-10 text-sm">
    
       <Link to="/" className="w-[15%]  flex justify-center items-center">
        <GiClothes className="w-10 h-10 text-black" />
      </Link>
    
    <div className="  flex gap-2 justify-end w-[80%]">
        <div className="hidden sm:flex items-center  w-[80%] sm:w-[40%]">
          <input
            type="text"
            placeholder=" 👚Search Products...."
            className="p-2 rounded-md focus:outline-none w-full"
          />
          {/* <select
            className="p-2 border border-gray-300 rounded-md ml-2 w-[40%]"
          >
            
            <option >categories</option>
             <option value="shirts">Shirts</option>
              <option value="jeans">jeans</option>
              <option value="hoodies">hoodies</option>
           
          </select>
          <button
            className=" hidden sm:block w-[20%] text-sm sm:text-md pt-2 pb-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600"
          >
            Search
          </button> */}
         

        </div>
        <div>
          
        </div>
       {/* <div className="sm:hidden border border-black p-2 w-[12%] flex justify-center cursor-pointer">
         
           

        </div> */}
        
        <div className=" justify-center items-center flex gap-2 pr-2">
          <CiSearch className="sm:hidden w-8 h-6 text-black hover:text-gray-300 cursor-pointer" />

          {/* <FaSearch  /> */}
          <Link to="/user">
            <CiUser className=" w-8 h-6 text-black hover:text-[blue] cursor-pointer" />

          {/* <FaSnowman  /> */}
        </Link>
        <Link to="/wishlist">
          <CiHeart className=" w-8 h-6 text-black hover:text-[red] cursor-pointer" />
          {/* <BsFillBagHeartFill  /> */}
        </Link>
        <Link to="/cart">
          <CiBag1 className="w-6 h-6 text-black hover:text-gray-300 cursor-pointer"/>

          {/* <BsCart4  /> */}
        </Link>
        </div>
        {/* <div className="sm:hidden border border-black p-2 w-[12%] flex justify-center items-center cursor-pointer">
          <RxHamburgerMenu className="text-xl" onClick={HamburgerMenu} />

        </div> */}
      </div>
    


  </div>
  );
}

export default Header;
