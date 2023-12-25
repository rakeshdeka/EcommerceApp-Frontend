import React from 'react';
import { ClothingStockData } from '../../Data/ClothingStockData';
import BarChart from '../../AdminDashboard/Charts/BarChart';
import LineChart from '../../AdminDashboard/Charts/LineChart';
import { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const SellerMainDashboard = () => {

  const [clothingStockData, setClothingStockData] = useState({
    labels:ClothingStockData.map((data)=>data.itemName),
    datasets:[{
      label:"Available Stocks",
      data: ClothingStockData.map((data)=>data.quantityInStock),
      backgroundColor:[
        "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
      ],
      borderColor:["black"],
      borderWidth:2
    }]
  })



  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4"> Dashboard</h2>
      <div className='App' style={{display:"flex", flexWrap: 'wrap'}}>
      <div style={{width:"500px", height:"300px"}}>
        <BarChart chartData={clothingStockData}/>
      </div>
      <div style={{width:"500px", height:"300px"}}>
        <LineChart chartData={clothingStockData}/>
      </div>
     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
     
        <div className="bg-white p-4  border border-black">
          <h3 className="text-lg font-bold mb-2">Products</h3>
          
         
          <a href="/products" className="text-blue-500 hover:underline">
            View Products
          </a>
        </div>

      
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Add Products</h3>
       
          <a href="/add-products" className="text-blue-500 hover:underline">
            Add New Products
          </a>
        </div>

    
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Manage Profile</h3>
        
          <a href="/profile" className="text-blue-500 hover:underline">
            Manage Profile
          </a>
        </div>

       
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Orders</h3>
       
          <a href="/orders" className="text-blue-500 hover:underline">
            View Orders
          </a>
        </div>

        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Payment Details</h3>
        
          <a href="/payment-details" className="text-blue-500 hover:underline">
            View Payment Details
          </a>
        </div>

      
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Transaction Details</h3>
         
          <a
            href="/transaction-details"
            className="text-blue-500 hover:underline"
          >
            View Transactions
          </a>
        </div>

      
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Change Password</h3>
      
          <a href="/change-password" className="text-blue-500 hover:underline">
            Change Password
          </a>
        </div>

   
      

      </div>
  
    </div>
  );
};

export default SellerMainDashboard;

