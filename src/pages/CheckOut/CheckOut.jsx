// import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Checkout = () => {
  return (
    <div>
          <div className=" border-b py-8 px-3 flex items-center justify-between">
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

      <div>
        <Outlet/>
      </div>
       
    </div>
   
  );
};

export default Checkout;
