// import ProductOverview from './ProductOverview'
function Cart(props) {
    console.log(props.item[0]);

    return (
        <>
            {/* <ProductOverview /> */}


            <div className="border-solid border border-gray-300 w-1/2 flex flex-col justify-center mx-auto my-auto rounded-lg mt-1 mb-1">
                <div>
                    <h1 className="font-extrabold text-xl text-center">Your Cart</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit praesentium incidunt.</p>
                </div>

                <div>
                    {props.item.map((item, index) => (
                        <div key={index} className="flex gap-1 border border-gray-300 ">
                            <div className='w-1/4 border-solid border-r border-gray-300 flex justify-center items-center'>
                                <img className="bg-slate-300 w-16 h-16 " src={item?.imageSrc} alt="" />
                            </div>
                            <div className=" w-3/4 flex place-items-end">
                                <h2 className="ml-1 mb-1 font-bold">{item?.name}</h2>
                                <h2 className="ml-auto mr-1 mb-1 font-bold">{item?.price}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end border-t border-gray-300">
                    <p className="font-bold mr-1">Total amount: ₹00000</p>

                </div>

                <div className="flex justify-end gap-4">
                    <button className="border-solid border border-black p-1 rounded-md mb-1">Back to shop</button>
                    <button className="border-solid border border-black  p-1 mr-1 rounded-md mb-1">Checkout</button>
                </div>


            </div>
            {props?.item?.name}


        </>
    )
}
export default Cart;