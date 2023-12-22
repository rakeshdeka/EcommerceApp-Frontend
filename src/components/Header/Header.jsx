
import { GiClothes } from "react-icons/gi";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
function Header() {
  return (
  <div className="h-20 flex justify-between fixed w-full bg-[#008000a8] z-10">
    
       <Link to="/" className="w-[15%] border-[red] flex justify-center items-center">
        <GiClothes className="w-10 h-10 text-black" />
      </Link>
    
    <div className="flex gap-2 items-center justify-center sm:justify-end w-[80%]">
        <div className="flex items-center  sm:w-[50%]">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-md focus:outline-none w-[50%]"
          />
          <select
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
          </button>
        </div>
        <div className="sm:hidden border border-black p-2 mr-2 ">
          <GiHamburgerMenu className="text-xl" onClick={HamburgerMenu} />

        </div>
        <div className="hidden sm:justify-center items-center  sm:flex sm:gap-2 pr-2">
        <Link to="/wishlist">
          <BsFillBagHeartFill className="w-8 h-8 text-black hover:text-gray-300 cursor-pointer md:w-10 md:h-10" />
        </Link>
        <Link to="/cart">
          <BsCart4 className="w-8 h-8 text-black hover:text-gray-300 cursor-pointer md:w-10 md:h-10" />
        </Link>
        </div>
      </div>
    


  </div>
  );
}

export default Header;
