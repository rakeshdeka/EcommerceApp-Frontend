// import React, { useState } from 'react';

// import Header from './components/Header/Header'
import Body from './pages/Body/Body'
// import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart/Cart'
// import { Error } from './pages/Error';
import { Error } from './pages/Error/Error'
import ProductList from './components/ProductList/ProductList'


import { createBrowserRouter, Outlet } from 'react-router-dom'
import { CartProvider } from './utils/Contexts/CartContext';
import { WishListProvider } from './utils/Contexts/WishListContext'
import ProductOverview from './components/ProductOverview/ProductOverview';
import SellerDashboard from './components/DashBoard/SellerDashboard/SellerDashboard';
import AdminDashboard from './components/DashBoard/AdminDashboard/AdminDashboard';
import CheckOut from './pages/CheckOut/CheckOut';
import WishList from './pages/WishList/WishList';
import UserProfile from './components/UserProfile/UserProfile'
// import SignUp from './components/Authentication/SignUp/SignUp';
// import Login from './components/Authentication/Login/Login';
import AddressBook from './pages/AddressBook/AddressBook'

import OrderHistory from './pages/OrderHistory/OrderHistory'
import AccountDeletion from './pages/AccountDeletion/AccountDeletion'
function App() {



  return (
    <div className=''>
      <CartProvider>
        <WishListProvider>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
        </WishListProvider>
      </CartProvider>
    </div>
  )
}

function setTitle(title) {
  document.title = title;
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
        
      },
      {
        path: "/wishlist",
        element: <WishList />,
        
      },
      {
        path: "/product-list",
        element: <ProductList />,
        
      },
      {
        path: "/checkout",
        element: <CheckOut />,
        
      },

      {
        path: "/overview/:id",
        element: <ProductOverview />,
      },
      {
        path:"/user",
    element:<UserProfile/>,
   

      }

    ],
  },
 
  {
    path: "/seller",
    element: <SellerDashboard />,
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    errorElement: <Error />,
  },
  {
    path:"/order-history",
    element:<OrderHistory/>,
    errorElement:<Error/>
  },
  {
    path:"/address-book",
    element:<AddressBook/>,
    errorElement:<Error/>

  },
  {
    path:"/deactivate",
    element:<AccountDeletion />,
    errorElement:<Error/>
  }
  
]);

export default App
