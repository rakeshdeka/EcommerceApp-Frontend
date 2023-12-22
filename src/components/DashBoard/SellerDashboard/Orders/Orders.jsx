import React, { useState } from 'react';

const Orders = () => {
  // Sample order data, replace it with your actual data
  const initialOrders = [
    { id: 1, customer: 'Customer 1', total: 100, status: 'Processing' },
    { id: 2, customer: 'Customer 2', total: 150, status: 'Shipped' },
    // Add more orders as needed
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    // Close any modal or UI element used for status change
    setSelectedOrderId(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Order ID</th>
            <th className="py-2 px-4 border">Customer</th>
            <th className="py-2 px-4 border">Total</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="bg-white">
              <td className="py-2 px-4 border">{order.id}</td>
              <td className="py-2 px-4 border">{order.customer}</td>
              <td className="py-2 px-4 border">${order.total.toFixed(2)}</td>
              <td
                className="py-2 px-4 border cursor-pointer"
                onClick={() => setSelectedOrderId(order.id)}
              >
                {order.status}
              </td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleStatusChange(order.id, 'Processing')}
                  className="text-yellow-600 mr-2"
                >
                  Set Processing
                </button>
                <button
                  onClick={() => handleStatusChange(order.id, 'Shipped')}
                  className="text-green-600 mr-2"
                >
                  Set Shipped
                </button>
                {/* Add more status change buttons as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Optional: Add a modal or UI element for changing the order status */}
      {selectedOrderId && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black opacity-25 fixed inset-0"></div>
          <div className="bg-white p-4 z-10">
            <p>Change Order Status</p>
            <button onClick={() => handleStatusChange(selectedOrderId, 'Processing')}>
              Set Processing
            </button>
            <button onClick={() => handleStatusChange(selectedOrderId, 'Shipped')}>
              Set Shipped
            </button>
            {/* Add more status change buttons as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
