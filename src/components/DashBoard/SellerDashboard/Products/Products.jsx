import React, { useState } from 'react';

const Products = () => {
  // Sample product data, replace it with your actual data
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 20, quantity: 50 },
    { id: 2, name: 'Product 2', price: 30, quantity: 30 },
    // Add more products as needed
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (productId) => {
    // Filter out the product with the specified ID
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEdit = (productId) => {
    // Implement edit functionality as needed
    console.log(`Edit product with ID ${productId}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Quantity</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white">
              <td className="py-2 px-4 border">{product.id}</td>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">${product.price.toFixed(2)}</td>
              <td className="py-2 px-4 border">{product.quantity}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
