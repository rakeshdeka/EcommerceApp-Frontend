import React from 'react';
import { Link } from 'react-router-dom';
import OrderHistory from '../../pages/OrderHistory/OrderHistory';
// import { useAuth } from '../../utils/Contexts/AuthContext'; // Assuming you have an authentication context
// import OrderHistory from './OrderHistory'; // You may need to create a component for order history
// import SavedItems from './SavedItems'; // You may need to create a component for saved items

function UserProfile() {
//   const { currentUser } = useAuth(); // Access user information from your authentication context

  // Sample user information
  const userData = {
    username: 'john_doe',
    email: 'john@example.com',
    // ... other user information
  };

  return (
    <div className="container mx-auto mt-8">
      <Link to="/">
      <h2 className='text-blue-500 underline'> ⬅️back to home</h2></Link>
      
      <div className="flex justify-between items-center mb-6 mt-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <span className="text-blue-500 hover:underline cursor-pointer">
          Edit Profile🤚
        </span>
      </div>

      <div className="bg-white p-4 shadow-md rounded-md border border-black">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="mb-4">
          <strong>Username:</strong> {userData.username}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {userData.email}
        </div>
        {/* ... other account information */}
      </div>
     
      <div className="mt-8">
         <Link to="/order-history">
        <span className='underline cursor-pointer text-blue-500'>
          Order History ➡️
        </span>
       
        </Link>
      
      </div>
      
     
       
      <div className="mt-8">
         <Link to="/wishlist">
        <span className='underline cursor-pointer text-blue-500'>Wishlist itmes ➡️</span>
         </Link>
      </div>
     
      <div className="mt-8 ">
        <Link to="/address-book">
        
        <span className='underline cursor-pointer text-blue-500'>Change or Update Address ➡️</span>
        </Link>
      </div>
      <div className="mt-8">
        <Link to="/deactivate">
        <span className='underline cursor-pointer text-blue-500'>Account Deactivation or Deletion ➡️</span>
        </Link>
      </div>
      
    </div>
  );
}

export default UserProfile;
