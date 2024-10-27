import { Link } from "react-router-dom";

const Cart = () => {
  return (
    
      <div className="bg-white min-h-screen p-8">
      <div className=" border-b py-3 flex items-center justify-between">
        <Link to='/'>
         <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
          alt="Logo"
          className="h-10"
        />
        </Link>
   <h1 className="text-lg text-center">BAG -------- ADDRESS -------- PAYMENT</h1>
   <div className=" flex items-center">
    <img
          src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" 
          alt="Logo"
          className="h-10"
        />
        <p>100 % SECURE</p>
   </div>
      </div>
     
      <div className="flex flex-col md:flex-row justify-between px-20">
        {/* Left Side - Bag Details */}
        <div className="w-full md:w-2/3 text-sm bg-white p-6 border-r border-slate-100">
        

          {/* Delivery Address */}
          <div className="border p-4 mb-4 rounded-lg ">
            <h2 className="font-semibold text-gray-800">
              Deliver to: <span className="font-bold">Rakesh Deka, 781021</span>
            </h2>
            <p className="text-gray-600">
              Near Ganesh Mandir, Ganesh Nagar, Guwahati College Road, Bamunimaidan, Guwahati, Assam
            </p>
            <button className="mt-2 text-pink-500 border border-pink-500 px-4 py-1 rounded-md">CHANGE ADDRESS</button>
          </div>

          {/* Available Offers */}
          <div className="border p-4 mb-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-800">Available Offers</h3>
            <p className="text-gray-600">10% Instant Discount on Kotak Mahindra Bank Credit and Debit Cards on a min spend of ₹3,500. TCA</p>
            <button className="text-pink-500">Show More</button>
          </div>

          {/* Out of Stock Warning */}
          <div className="border p-4 mb-4 rounded-lg bg-red-100 text-red-700">
            <h3 className="font-semibold">Item(s) out of stock.</h3>
          </div>

          {/* Selected Items */}
          <div className="border p-4 mb-4 rounded-lg">
            <h3 className="font-semibold">1/1 ITEMS SELECTED</h3>

            {/* Item Card */}
            <div className="flex items-center gap-4 p-4 border mt-4 rounded-lg">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" checked />
              <img
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F85%2F44%2F85448075f2777ef3743c8453cd6e6cca413ca95f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                alt="Shoe"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h4 className="font-semibold text-gray-800">HRX by Hrithik Roshan</h4>
                <p className="text-gray-600">Men Grey Self Design Croslite Clogs</p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Size: 10</span> | <span className="text-red-500">Size not available</span>
                </p>
                <p className="text-gray-700 font-semibold mt-2">₹599 <span className="line-through text-gray-400">₹1,999</span> <span className="text-green-600">70% OFF</span></p>
                <p className="text-red-500 font-semibold">Not returnable</p>
              </div>
              <button className="text-gray-500">✕</button>
            </div>
          </div>
        </div>

        {/* Right Side - Price Details & Coupons */}
        <div className="w-full md:w-1/3 bg-white p-6 text-sm">
          {/* Coupons */}
          <div className="border p-4 mb-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Apply Coupons</h3>
              <button className="text-pink-500 border border-pink-500 px-4 py-1 rounded-md">APPLY</button>
            </div>
          </div>

          {/* Donation */}
          <div className="border p-4 mb-4 rounded-lg">
            <h3 className="font-semibold">Support Transformative Social Work in India</h3>
            <p className="text-gray-600">Donate and make a difference</p>
            <div className="flex gap-2 mt-2">
              {[10, 20, 50, 100].map((amount) => (
                <button
                  key={amount}
                  className="px-3 py-1 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  ₹{amount}
                </button>
              ))}
            </div>
          </div>

          {/* Price Details */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">PRICE DETAILS (1 Item)</h3>
            <div className="mt-2 space-y-3">
              <div className="flex justify-between text-gray-700">
                <p>Total MRP</p>
                <p>₹1,999</p>
              </div>
              <div className="flex justify-between text-green-600">
                <p>Discount on MRP</p>
                <p>-₹1,400</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Coupon Discount</p>
                <button className="text-pink-500">Apply Coupon</button>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Platform Fee</p>
                <p className="text-green-600">FREE</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Shipping Fee</p>
                <p className="text-green-600">FREE</p>
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-gray-800">
              <p>Total Amount</p>
              <p>₹599</p>
            </div>
            <Link to='/checkout'>
            <button className="w-full mt-4 bg-pink-500 text-white py-2 font-bold">
              PLACE ORDER
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
   
    
  );
};

export default Cart;
