import { useState } from "react";
import { products } from "../constants";
import Cart from "./Cart"

function ProductCard() {
    const [item, setItem] = useState([])
    const addToCart = (product) => {
        // console.log(product);
        setItem([...item, product])
        // console.log(item);
    }


    return (
        <>
            <div className="flex flex-wrap justify-center " >
                <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="rounded-md border">
                            <img
                                src={product?.imageSrc}
                                alt="Laptop"
                                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                            />
                            <div className="p-4">
                                <h1 className="inline-flex items-center text-lg font-semibold">{product?.name}</h1>
                                <p className="mt-4 font-semibold">{product?.price}</p>
                                <p className="mt-3 text-sm text-gray-600">
                                    {product?.description}
                                </p>

                                <div className="mt-5 flex items-center space-x-2">
                                    <span className="block text-sm font-semibold">Size : </span>
                                    <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                        {product?.allSize?.size1}
                                    </span>
                                    <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                        {product?.allSize?.size2}
                                    </span>
                                    <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                        {product?.allSize?.size3}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Cart item={item} />

        </>
    )
}

export default ProductCard;