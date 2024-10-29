import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { GiCardRandom } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";
function ProductCard({ product }) {
    return (
        <div key={product.id} className="relative overflow-hidden group">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={product.imageUrl}
                    alt={product.brand}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Rating at Bottom Left (Hidden on Hover) */}
                <div className="absolute bottom-2 left-2 bg-slate-100 gap-1 bg-opacity-75 flex items-center text-xs font-semibold px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
                     4.2  <IoMdStar className=" text-green-600 text-sm" /> | <span className="">700</span>
                </div>
                
                {/* Icon at Bottom Right (Visible on Hover) */}
                <div className="absolute bottom-2 right-2 opacity-0 p-2 rounded-full border border-slate-100 bg-slate-200 transition-opacity duration-300 group-hover:opacity-100">
                    <GiCardRandom className="text-[#FF3F6C] text-xs" />
                </div>
            </div>

            <div className="relative p-2 bg-white">
                <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h2 className="text-gray-800 font-bold">{product.brand}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                </div>

                {/* Wishlist and Sizes on Hover */}
                <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col py-4 items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="flex items-center space-x-2 bg-white border border-gray-300 py-2 px-12 text-gray-700 font-semibold mb-2">
                        <IoIosHeartEmpty />
                        <span className="text-xs font-bold">WISHLIST</span>
                    </button>
                    <p className="text-sm text-gray-600">Sizes: Onesize</p>
                </div>
            </div>

            {/* Price and Discount Section */}
            <div className="p-2 text-center text-xs">
                <div className="flex  space-x-2">
                    <span className="text-red-600 font-semibold">Rs. {product.price}</span>
                    <span className="line-through text-gray-500 text-xs">
                        Rs. {product.originalPrice}
                    </span>
                    <span className="text-red-400  text-xs">
                        ({product.discount}% OFF)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
