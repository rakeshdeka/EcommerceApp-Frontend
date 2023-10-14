
import { useCart } from "../../utils/Contexts/CartContext";
import { Link } from "react-router-dom";
// import remove from '../../assets/square_remove.svg';
import { CiSquareRemove } from "react-icons/ci"
function Cart() {

    const { item } = useCart();

    return (
        <>
            <div className="border-solid border border-gray-300 w-1/2 flex flex-col justify-center mx-auto my-auto rounded-lg mt-1 mb-1">
                <div>
                    <h1 className="font-extrabold text-xl text-center">Cart</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit praesentium incidunt.</p>
                </div>

                <div>
                    {item.map((item, index) => (
                        <div key={index} className="flex gap-1 border border-gray-300 ">
                            <div className='w-1/4 border-solid border-r border-gray-300 flex justify-center items-center'>
                                <img className="bg-slate-300 w-16 h-16 " src={item?.imageSrc} alt="" />
                            </div>
                            <div className=" w-3/4 flex place-items-end space-x-3 justify-center items-center">
                                <div className="ml-1 mb-1 font-bold">{item?.name}</div>
                                <div className="border-solid border border-gray-300 mt-1 ml-1 font-medium flex w-48 justify-center rounded-md">
                                    <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer" >+</div>
                                    <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer" >1</div>
                                    <div className="border-solid p-1 w-10 text-center cursor-pointer">-</div>
                                </div>
                                <div className="ml-auto mr-1 mb-1 font-bold">{item?.price}</div>
                                {/* <img className="cursor-pointe" src={remove} alt="remove_icon" /> */}
                                <CiSquareRemove className=" h-8 w-8 cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end border-t border-gray-300">
                    <p className="font-bold mr-1">Total amount: ₹00000</p>

                </div>

                <div className="flex justify-end gap-4">
                    <Link to='/'> <button className="border-solid border border-black p-1 rounded-md mb-1 hover:bg-black hover:text-white">Back to shop</button></Link>
                    <Link to='/checkout'> <button className="border-solid border border-black  p-1 mr-1 rounded-md mb-1 hover:bg-black hover:text-white">
                        Checkout
                    </button>
                    </Link>
                </div>


            </div>



        </>
    )
}
export default Cart;