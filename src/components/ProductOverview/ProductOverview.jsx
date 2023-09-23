import { useParams } from "react-router-dom";
import { products } from "../../constants";
import { useCart } from "../../utils/Contexts/CartContext";
import { NotFound } from "./NotFound";
import { useState } from "react";
function ProductOverview() {
    const { addToCart } = useCart();
    const params = useParams();
    const { id } = params;
    console.log(params);
    const product = products.find((product) => product.id === parseInt(id));
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    if (!product) {
        // Handle the case where the product is not found
        return <NotFound />;
    }

    return (
        <>
            <div className="flex justify-center">
                <div className=" h-[300px]  w-1/2 flex justify-center ">
                    <img className="w-68 rounded-lg" src={product?.imageSrc} alt="" />
                </div>
                <div className="  w-1/2">

                    <h1 className="mb-1 font-extrabold text-xl"> {product?.name}</h1>
                    <p className=" mb-1"> {product?.description}</p>
                    <div className="flex gap-2">
                        <p className="mb-1 ml-1 font-bold">{product?.price}</p>
                        <p className=" mb-1 line-through font-bold text-zinc-400">{product?.orginalPrice}</p>
                    </div>
                    <div className="border-solid border-t border-gray-300 h-16">
                        <h1 className="mt-1 ml-1 font-bold">Size: </h1>
                        <div className="flex gap-2">
                            <p className="border-solid font-medium border border-gray-300 mb-1 ml-1 cursor-pointer p-1">{product?.allSize?.size1}</p>
                            <p className="border-solid font-medium border border-gray-300 mb-1 cursor-pointer p-1">{product?.allSize?.size2}</p>
                            <p className="border-solid font-medium border border-gray-300 mb-1 cursor-pointer p-1">{product?.allSize?.size3}</p>
                        </div>

                    </div>
                    <div className="border-solid border-t border-gray-300 flex justify-between h-12">
                        <div className="border-solid border border-gray-300 mt-1 ml-1 font-medium flex w-48 justify-center rounded-md">
                            <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer" onClick={increment}>+</div>
                            <div className="border-solid border-r border-gray-300 p-1 w-10 text-center cursor-pointer" >{count}</div>
                            <div className="border-solid p-1 w-10 text-center cursor-pointer" onClick={decrement}>-</div>
                        </div>
                        <div className=" bg-black text-white mt-1 mb-1 mr-1 font-medium rounded-md p-1 w-48 text-center cursor-pointer
                        
                        " onClick={() => addToCart(product)}>Add to cart</div>
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
export default ProductOverview;