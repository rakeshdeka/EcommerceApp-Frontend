// import React from 'react'
import { Link } from "react-router-dom"
const ProfileMenu = () => {
  const isLogin = false;
  return (
    <div className="absolute top-3 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[20px] transform">
      <div className="relative top-6 p-6 bg-white shadow-xl w-full">
        {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
        <div className="relative z-10">
          <div className=" w-56 p-2 border-gray-200">
            {isLogin ? (
              <div className="mb-6">
                <h2 className="font-bold text-xs">Hello Rakesh</h2>
                <p className="text-gray-600 text-xs">7002436065</p>
              </div>
            ) : (
              <div className=" text-xs space-y-2 mb-6 border- pb-3 border-slate-100">
                <h3 className=" font-bold">Welcome</h3>
                <p>To access account and manage orders</p>
                <Link to="/login" >
                  <div className="p-2 px-3 cursor-pointer border font-bold inline-block text-[#FF3F6C] border-slate-100 hover:border-[#FF3F6C] transition-colors">
                    LOGIN / SIGNUP
                  </div>
                </Link>
              </div>
            )}

            <ul className="space-y-2 text-xs">
              <Link to="/my/dashboard/orders">
                <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Orders</li>
              </Link>
              <Link to="/wishlist">
                <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Wishlist</li>
              </Link>

              <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Gift Cards</li>
              <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Contact Us</li>
              <li className="text-gray-800 flex items-center hover:font-bold cursor-pointer transition-colors">
                Myntra Insider
                <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2">New</span>
              </li>
              <li className="border-t border-gray-200 pt-4">
                <ul className="space-y-2">
                  <Link to="/my/dashboard/myntra-credit">
                    <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Myntra Credit</li>
                  </Link>
                  <Link to="/my/dashboard/coupons">

                    <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Coupons</li>
                  </Link>
                  <Link to="/my/dashboard/saved-cards">
                    <li className="text-gray-800 hover:font-bold cursor-pointe transition-colorsr">Saved Cards</li>
                  </Link>
                  <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Saved VPA</li>
                  <Link to="/my/dashboard/addresses">
                    <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Saved Addresses</li>
                  </Link>
                </ul>
              </li>
              <li className="border-t border-gray-200 pt-4">
                <ul className="space-y-2">
                  <Link to="/my/dashboard">
                    <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Edit Profile</li>
                  </Link>
                  <li className="text-gray-800 hover:font-bold cursor-pointer transition-colors">Logout</li>
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