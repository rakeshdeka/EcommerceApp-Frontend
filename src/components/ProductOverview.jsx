function ProductOverview() {

    return (
        <>
            <div className="flex justify-center">
                <div className="  w-1/2 flex justify-center ">
                    <img className="w-68 rounded-lg" src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21470290/2023/1/9/ef2cc4b3-5ec5-4e3d-93d6-85a70475f97c1673260187429RelaxedFitHoodie1.jpg" alt="" />
                </div>
                <div className="  w-1/2">
                    <h1 className="mb-1 font-extrabold text-xl">Nike Air Max 95 By You</h1>
                    <p className=" mb-1">The Nike Air Max 95 By You lets you take inspiration from the human body itself. The midsole represents the spine, graduated panels are the muscles, the lace loops are the shoe's ribs and the mesh in the upper is the skin.</p>
                    <div className="flex gap-2">
                        <p className="mb-1 ml-1 font-bold">$40.00</p>
                        <p className=" mb-1 line-through font-bold text-zinc-400">$50.00</p>
                    </div>
                    <div className="border-solid border-t border-gray-300 h-16">
                        <h1 className="mt-1 ml-1 font-bold">Size: </h1>
                        <div className="flex gap-2">
                            <p className="border-solid font-medium border border-gray-300 mb-1 ml-1 cursor-pointer p-1">S</p>
                            <p className="border-solid font-medium border border-gray-300 mb-1 cursor-pointer p-1">M</p>
                            <p className="border-solid font-medium border border-gray-300 mb-1 cursor-pointer p-1">XL</p>
                        </div>

                    </div>
                    <div className="border-solid border-t border-gray-300 flex justify-between h-12">
                        <div className="border-solid border border-gray-300 mt-1 ml-1 font-medium flex w-48 justify-center rounded-md">
                            <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer">+</div>
                            <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer">1</div>
                            <div className="border-solid p-1 w-10 text-center cursor-pointer">-</div>
                        </div>
                        <div className=" bg-black text-white mt-1 mb-1 mr-1 font-medium rounded-md p-1 w-48 text-center cursor-pointer">Add to cart</div>
                    </div>
                    <div className="border-solid border-t border-gray-300 mt-1 mb-1 font-medium">SKU: N/A

                    </div>
                    <div className=" mb-1 font-medium">Category: kids</div>
                    <div className="mb-1 font-medium">Tags: Sneakers</div>
                    <div className="border-solid border-t border-gray-300">
                        <h1 className="mt-1 font-bold">Product Details</h1>
                        <p className="mt-1 mb-1">Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>
                    </div>
                    <div className="border-solid border-t border-gray-300">
                        <h1 className="mt-1 mb-1 h-12 font-bold">Additional Information</h1>
                    </div>
                    <div className="border-solid border-t border-gray-300">
                        <h1 className="border-solid border-b font-bold border-gray-300 mt-1 mb-1 h-28">Customer Reviews</h1>
                    </div>

                </div>
            </div>

        </>
    )
}
export default ProductOverview