import { useCart } from "../../utils/Contexts/CartContext";
import { Link } from "react-router-dom";
import { CiSquareRemove } from "react-icons/ci";

function Cart() {
  const { item } = useCart();

  return (
    <div className="h-full flex flex-col justify-center items-center relative pt-[80px] w-full">
      <div className="border-b border-black w-full p-4">
        <h1 className="text-xl font-semibold text-center ">Your Cart</h1>
        </div>
    <div className="max-w-2xl mx-auto p-4 border border-gray-300 rounded-lg mt-4">
     
     

      {item.map((item, index) => (
        <div key={index} className="flex items-center border border-gray-300 p-4 mb-4">
          <img className="w-16 h-16 object-cover mr-4" src={item?.imageSrc} alt="" />

          <div className="flex-grow">
            <div className="font-semibold mb-1">{item?.name}</div>
            <div className="flex items-center space-x-4">
              <div className="border border-gray-300 p-1 cursor-pointer">+</div>
              <div className="border border-gray-300 p-1">1</div>
              <div className="border border-gray-300 p-1 cursor-pointer">-</div>
            </div>
          </div>

          <div className="flex items-center ml-4">
            <div className="font-semibold mr-4">{item?.price}</div>
            <CiSquareRemove className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      ))}

      <div className="flex justify-end border-t border-gray-300 mt-4 pt-4">
        <p className="font-semibold">Total amount: ₹00000</p>
      </div>

      <div className="flex justify-end mt-4 space-x-4">
        <Link to='/'>
          <button className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded-md">
            Back to Shop
          </button>
        </Link>
        <Link to='/checkout'>
          <button className="bg-black text-white py-1 px-2 rounded-md">
            Checkout
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Cart;
