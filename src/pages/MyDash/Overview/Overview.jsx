

const Overview = () => {
  return (
    <div>
  <div className="flex items-center justify-between bg-slate-100 p-5 py-7">
            <div className="flex items-center gap-4">
              {/* <im className="w-20 h-20 bg-gray-300"></im> */}
              <img src="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg" alt="" className=" w-28 h-28 " />
              <div>
                {/* <h1 className="text-sm font-semibold">Rakesh Deka</h1> */}
                <p className="text-gray-600 text-sm">rakeshdekaa21@gmail.com</p>
              </div>
            </div>
            <button className="px-2 py-1 border text-xs border-black hover:bg-gray-100">
              Edit Profile
            </button>
          </div>
      <div className="grid grid-cols-3 gap-6 p-5 text-sm">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className=" font-medium">Orders</h2>
              <p className="text-gray-600">Check your order status</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="font-medium">Collections & Wishlist</h2>
              <p className="text-gray-600">All your curated product collections</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className=" font-medium">Myntra Credit</h2>
              <p className="text-gray-600">Manage all your refunds & gift cards</p>
            </div>
          </div>
        </div>
      
   
  )
}

export default Overview