import React from 'react';

const PromoDisc = () => {
  // Dummy data for demonstration
  const promotions = [
    { id: 1, name: 'Summer Sale', discountPercentage: 20, startDate: '2023-06-01', endDate: '2023-06-30' },
    { id: 2, name: 'Clearance Sale', discountPercentage: 30, startDate: '2023-07-15', endDate: '2023-07-31' },
    { id: 3, name: 'Holiday Special', discountPercentage: 25, startDate: '2023-12-01', endDate: '2023-12-31' },
    // Add more promotions as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Promotion & Discount Management</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Promotion Name</th>
            <th className="py-2 px-4 border-b">Discount Percentage</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map(promotion => (
            <tr key={promotion.id}>
              <td className="py-2 px-4 border-b">{promotion.id}</td>
              <td className="py-2 px-4 border-b">{promotion.name}</td>
              <td className="py-2 px-4 border-b">{`${promotion.discountPercentage}%`}</td>
              <td className="py-2 px-4 border-b">{promotion.startDate}</td>
              <td className="py-2 px-4 border-b">{promotion.endDate}</td>
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

export default PromoDisc;
