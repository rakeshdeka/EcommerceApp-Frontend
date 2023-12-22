import React, { useState } from 'react';

const SellerPromoDisc = () => {
  // Sample promotion and discount data, replace it with your actual data
  const initialPromoDiscs = [
    { id: 1, name: '20% Off Sale', discount: 20, isActive: true },
    { id: 2, name: 'Free Shipping', discount: 0, isActive: false },
    // Add more promotions and discounts as needed
  ];

  const [promoDiscs, setPromoDiscs] = useState(initialPromoDiscs);

  const handleEdit = (promoDiscId) => {
    // Implement edit functionality as needed
    console.log(`Edit promotion or discount with ID ${promoDiscId}`);
  };

  const handleDelete = (promoDiscId) => {
    // Filter out the promotion or discount with the specified ID
    const updatedPromoDiscs = promoDiscs.filter((promoDisc) => promoDisc.id !== promoDiscId);
    setPromoDiscs(updatedPromoDiscs);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Promotions and Discounts</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Discount (%)</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {promoDiscs.map((promoDisc) => (
            <tr key={promoDisc.id} className="bg-white">
              <td className="py-2 px-4 border">{promoDisc.id}</td>
              <td className="py-2 px-4 border">{promoDisc.name}</td>
              <td className="py-2 px-4 border">{promoDisc.discount}%</td>
              <td className={`py-2 px-4 border ${promoDisc.isActive ? 'text-green-600' : 'text-red-600'}`}>
                {promoDisc.isActive ? 'Active' : 'Inactive'}
              </td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleEdit(promoDisc.id)}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(promoDisc.id)}
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

export default SellerPromoDisc;
