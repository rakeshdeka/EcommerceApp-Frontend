import React from 'react';

const UserMang = () => {
  // Dummy data for demonstration
  const users = [
    { id: 1, username: 'User1', email: 'user1@example.com', role: 'Customer' },
    { id: 2, username: 'User2', email: 'user2@example.com', role: 'Admin' },
    { id: 3, username: 'User3', email: 'user3@example.com', role: 'Customer' },
    // Add more users as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">User Management</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
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

export default UserMang;
