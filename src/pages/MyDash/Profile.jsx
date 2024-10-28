

const Profile = () => {
  return (
     <div className="p-6 bg-white border border-slate-100">
      {/* Header */}
      <div className=' p-8 px-14'>

      
      <h2 className="text-lg font-semibold mb-4">Profile Details</h2>
      <hr className="mb-4" />

      {/* Profile Details */}
      <div className="grid grid-cols-2 gap-y-7 text-gray-700 text-sm ">
        <span className="font-normal">Full Name</span>
        <span>Rakesh Deka</span>

        <span className="font-normal">Mobile Number</span>
        <span>7002436065</span>

        <span className="font-normal">Email ID</span>
        <span>rakeshdekaa21@gmail.com</span>

        <span className="font-normal">Gender</span>
        <span>MALE</span>

        <span className="font-normal">Date of Birth</span>
        <span className="text-gray-400">- not added -</span>

        <span className="font-normal">Location</span>
        <span className="text-gray-400">- not added -</span>

        <span className="font-normal">Alternate Mobile</span>
        <span className="text-gray-400">- not added -</span>

        <span className="font-normal">Hint Name</span>
        <span className="text-gray-400">- not added -</span>
      </div>

      {/* Edit Button */}
      <div className="mt-6">
        <button className="w-full py-2 bg-[#FF3F6C] text-white font-semibold hover:bg-pink-600 transition">
          EDIT
        </button>
      </div>
      </div>
    </div>
  )
}

export default Profile