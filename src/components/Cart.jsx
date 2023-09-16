function Cart() {
    return (
        <>
            <div className="border-solid border-2 border-gray-300 w-1/2 flex flex-col justify-center mx-auto my-auto gap-1 rounded-lg mt-1 mb-1">
                <div>
                    <h1 className="font-extrabold text-xl text-center">Your Cart</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit praesentium incidunt.</p>
                </div>
                <div >

                    <div className="flex flex-col gap-1 border-t border-gray-300">
                        <div className='w-1/2 h-1/2 ml-1 mt-4  '>
                            <img className="bg-slate-300" src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21470290/2023/1/9/72aab826-a9d1-4d4e-a5f4-a6ce64557a8e1673260187438RelaxedFitHoodie2.jpg" alt="" />
                        </div>
                        <div className="flex justify-between">
                            <h2 className="ml-1 mb-1 font-bold">Hannah Men Relaxed Fit Hoodie</h2>
                            <h2 className=" mr-1 mb-1 font-bold">₹1,549</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end border-t border-gray-300">
                    <p className="font-bold mr-1">Total amount: ₹1,549</p>

                </div>

                <div className="flex justify-end gap-4">
                    <button className="border-solid border border-black p-1 rounded-md mb-1">Back to shop</button>
                    <button className="border-solid border border-black  p-1 mr-1 rounded-md mb-1">Checkout</button>
                </div>

            </div>

        </>
    )
}
export default Cart;