import React from 'react';

const AdminAside = ({ setAdminActiveComponent }) => {
  return (
    <>
      <aside className="w-1/4 bg-gray-200 flex flex-col gap-4 text-center p-4">
        <div className="flex flex-col items-center">
          <img
            className="inline-block h-16 w-16 rounded-full mb-2"
            src="https://avatars.githubusercontent.com/u/58238022?v=4"
            alt="Admin Avatar"
          />
          <p className="text-gray-700 font-semibold">Admin Name</p>
        </div>

        <p
          className="border border-black min-h-12  cursor-pointer bg-black text-white hover:underline rounded-md p-2"
          onClick={() => setAdminActiveComponent('AdminMainDash')}
        >
          Dashboard
        </p>
        <p
          className="border border-black min-h-12 cursor-pointer  bg-black text-white hover:underline rounded-md p-2"
          onClick={() => setAdminActiveComponent('Products')}
        >
          Products
        </p>
        <p
          className="border border-black min-h-12 cursor-pointer bg-black text-white hover:underline rounded-md p-2"
          onClick={() => setAdminActiveComponent('Sellers')}
        >
          Sellers
        </p>
        <p
          className="border border-black min-h-12 cursor-pointer bg-black text-white hover:underline rounded-md p-2"
          onClick={() => setAdminActiveComponent('Inventory')}
        >
          Inventory
        </p>
        <p
          className="border border-black min-h-12 cursor-pointer bg-black text-white hover:underline rounded-md p-2"
          onClick={() => setAdminActiveComponent('UserMang')}
        >
          User Management
        </p>
        <p
          className="border border-black min-h-12 cursor-pointer bg-black text-white hover:underline rounded-md p-2"
          onClick={() => setAdminActiveComponent('PromoDisc')}
        >
          Promotion & Discount
        </p>
      </aside>
    </>
  );
};

export default AdminAside;
