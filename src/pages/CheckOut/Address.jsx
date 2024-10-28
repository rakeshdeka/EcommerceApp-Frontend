
const Address = () => {
  return (
    <div>
       
       <div className="flex flex-col lg:flex-row gap-6 p-6 px-20 text-sm">
      {/* Left Section */}
      <div className="flex-1 border-r border-slate-100 px-2">
        <h2 className="text-xl font-semibold">Select Delivery Address</h2>
        <h3 className="text-gray-500 mt-4 text-sm">DEFAULT ADDRESS</h3>

        <div className="border border-gray-300 rounded-lg p-4 mt-2 shadow-sm">
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold">Rakesh Deka</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">HOME</span>
          </div>
          <p className="text-gray-700 mt-1 text-sm">
            Near Ganesh Mandir, Ganesh Nagar, Guwahati College road, Bamunimaidan<br />
            Guwahati, Assam - 781021<br />
            Mobile: <strong>7002436065</strong>
          </p>
          <p className="text-green-600 mt-2 text-sm">• Pay on Delivery available</p>
          <div className="flex gap-4 mt-4">
            <button className="border border-gray-400 text-gray-600 rounded px-4 py-1 hover:bg-gray-100">REMOVE</button>
            <button className="border border-gray-400 text-gray-600 rounded px-4 py-1 hover:bg-gray-100">EDIT</button>
          </div>
        </div>

        <button className="text-pink-500 mt-4 text-sm font-semibold hover:underline">+ Add New Address</button>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <h3 className="text-gray-500 text-sm">DELIVERY ESTIMATES</h3>
        <div className="border border-gray-300 rounded-lg p-4 mt-2 shadow-sm flex items-center gap-4">
          <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F85%2F44%2F85448075f2777ef3743c8453cd6e6cca413ca95f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="Product" className="w-12 h-12 object-cover rounded-full" />
          <p className="text-gray-700 text-sm">Estimated delivery by <strong>4 Nov 2024</strong></p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 mt-4 shadow-sm space-y-3">
          <h3 className="text-gray-500 text-sm">PRICE DETAILS (1 Item)</h3>
          <div className="flex justify-between mt-2 text-sm">
            <span>Total MRP</span>
            <span>₹1,799</span>
          </div>
          <div className="flex justify-between mt-1 text-sm text-green-600">
            <span>Discount on MRP</span>
            <span>- ₹1,116</span>
          </div>
          <div className="flex justify-between mt-1 text-sm text-blue-600">
            <span>Platform Fee</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between mt-1 text-sm text-blue-600">
            <span>Shipping Fee</span>
            <span>FREE</span>
          </div>
          <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-semibold text-sm">
            <span>Total Amount</span>
            <span>₹683</span>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 mt-4 font-semibold hover:bg-pink-600">CONTINUE</button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default  Address ;
