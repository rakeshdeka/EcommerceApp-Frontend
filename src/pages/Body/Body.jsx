
import { FaGithub } from "react-icons/fa";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Body() {


  

  return (
    <div>
      <Header/>


    {/* <div className="flex relative min-h-screen pt-[45px] sm:pt-[80px] ">
      <ProductFilter className="" />
      <div className="flex-grow relative ">
   
        <ProductCard cardPadding="sm:pl-[170px]" />
        <Footer/>
       
        <div className="absolute bottom-4 left-4 flex items-center text-gray-500 text-sm space-x-2">
          <FaGithub className="w-6 h-6 cursor-pointer" />
          <span>Developed by Rakesh</span>
        </div>
      </div>
    </div> */}

    <div className=" h-screen flex justify-center items-center text-xl text-slate-400 font-semibold">
      Landing Page coming soon

    </div>
        </div>
  );
}

export default Body;
