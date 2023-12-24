
import { products } from "../../constants";

import { useCart } from "../../utils/Contexts/CartContext";
import { Link } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai'
import { useState } from "react";
import { useWishLIst } from "../../utils/Contexts/WishListContext";


function ProductCard({ cardPadding }) {
    const { addToCart,isAddClicked} = useCart();
    const {addToWishList,isWishClicked}= useWishLIst();

    // const [isClicked, setIsClicked] = useState(false);  
    // const handleOnCart=(e)=>{
    //     console.log(e);
    //     setIsClicked(true)
    // }
    return (
        <>
            <div className={` flex flex-wrap justify-center ${cardPadding}`} >
                <div className=" mx-auto grid w-full max-w-7xl items-center px-2 py-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 md:space-y-0 xl:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className=" border-black border">

                            <img
                                src={product?.imageSrc}
                                alt="Laptop"
                                className="aspect-[16/9] w-full rounded-md md:aspect-auto h-[200px] md:h-[200px] lg:h-[200px]"
                            />
                            <div className="p-4">
                                <Link to={`/overview/${product.id}`}>
                                    <h1 className="inline-flex items-center text-[.8rem] font-semibold">{product?.name}</h1>
                                </Link>
                                <p className="mt-2 text-[.7rem] font-semibold">{product?.price}</p>
                                
                                

                                <div className="mt-2 text-[.7rem]  flex items-center space-x-2 border-black">
                                    <span className="block   font-semibold">Size : </span>
                                    <span className=" block cursor-pointer rounded-md border border-gray-300 p-1 px-2 font-medium">
                                        {product?.allSize?.size1}
                                    </span>
                                    <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2  font-medium">
                                        {product?.allSize?.size2}
                                    </span>
                                    <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 font-medium">
                                        {product?.allSize?.size3}
                                    </span>
                                </div>
                                <div className="flex gap-1 text-[.7rem] ">
                                  
                                   <button
                                        type="button"
                                        disabled={isAddClicked[product.id]}
                                        className={`mt-4 w-full rounded-sm ${isAddClicked[product.id] ? 'bg-[grey]' : 'bg-[black]'}  px-2 py-1.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
                                        onClick={() =>{ addToCart(product)
                                    
                                       
                                        }}
                                    >
                                        {/* Add to Cart */}
                                        {isAddClicked[product.id]? "Already on cart"  :"Add To Cart"}
                                    </button>
                                 
                                 
                                    <AiFillHeart className={`mt-4 w-8 h-8 cursor-pointer ${isWishClicked[product.id] ? 'text-red-600':'text-[black]'}`} onClick={()=>{
                                        addToWishList(product);
                                        //  handleOnCart(product);
                                        
                                    }}/>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* <Cart item={item} /> */}

        </>
    )
}

export default ProductCard;