// // import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";

// const MyDash = () => {
//   return (
//     <div>
//       <Header />
//       <div className="min-h-screen flex justify-center items-center p-6">
//         <div className="w-full max-w-5xl bg-white p-8">
//           <div className="flex items-center justify-between border-b border-slate-100 py-3">
//             <div className="flex items-center gap-4">
//               <div>
//                 <h3 className="text-base font-semibold">Account</h3>
//                 <p className="text-gray-600 text-xs">Rakesh Deka</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex">
//             {/* Sidebar */}
//             <div className="w-1/4 border-r pr-6 py-4">
//               <ul className="space-y-4 text-sm">
//                 <li><Link to="/my/dashboard" className="text-gray-600">Overview</Link></li>
//                 <li><Link to="/my/dashboard/orders" className="text-gray-600">Orders & Returns</Link></li>
//                 <li><Link to="/my/dashboard/coupons" className="text-gray-600">Coupons</Link></li>
//                 <li><Link to="/my/dashboard/myntra-credit" className="text-gray-600">Myntra Credit</Link></li>
//                 <li><Link to="/my/dashboard/myncash" className="text-gray-600">MynCash</Link></li>
//                 <li><Link to="/my/dashboard/profile" className="text-gray-600">Profile</Link></li>
//                 <li><Link to="/my/dashboard/saved-cards" className="text-gray-600">Saved Cards</Link></li>
//                 <li><Link to="/my/dashboard/saved-upi" className="text-gray-600">Saved UPI</Link></li>
//                 <li><Link to="/my/dashboard/saved-wallets-bnpl" className="text-gray-600">Saved Wallets/BNPL</Link></li>
//                 <li className="text-gray-600"> <Link to='/my/dashboard/addresses'>Addresses</Link> </li>
//                 <li className="text-gray-600">Myntra Insider</li>
//                 <li className="text-gray-600">Delete Account</li>
//               </ul>
//             </div>
//             {/* Main Content */}
//             <div className="w-3/4 pl-6 py-4">
//               <Outlet />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyDash;


import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MyDash = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex justify-center items-center p-6">
        <div className="w-full max-w-5xl bg-white p-8">
          <div className="flex items-center justify-between border-b border-slate-100 py-3">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-base font-semibold">Account</h3>
                <p className="text-gray-600 text-xs">Rakesh Deka</p>
              </div>
            </div>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 border-r pr-6 py-4">
              <ul className="space-y-4 text-sm">
                <li>
                  <NavLink
                    to="/my/dashboard/overview"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/orders"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Orders & Returns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/coupons"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Coupons
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/myntra-credit"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Myntra Credit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/myncash"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    MynCash
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/profile"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/saved-cards"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Saved Cards
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/saved-upi"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Saved UPI
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/saved-wallets-bnpl"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Saved Wallets/BNPL
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my/dashboard/addresses"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                    }
                  >
                    Addresses
                  </NavLink>
                </li>
                <li className="text-gray-600">Myntra Insider</li>
                <li className="text-gray-600">Delete Account</li>
              </ul>
            </div>
            {/* Main Content */}
            <div className="w-3/4 pl-6 py-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDash;
