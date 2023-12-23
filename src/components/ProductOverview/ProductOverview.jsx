import { useParams } from "react-router-dom";
import { products } from "../../constants";
import { useCart } from "../../utils/Contexts/CartContext";
import { NotFound } from "./NotFound";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductOverview() {
  const { addToCart } = useCart();
  const params = useParams();
  const { id } = params;
  console.log(params);
  const product = products.find((product) => product.id === parseInt(id));
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  if (!product) {
    // Handle the case where the product is not found
    return <NotFound />;
  }

  return (
    <div className="border border-black">
    <div className="p-2 flex flex-col md:flex-row justify-center  relative pt-[80px]">
      <div className="w-full md:w-1/2 flex justify-center border border-black h-[500px] ">
        <div className="w-[40%] md:w-[30%] border-r border-red-600">
          <div className="h-[25%] border border-black cursor-pointer">
            <img className="w-full h-full rounded-lg" src={product?.imageSrc} alt="" />
          </div>
          <div className="h-[25%] border border-black cursor-pointer">
            <img className="w-full h-full rounded-lg" src={product?.imageSrc} alt="" />
          </div>
          <div className="h-[25%] border border-black cursor-pointer">
            <img className="w-full h-full rounded-lg" src={product?.imageSrc} alt="" />
          </div>
          <div className="h-[25%] border border-black cursor-pointer">
            <img className="w-full h-full rounded-lg" src={product?.imageSrc} alt="" />
          </div>
        </div>
        <div className="w-[70%] cursor-zoom-in">
          <img className="w-full h-full rounded-lg" src={product?.imageSrc} alt="" />
        </div>
        
      </div>
      <div className=" w-full md:w-1/2 border border-black">
        <h1 className="mb-2 text-2xl font-bold">{product?.name}</h1>
        <p className="mb-2 text-gray-600">{product?.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <p className="font-semibold">{product?.price}</p>
            <p className="line-through text-gray-500 font-semibold">
              {product?.orginalPrice}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="border font-medium border-gray-300 p-1 cursor-pointer">
              {product?.allSize?.size1}
            </p>
            <p className="border font-medium border-gray-300 p-1 cursor-pointer">
              {product?.allSize?.size2}
            </p>
            <p className="border font-medium border-gray-300 p-1 cursor-pointer">
              {product?.allSize?.size3}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex border border-gray-300 rounded-md">
            <div
              className="border-r border-gray-300 p-2 cursor-pointer"
              onClick={increment}
            >
              +
            </div>
            <div className="border-r border-gray-300 p-2">{count}</div>
            <div
              className="p-2 cursor-pointer"
              onClick={decrement}
            >
              -
            </div>
          </div>
          <button
            className="bg-black text-white rounded-md px-4 py-2 font-medium cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
        <div className="border-t border-gray-300 mb-4">
          <div className="mt-2 font-bold">SKU: N/A</div>
          <div className="mt-2">Category: kids</div>
          <div className="mt-2">Tags: Sneakers</div>
        </div>
        <div className="border-t border-gray-300 mb-4">
          <details>
          <summary className="mt-2 mb-1 font-bold">Product Details</summary>
          <p className="mt-1 mb-1">
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact. Email and Chat. We try to reply quickly,
            so you need not to wait too long for a response!.
          </p>
          </details>
        </div>
        <div className="border-t border-gray-300 mb-4">
          <details>
          <summary className="mt-2 mb-1 font-bold">Additional Information</summary>
        <p>Many things</p>
        </details>
        </div>
        <div className="border-t border-gray-300 mb-4">
        <details>
        <summary className="mt-2 mb-1 font-bold">Product Specifications</summary>
        <ul className="list-disc ml-6">
         <li>Material: {product?.material}</li>
          <li>Dimensions: {product?.dimensions}</li>
          <li>Weight: {product?.weight}</li>
      {/* Add more specifications as needed */}
        </ul>
        </details>
      </div>
      <div className="border-t border-gray-300 mb-4">
     <details>
       <summary className="mt-2 mb-1 font-bold">Care Instructions</summary>
       <p>{product?.careInstructions}</p>
         </details>
        </div>
       <div className="border-t border-gray-300 mb-4">
        <details>
       <summary className="mt-2 mb-1 font-bold">Shipping Information</summary>
        <p>Free shipping on orders over $50. Standard delivery takes 3-5 business days.</p>
        </details>
        </div>
        <div className="border-t border-gray-300 mb-4">
          <details>
         <summary className="mt-2 mb-1 font-bold">Return Policy</summary>
       <p>{product?.returnPolicy}</p>
         </details>
        </div>
        <div className="border-t border-gray-300 mb-4">
          <details>
          <summary className="border-b font-bold border-gray-300 mt-2 mb-1">
            Customer Reviews
          </summary>
          <p>this is good</p>
          </details>
        </div>
      </div>
      
    </div>
     <div className="mt-4">
        {/* <h1>Related products</h1> */}
        <ProductCard cardPadding="sm:pl-0"/>
      </div>
    </div>
  );
}

export default ProductOverview;
