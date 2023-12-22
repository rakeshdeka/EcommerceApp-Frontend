import React from 'react';

const SellerAside = ({ setActiveComponent }) => {
  return (
    <aside className="w-1/4 bg-gray-200 flex flex-col items-center gap-4 text-center p-4">
      <div className="flex flex-col items-center">
        <img
          className="inline-block h-16 w-16 rounded-full mb-2"
          src="https://avatars.githubusercontent.com/u/58238022?v=4"
          alt="Seller Avatar"
        />
        <p className="text-sm font-medium">Seller Name</p>
      </div>

      <p
        className="border border-black min-h-10 w-full px-2 py-1 cursor-pointer hover:bg-gray-300"
        onClick={() => setActiveComponent('MainDash')}
      >
        Dashboard
      </p>
      <p
        className="border border-black min-h-10 w-full px-2 py-1 cursor-pointer hover:bg-gray-300"
        onClick={() => setActiveComponent('Products')}
      >
        Products
      </p>
      <p
        className="border border-black min-h-10 w-full px-2 py-1 cursor-pointer hover:bg-gray-300"
        onClick={() => setActiveComponent('Orders')}
      >
        Orders
      </p>
      <p
        className="border border-black min-h-10 w-full px-2 py-1 cursor-pointer hover:bg-gray-300"
        onClick={() => setActiveComponent('Inventory')}
      >
        Inventory
      </p>
      <p
        className="border border-black min-h-10 w-full px-2 py-1 cursor-pointer hover:bg-gray-300"
        onClick={() => setActiveComponent('CusInfo')}
      >
        Customer Info
      </p>
      <p
        className="border border-black min-h-10 w-full px-2 py-1 cursor-pointer hover:bg-gray-300"
        onClick={() => setActiveComponent('PromoDisc')}
      >
        Promotion & Discount
      </p>
    </aside>
  );
};

export default SellerAside;
