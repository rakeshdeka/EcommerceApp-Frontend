
import { RxCross1 } from "react-icons/rx";
import Header from "../../components/Header/Header";
const WishList = () => {
  const wishlistItems = [
    {
      id: 1,
      image: "https://assets.ajio.com/medias/sys_master/root/20240716/n9tw/6696adcd1d763220fac889c2/-473Wx593H-466952704-blue-MODEL.jpg", // Replace with actual image URL
      name: "LOCOMOTIVE Premium Dob...",
      price: 1959,
      originalPrice: 3199,
      discountPercent: 44,
      inStock: true,
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVz4sA3LYPMIRWe21Qhq4oVY2cV6O7tjbbQ&s", // Replace with actual image URL
      name: "Flying Machine Men Printed...",
      price: 2799,
      originalPrice: 2799,
      discountPercent: 0,
      inStock: false,
    },
    {
      id: 3,
      image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb39f8c9d/images/Fastrack/Catalog/3287KM06_2.jpg?sw=800&sh=800", // Replace with actual image URL
      name: "Fastrack Men Black Brass Di...",
      price: 1495,
      originalPrice: 1495,
      discountPercent: 0,
      inStock: true,
    },
    {
      id: 4,
      image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1700944/2019/6/8/488007ef-c65e-4a2f-a92b-65b6846894861559989274078-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg", // Replace with actual image URL
      name: "HRX by Hrithik Roshan Men ...",
      price: 597,
      originalPrice: 2299,
      discountPercent: 74,
      inStock: true,
    },
  ];

  return (
    <div>
        <Header/>
         <div className="bg-gray-50 min-h-screen p-10 px-20 ">
      <h1 className=" text-base font-semibold mb-4">
        My Wishlist <span className="text-gray-500 text-base font-normal">118 items</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.map(item => (
          <div key={item.id} className="bg-white border border-slate-100 overflow-hidden relative">
            {/* Close button */}
            <button className="absolute top-2 right-2 bg-[#C6C6C6] p-1.5 rounded-full z-50">
              <RxCross1  className=" text-xs"/>
            </button>
            
            {/* Image with out of stock overlay */}
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-96 object-cover" />
              {!item.inStock && (
                <div className="absolute inset-0 bottom-0 bg-gray-500 bg-opacity-75 flex items-end justify-center">
                  <div className="bg-[#FFFFFF] text-orange-500 text-sm px-7 py-1">
                    OUT OF STOCK
                  </div>
                </div>
              )}
            </div>

            {/* Item details */}
            <div className="p-4">
              <h2 className="text-sm font-semibold">{item.name}</h2>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-lg font-semibold text-gray-900">Rs.{item.price}</span>
                {item.discountPercent > 0 && (
                  <>
                    <span className="text-gray-400 line-through">Rs.{item.originalPrice}</span>
                    <span className="text-red-500 text-sm">{item.discountPercent}% OFF</span>
                  </>
                )}
              </div>
            
             
             
            </div>
             <div className=" border-t border border-slate-100 py-4">
 <button className="text-pink-600 text-sm font-bold w-full">
                {item.inStock ? "MOVE TO BAG" : "SHOW SIMILAR"}
              </button>
              </div>
          </div>
        ))}
      </div>
    </div>

    </div>
   
  );
};

export default WishList;
