
import BarChart from "../Charts/BarChart"
import LineChart from "../Charts/LineChart"
import {useState} from "react"
import {UserData} from "../../Data/UserData"
const AdminMainDash = () => {

const [userData, setUserData] = useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label:"Users Gained",
      data: UserData.map((data)=>data.userGain),
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
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className='App' style={{display:"flex", flexWrap: 'wrap'}}>
      <div style={{width:"500px", height:"300px"}}>
        <BarChart chartData={userData}/>
      </div>
      <div style={{width:"500px", height:"300px"}}>
        <LineChart chartData={userData}/>
      </div>
     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Products</h3>
          <a href="/products" className="text-blue-500 hover:underline">
            View Products
          </a>
        </div>

     
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Manage Sellers</h3>
          <a href="/manage-sellers" className="text-blue-500 hover:underline">
            Manage Sellers
          </a>
        </div>

        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Orders</h3>
          <a href="/orders" className="text-blue-500 hover:underline">
            View Orders
          </a>
        </div>

       
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Manage Users</h3>
          <a href="/manage-users" className="text-blue-500 hover:underline">
            Manage Users
          </a>
        </div>

      
        <div className="bg-white p-4 border border-black">
          <h3 className="text-lg font-bold mb-2">Manage Contents</h3>
          <a
            href="/manage-contents"
            className="text-blue-500 hover:underline"
          >
            Manage Contents
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



export default AdminMainDash