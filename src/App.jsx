import React, { useState } from 'react';
// import Header from './components/Header/Header'
import Header from './components/Header/Header'
import Body from './pages/Body/Body'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart/Cart'
// import { Error } from './pages/Error';
import { Error } from './pages/Error/Error'

import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { CartProvider } from './utils/Contexts/CartContext';
import ProductOverview from './components/ProductOverview/ProductOverview';
import SellerDashboard from './components/DashBoard/SellerDashboard/SellerDashboard';
import AdminDashboard from './components/DashBoard/AdminDashboard/AdminDashboard';
import CheckOut from './pages/CheckOut/CheckOut';

function App() {



  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  )
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
        path: "/overview/:id",
        element: <ProductOverview />,
      },

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
  }
]);

export default App
