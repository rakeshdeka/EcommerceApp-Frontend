import React from 'react';

const Products = () => {

  const products = [
    { id: 1, name: 'Product 1', price: 29.99, stock: 50 },
    { id: 2, name: 'Product 2', price: 39.99, stock: 30 },
    { id: 3, name: 'Product 3', price: 49.99, stock: 20 },
  
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Product Management</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{`₹${product.price.toFixed(2)}`}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
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

export default Products;
