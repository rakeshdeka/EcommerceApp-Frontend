import React from 'react';

const Sellers = () => {

  const sellers = [
    { id: 1, name: 'Seller 1', email: 'seller1@example.com', productsCount: 20 },
    { id: 2, name: 'Seller 2', email: 'seller2@example.com', productsCount: 15 },
    { id: 3, name: 'Seller 3', email: 'seller3@example.com', productsCount: 25 },

  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Seller Management</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Seller Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Products Count</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map(seller => (
            <tr key={seller.id}>
              <td className="py-2 px-4 border-b">{seller.id}</td>
              <td className="py-2 px-4 border-b">{seller.name}</td>
              <td className="py-2 px-4 border-b">{seller.email}</td>
              <td className="py-2 px-4 border-b">{seller.productsCount}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellers;
