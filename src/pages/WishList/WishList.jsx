import React from 'react'
// import remove from '../../assets/square_remove.svg';
import { CiSquareRemove } from "react-icons/ci"
// import { BsCart4 } from "react-icons/bs"
const WishList = () => {
    return (
        <>
            <div className="border-solid border border-gray-300 w-1/2 flex flex-col justify-center mx-auto my-auto rounded-lg mt-1 mb-1">
                <div>
                    <h1 className="font-extrabold text-xl text-center">Wishlist</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit praesentium incidunt.</p>
                </div>

                <div>

                    <div className="flex gap-1 border border-gray-300 ">
                        <div className='w-1/4 border-solid border-r border-gray-300 flex justify-center items-center'>
                            <img className="bg-slate-300 w-16 h-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQ2DtlRhINmTAOGixyDU0bNUwVBxKJDAf2A&usqp=CAU" alt="ii" />
                        </div>
                        <div className=" w-3/4 flex place-items-end space-x-3 justify-center items-center">
                            <div className="ml-1 mb-1 font-bold">eeeeeeee</div>
                            <div className="border-solid border border-gray-300 mt-1 ml-1 font-medium flex w-48 justify-center rounded-md">
                                <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer" >+</div>
                                <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer" >1</div>
                                <div className="border-solid p-1 w-10 text-center cursor-pointer">-</div>
                            </div>
                            <div className="ml-auto mr-1 mb-1 font-bold">333</div>
                            {/* <img className="cursor-pointe" src={remove} alt="remove_icon" /> */}
                            <CiSquareRemove className=" w-8 h-8 cursor-pointer text-[red]" />
                            {/* <BsCart4 className='cursor-pointer' /> */}
                            <p className='text-sm border border-black rounded-md p-1 hover:bg-black hover:text-white cursor-pointer'>add to cart</p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end border-t border-gray-300">
                    <p className="font-bold mr-1">Total amount: ₹00000</p>

                </div>

                <div className="flex justify-end mr-2">
                    <button className="border-solid border border-black p-1 rounded-md mb-1 hover:bg-black hover:text-white">Back to shop</button>
                    {/* <button className="border-solid border border-black  p-1 mr-1 rounded-md mb-1">
                        Checkout
                    </button> */}

                </div>


            </div>


        </>
    )
}

export default WishList