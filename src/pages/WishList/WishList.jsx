

// import { products } from "../../constants";
import { Link } from "react-router-dom";
// import { AiFillHeart } from 'react-icons/ai'
const WishList = () => {
 

  return (
    <>
     <div className="flex flex-col flex-wrap justify-center pt-[80px] text-xs ">
       <div className="text-xl font-semibold p-4 border-b border-black  ">
        <h1 className="text-center">Wishlist</h1>
       </div>
                <div className=" mx-auto grid w-full max-w-7xl items-center px-2 py-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 md:space-y-0 xl:grid-cols-4">
                   
                        <div className=" border-black border w-[200px]">

                            <img
                                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21470290/2023/1/9/72aab826-a9d1-4d4e-a5f4-a6ce64557a8e1673260187438RelaxedFitHoodie2.jpg"
                                alt="Laptop"
                                className="aspect-[16/9] w-full rounded-md md:aspect-auto h-[200px] md:h-[200px] lg:h-[200px]"
                            />
                            <div className="p-4">
                                <Link to={`/overview/1`}>
                                    <h1 className="inline-flex items-center text-[.8rem] font-semibold">Men Relaxed Fit Hoodie</h1>
                                </Link>
                                <p className="mt-2 text-[.7rem] font-semibold">$5,199</p>
                                

        
                                <div className="flex gap-1">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5  font-semibold text-white shadow-sm hover:bg-[green] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        
                                    >
                                        Move To Cart
                                    </button>
                                   
                                </div>
                                <div className="flex gap-1 ">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-sm bg-black hover:bg-[red] px-2 py-1.5 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        
                                    >
                                        Remove
                                    </button>
                                   
                                </div>

                            </div>

                        </div>
                        
                 
                </div>

            </div>

        =

        </>
    
    
     
   
  );
};

export default WishList;
