import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";

function Footer() {
  return (
    <div className=" text-xs fixed bottom-0 w-full h-10 bg-slate-100 flex justify-center items-center sm:hidden">
     <div className="w-[50%] h-full flex justify-center items-center">
      <div><BiSortAlt2 /></div>
      <div>sort</div>

     </div>
     <div className="w-[50%] h-full flex justify-center items-center">
      <div><FaFilter /></div>
      <div>Filter</div>
     </div>
    </div>
  );
}

export default Footer;
