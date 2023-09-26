import React from 'react'

const CheckOut = () => {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="grid-item border-t border-b border-l border-gray-300 w-[80%]  flex flex-col justify-self-end mt-1 mb-1 rounded-l-xl">
                    <div className="p-4 border-gray-300 border-b ">
                        <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
                        <form>
                            <div className="mb-4">
                                <label for="fullname" className="block text-gray-600">Full Name</label>
                                <input type="text" id="fullname" name="fullname" className=" border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="contact" className="block text-gray-600">Contact No</label>
                                <input type="tel" id="contact" name="contact" className=" border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>
                    <div className="p-4 border-gray-300 border-b">
                        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
                        <form>
                            <div className="mb-4">
                                <label for="cardNumber" className="block text-gray-600">Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber" className="border border-gray-300  form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="expiration" className="block text-gray-600">Expiration Date(MM/YY)</label>
                                <input type="text" id="expiration" name="expiration" className="border border-gray-300  form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="cvc" className="block text-gray-600">CVC</label>
                                <input type="text" id="cvc" name="cvc" className="border border-gray-300  form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>

                    <div className="p-4 border-b border-gray-300 ">
                        <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                        <form>
                            <div className="mb-4">
                                <label for="address" className="block text-gray-600">Address</label>
                                <input type="text" id="address" name="address" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                            <div className="mb-4">
                                <label for="city" className="block text-gray-600">City</label>
                                <input type="text" id="city" name="city" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="state" className="block text-gray-600">State/Province</label>
                                <input type="text" id="state" name="state" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="postal" className="block text-gray-600">Postal Code</label>
                                <input type="text" id="postal" name="postal" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600">
                                    <input type="checkbox" id="sameBilling" name="sameBilling" className="form-checkbox mr-2" />
                                    Same as Shipping
                                </label>
                            </div>
                            <div className="mb-4">
                                <label for="address" className="block text-gray-600">Address</label>
                                <input type="text" id="address" name="address" className=" border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="city" className="block text-gray-600">City</label>
                                <input type="text" id="city" name="city" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="state" className="block text-gray-600">State/Province</label>
                                <input type="text" id="state" name="state" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>

                            <div className="mb-4">
                                <label for="postal" className="block text-gray-600">Postal Code</label>
                                <input type="text" id="postal" name="postal" className="border border-gray-300 form-input mt-1 block w-full" />
                            </div>
                        </form>
                    </div>




                </div>
                <div className="grid-item border-t border-b border-r border-gray-300 bg-[#F3F4F6] w-[80%] flex mt-1 mb-1 rounded-r-xl">Div 2</div>
            </div>
        </>
    )
}

export default CheckOut;