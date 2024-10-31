import './style.css';
import { BsHeart } from 'react-icons/bs';
import { HiShoppingBag } from "react-icons/hi";
import Header from '../Header/Header';
import asset1 from "../../assets/overviewPage/asset_17.svg"
import asset2 from "../../assets/overviewPage/asset_18.svg"
import asset3 from "../../assets/overviewPage/asset_19.svg"
import { IoMdStar } from "react-icons/io";
import { BsTruck } from "react-icons/bs";
import CustomCursor from '../CustomCursor/CustomCursor';
import { useState } from 'react';

export default function ProductDetail() {

  const singleProduct = {
    data: {
      product: {
        id: 1,
        brand: "H&M",
        name: "Men Black Solid Pure Cotton Drop-Shoulder Sleeves",
        price: 999,
        mrp: 1299,
        discount: 23,
        short_description: "<p>High quality, pure cotton, comfortable and stylish.</p>",
        review_summary: {
          average_rating: 4.5,
          total_reviews: 230,
        },
        category: {
          id: 2,
          name: "Men's Clothing",
        },
        sub_category: {
          id: 3,
          name: "T-Shirts",
        },
        images: [
          { image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28204808/2024/3/12/07ee8a4f-ada9-4f63-b307-ee8bf377c3f91710225898601RegularFitT-shirt2.jpg" },
          { image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28204808/2024/3/12/02f48e07-835b-4bdf-9f48-aa1bcb25a1ed1710225898577RegularFitT-shirt1.jpg" },
          { image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28204808/2024/3/12/1dad0310-d02d-4032-bd62-8dd00b3136ca1710225898625RegularFitT-shirt3.jpg" },
          { image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28204808/2024/3/12/57658345-3e75-49f5-a339-50608d5827be1710225898533RegularFitT-shirt4.jpg" },
        ],
        is_returnable: '1',
      },
      product_size: [
        { size: "S", product_id: 1 },
        { size: "M", product_id: 2 },
        { size: "L", product_id: 3 },
      ],
      available_colors: [
        { color_name: "#000000", product_id: 1 },
        { color_name: "#FFFFFF", product_id: 2 },
      ],
      varient: [
        { size: "S", product_id: 1 },
        { size: "M", product_id: 2 },
        { size: "L", product_id: 3 },
      ],
    },
  };

  const quantityData = {
    data: {
      is_available: true,
    },
  };

  const isInCart = false;
  const quantity = 1;
  const isLoading = false;
  const loading = false;

  const handleSubCategoryClick = () => {
    console.log("hi");


  }

  const [showCustomCursor, setShowCustomCursor] = useState(false);
  return (
    <div>
      <Header />
      <div className=" overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-2 md:px-4 2xl:px-8 bg-white overflow-x-hidden mt-5">
          <div className="pt-8">
            <div className="flex items-center">
              <ol className="flex w-full flex-wrap items-center overflow-hidden">
                <li className="text-body hover:text-heading cursor-pointer px-2.5 hover:underline decoration-slate-300 text-xs sm:text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                  <a href="/">Home</a>
                </li>
                <li className="text-body mt-0.5 text-base">/</li>
                <li
                  className="text-body hover:text-heading cursor-pointer hover:underline decoration-slate-300 px-2.5 text-xs sm:text-sm  transition duration-200 ease-in first:pl-0 last:pr-0"
                  onClick={() =>
                    handleSubCategoryClick(
                      singleProduct?.data?.product?.category?.id,
                      singleProduct?.data?.product?.sub_category?.id,
                      singleProduct?.data?.product?.sub_category?.name
                    )
                  }
                >
                  {singleProduct?.data?.product?.sub_category.name}
                </li>
                <li className="text-body mt-0.5 text-base">/</li>
                <div className="px-2.5">
                  <li className="text-body hover:text-heading hover:underline decoration-slate-300 text-xs sm:text-sm  transition duration-200 ease-in first:pl-0 last:pr-0">
                    <a className="capitalizen cursor-pointer">
                      {/* Nike Shoes */}
                      {singleProduct?.data?.product?.name}
                    </a>
                  </li>
                </div>
                <li className="text-body mt-0.5 text-base">/</li>
                <div className="text-body font-semibold text-xs sm:text-sm px-2.5">
                  <span className='hover:underline decoration-slate-300 cursor-pointer'>H&M Tshirts</span>  &gt; <span className=' cursor-pointer hover:underline decoration-slate-300'>More by H&M</span>
                </div>
              </ol>
            </div>
          </div>
          <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
            <div className="col-span-5 grid grid-cols-2 gap-2.5 relative">
              {/* <div className="relative"> */}
              {/* Display custom cursor only when hovering over an image */}
              {showCustomCursor && <CustomCursor />}
              {singleProduct?.data?.product?.images?.map((image, index) => (
                <div
                  key={index}
                  className="transition duration-150 object-cover ease-in hover:opacity-90 h-full w-full"
                  onMouseEnter={() => setShowCustomCursor(true)}
                  onMouseLeave={() => setShowCustomCursor(false)}
                >
                  <img
                    src={image?.image}
                    alt={`Product Image ${index + 1}`}
                    className="object-cover cursor-none w-full h-full"
                  />
                </div>
              ))}
              {/* </div> */}
            </div>
            <div className="col-span-4 pt-8 lg:pt-0">
              <div className="mb-3 border-b border-gray-300 pb-7">
                <h2 className="text-heading text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                  {singleProduct?.data?.product?.brand}
                </h2>
                <p className=' text-lg font-normal text-gray-400'>
                  {singleProduct?.data?.product?.name}

                </p>

                <div className=' border border-slate-200 cursor-pointer hover:border-gray-700 inline-block p-1 px-2 mt-3'>


                  <div className="flex  items-center">
                    {singleProduct?.data?.product?.review_summary?.average_rating > 0 && (
                      <>
                        <span className=" text-sm text-indigo-500 mr-1">{singleProduct?.data?.product?.review_summary?.average_rating} </span>

                      </>
                    )}
                    <IoMdStar className=' text-green-600' />

                    <p
                      className={` border-l-2 border-gray-400 text-sm pl-3 ${!singleProduct?.data?.product?.review_summary?.average_rating
                        ? ' cursor-default text-black'
                        : 'cursor-pointer ml-2 text-gray-500'
                        }  w-fit `}

                    >
                      {singleProduct?.data?.product?.review_summary?.total_reviews !== '0'
                        ? `${singleProduct?.data?.product?.review_summary?.total_reviews} Ratings`
                        : 'No ratings yet'}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center ">
                  <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                    <span className=' text-gray-500 text-xl'>MRP</span> ₹ {singleProduct?.data?.product?.price}
                  </div>

                </div>
                <p className=' font-bold text-sm text-green-600'>inclusive of all taxes</p>
              </div>
              <div className=" pb-1  ">
                {console.log('singleProduct?.data', singleProduct?.data)}
                {singleProduct?.data?.product_size[0]?.size !== null && (
                  <div className="mb-1">
                    <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">size</h3>

                    <ul className="colors -mr-3 flex flex-wrap">
                      {singleProduct?.data?.varient?.map((size, index) => (
                        <li
                          key={index}
                          className={`flex items-center justify-center mb-2 mr-2 h-16 w-16 cursor-pointer text-center rounded-full border p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out md:mb-3 md:mr-3 md:h-12 md:w-12 md:text-sm ${1 === size?.product_id ? 'border-pink-500 ' : 'border-gray-400  text-black'
                            }`}

                        // onClick={() => handleSizeClick(size?.product_id)}
                        >
                          {size?.size}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              <div className="space-s-3 flex items-center gap-2  py-4">
                <button
                  type="button"
                  className={` h-14 w-full rounded-md bg-[#FF3E6C] px-3 items-center justify-center py-2 text-xs sm:text-sm font-bold text-white shadow-sm focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50
                     `}

                >
                  <HiShoppingBag className="inline-block mr-2" />
                  ADD TO BAG
                </button>

                <button
                  type="button"
                  className={`h-14 w-full rounded-md border border-slate-200  px-3 flex items-center justify-center py-2 text-xs sm:text-sm  font-semibold shadow-sm  focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50
                  
                    `}

                >
                  <BsHeart className="inline-block mr-2" />
                  WISHLIST
                </button>

              </div>


              <div className="">
                {/* Price and Seller Information */}
                <div className="text-lg font-semibold">₹399</div>
                <div className="text-base text-gray-500">Get it by Wed, Nov 06 - 781021</div>
                <div className="text-base mt-1">
                  Seller: <span className="text-red-500 font-bold">H & M Hennes & Mauritz Retail Private Limited</span>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-200"></div>

                {/* Delivery Options Header */}
                <div className="text-gray-800 font-bold text-lg flex items-center gap-2">
                  DELIVERY OPTIONS
                  <BsTruck className=' text-[1.5rem]' />
                </div>

                {/* Pincode Display */}
                <div className="flex items-center justify-between mt-3 p-3 border border-gray-300 rounded-md">
                  <div className="text-sm font-bold">781021 (Rakesh Deka)</div>
                  <button className="text-red-500 text-xs font-semibold">CHANGE</button>
                </div>

                {/* Delivery Information List */}
                <ul className="mt-4 space-y-5 text-gray-700 text-base font-bold">
                  <li className="flex items-center gap-2">
                    {/* <span role="img" aria-label="delivery">🚚</span>  */}
                    <img src={asset1} className=' h-14 w-14' alt="get_it" />
                    Get it by Wed, Nov 06
                  </li>
                  <li className="flex items-center gap-2">
                    <img src={asset2} className=' h-14 w-14' alt="delivery " /> Pay on delivery available
                  </li>
                  <li className="flex items-center gap-2">
                    <img src={asset3} className=' h-14 w-14' alt="return & exchange" />  Easy 14 days return & exchange available
                    <span className="text-red-500 font-bold text-xs ml-2 cursor-pointer">MORE INFO &gt;</span>
                  </li>
                </ul>

                {/* Additional Information */}
                <div className="text-lg text-gray-500 mt-4">100% Original Products</div>
              </div>

              <div className="pt-7">
                {/* Product Details Header */}
                <h2 className="text-lg font-semibold mb-2">PRODUCT DETAILS</h2>
                <p className="text-gray-700 text-base mb-4">
                  T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem.
                  Regular fit for comfortable wear and a classic silhouette.
                </p>

                {/* Size & Fit */}
                <div className="mb-4">
                  <h3 className="font-semibold text-base mb-1">Size & Fit</h3>
                  <p className="text-gray-700 text-base">Regular-Fit</p>
                  <p className="text-gray-700 text-base">The model (height 6') is wearing a size XS</p>
                </div>

                {/* Material & Care */}
                <div className="mb-4">
                  <h3 className="font-semibold text-base mb-1">Material & Care</h3>
                  <p className="text-gray-700 text-base">100% Cotton</p>
                  <p className="text-gray-700 text-base">Machine Wash</p>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="font-semibold text-base   mb-2">Specifications</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    {/* Specification Rows */}
                    <div className="flex flex-col">
                      <span className="text-gray-500">Fabric</span>
                      <span className="text-gray-800">Pure Cotton</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Fit</span>
                      <span className="text-gray-800 text-base">Regular Fit</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Length</span>
                      <span className="text-gray-800 text-base">Regular</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Main Trend</span>
                      <span className="text-gray-800 text-base">New Basics</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Multipack Set</span>
                      <span className="text-gray-800 text-base">Single</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Neck</span>
                      <span className="text-gray-800 text-base">Round Neck</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Number of Items</span>
                      <span className="text-gray-800 text-base">1</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Occasion</span>
                      <span className="text-gray-800 text-base">Casual</span>
                    </div>
                  </div>
                  <p className=' text-pink-500 font-bold py-4'>See More</p>
                </div>
              </div>

            </div>
          </div>
        </div>




      </div>

    </div>
  );
}
