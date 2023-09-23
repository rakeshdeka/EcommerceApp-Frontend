import React, { useState } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Cart from './components/Cart'
import { Error } from './components/Error';
import ProductCard from './components/ProductCard';
import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { CartProvider } from './utils/Contexts/CartContext';
import ProductOverview from './components/ProductOverview';


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
      }

    ],
  },
]);

export default App
