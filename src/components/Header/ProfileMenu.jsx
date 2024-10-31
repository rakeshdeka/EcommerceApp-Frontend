// import React from 'react'

const ProfileMenu = () => {
  return (
       <div className="absolute top-3 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[20px] transform">
    <div className="relative top-6 p-6 bg-white shadow-xl w-full">
        {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
        <div className="relative z-10">
            <div className=" w-56 p-2 border-gray-200">
      <div className="mb-6">
        <h2 className="font-bold text-xs">Hello Rakesh</h2>
        <p className="text-gray-600 text-xs">7002436065</p>
      </div>
      <ul className="space-y-2 text-xs">
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Orders</li>
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Wishlist</li>
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Gift Cards</li>
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Contact Us</li>
        <li className="text-gray-800 flex items-center hover:text-blue-500 cursor-pointer">
          Myntra Insider
          <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2">New</span>
        </li>
        <li className="border-t border-gray-200 pt-4">
          <ul className="space-y-2">
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Myntra Credit</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Coupons</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Saved Cards</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Saved VPA</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Saved Addresses</li>
          </ul>
        </li>
        <li className="border-t border-gray-200 pt-4">
          <ul className="space-y-2">
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Edit Profile</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Logout</li>
          </ul>
        </li>
      </ul>
    </div>
        </div>
    </div>
</div>
  )
}

export default ProfileMenu