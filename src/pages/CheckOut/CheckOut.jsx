
import { RxCross2 } from "react-icons/rx"

const CheckOut = () => {
    return (
        <>
            <div className="grid grid-cols-2 relative pt-[80px] text-[.6rem] sm:text-sm ">
                <div className=" p-2 grid-item border-t border-b border-l border-gray-300 w-full sm:w-[80%]  flex flex-col justify-self-end mt-1 mb-1 rounded-l-xl">
                    <div className="p-4 border-gray-300 border-b ">
                        <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block text-gray-600">Full Name</label>
                                <input type="text" id="fullname" name="fullname" className=" border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-gray-600">Contact No</label>
                                <input type="tel" id="contact" name="contact" className=" border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>
                    <div className="p-4 border-gray-300 border-b">
                        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-gray-600">Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber" className="border border-gray-300  form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="expiration" className="block text-gray-600">Expiration Date(MM/YY)</label>
                                <input type="text" id="expiration" name="expiration" className="border border-gray-300  form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cvc" className="block text-gray-600">CVC</label>
                                <input type="text" id="cvc" name="cvc" className="border border-gray-300  form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>

                    <div className="p-4 border-b border-gray-300 ">
                        <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-600">Address</label>
                                <input type="text" id="address" name="address" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-600">City</label>
                                <input type="text" id="city" name="city" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="state" className="block text-gray-600">State/Province</label>
                                <input type="text" id="state" name="state" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="postal" className="block text-gray-600">Postal Code</label>
                                <input type="text" id="postal" name="postal" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600">
                                    <input type="checkbox" id="sameBilling" name="sameBilling" className=" accent-black form-checkbox mr-2" />
                                    Same as Shipping
                                </label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-600">Address</label>
                                <input type="text" id="address" name="address" className=" border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-600">City</label>
                                <input type="text" id="city" name="city" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="state" className="block text-gray-600">State/Province</label>
                                <input type="text" id="state" name="state" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="postal" className="block text-gray-600">Postal Code</label>
                                <input type="text" id="postal" name="postal" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>




                </div>
                <div className=" p-2 grid-item border-t border-b border-r border-gray-300 bg-[#F3F4F6] w-full sm:w-[80%] flex mt-1 mb-1 rounded-r-xl flex-col">
                    <div className=' border-b border-slate-300 w-[95%] h-[15%] flex justify-between items-center self-center'>
                        <div className=' border w-32 h-[50%] flex justify-center rounded-md cursor-pointer'>
                            <img className="h-[100%] " src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png" alt="hero" />

                        </div>
                        <div className='w-[60%] h-[80%] flex flex-col justify-between'>
                            <div className='h-8'>
                                <p className='font-bold ml-1'> Nirvana t shirt</p>
                            </div>
                            <div className='h-8 max-w-[50%] ml-1 text-gray-400 font-semibold'> White</div>
                            <div className=' h-8 max-w-[30%] ml-1 cursor-pointer'>X1</div>
                        </div>
                        <div className='w-[15%] h-[80%] flex flex-col  justify-between'>
                            <div className=' h-8 w-full'>
                                <h1 className='flex justify-end font-bold'>₹1,549</h1>
                            </div>
                            <div className=' h-8 self-end'>
                                <RxCross2 className='cursor pointer hover:text-[red]' />
                            </div>
                        </div>
                    </div>

                    <div className=' w-[95%] h-[15%] self-center flex flex-col justify-between mt-2'>
                        <div className='w-full h-[20%] flex justify-between'>
                            <input className='w-[70%] h-full rounded-md focus:outline-none focus:border-slate-300 ' placeholder='Enter Coupon Code'></input>
                            <button className='w-[25%] h-full bg-black rounded-md text-white'>Apply</button>
                        </div>
                        <div className='w-full h-[30%] flex justify-between'>
                            <p className='w-[30%] h-[90%] '>Sub total:</p>
                            <p className='w-[30%] h-[90%] flex justify-end font-bold'>₹1,14,399</p>
                        </div>
                        <div className='w-full h-[30%] flex justify-between'>
                            <p className='w-[30%] h-[90%]'>Total:</p>
                            <p className='w-[30%] h-[90%] flex justify-end font-bold'>₹1,14,399</p>
                        </div>
                        

                    </div>
                    <div className=' text-center my-8 border bg-black'>
                            <button className='p-2'>
                                <span className='text-white'>Proceed to pay</span>
                            </button>
                        </div>

                </div>
            </div>
        </>
    )
}

export default CheckOut;