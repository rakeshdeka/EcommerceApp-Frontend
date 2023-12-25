import React, { useState } from 'react';

const UserMang = () => {

  const initialCustomers = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com', orders: 5 },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com', orders: 8 },
  
  ];

 

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
      <table className="min-w-full border border-gray-300 bg-[#00800059]">
        <thead >
          <tr className="">
            <th className="py-2 px-4 border">Customer ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {initialCustomers.map((customer) => (
            <tr key={customer.id} className="bg-white">
              <td className="py-2 px-4 border">{customer.id}</td>
              <td className="py-2 px-4 border">{customer.name}</td>
              <td className="py-2 px-4 border">{customer.email}</td>
              <td className="py-2 px-4 border">{customer.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMang;
