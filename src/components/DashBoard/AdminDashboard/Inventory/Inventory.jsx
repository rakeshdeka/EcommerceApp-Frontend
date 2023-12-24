import React from 'react';

const Inventory = () => {

  const inventoryItems = [
    { id: 1, productName: 'Product 1', quantity: 100, lowStockThreshold: 20 },
    { id: 2, productName: 'Product 2', quantity: 50, lowStockThreshold: 10 },
    { id: 3, productName: 'Product 3', quantity: 75, lowStockThreshold: 15 },

  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Inventory Management</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Low Stock Threshold</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.productName}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">{item.lowStockThreshold}</td>
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

export default Inventory;
