import React from 'react'

const Address = () => {
  return (
 <div className="p-4 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Saved Addresses</h2>
        <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-100 transition">
          + ADD NEW ADDRESS
        </button>
      </div>

      {/* Address Card */}
      <div className="border rounded-md shadow-sm p-4 bg-white text-sm">
        <div className="flex justify-between items-center mb-2">
          <div>
      
            <p className="text-xs font-bold uppercase">Default Address</p>
                  <h3 className="font-bold text-gray-500">Rakesh Deka</h3>
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">Home</span>
        </div>
        <p className="text-gray-600 mb-2 text-xs">
          Near Ganesh Mandir, Ganesh Nagar, Guwahati College road<br />
          Bamunimaidan<br />
          Guwahati - 781021<br />
          Assam
        </p>
        <p className="text-gray-600">
          Mobile: 7002436065
        </p>

        {/* Action Buttons */}
        <div className="flex mt-4 border-t pt-2">
          <button className="flex-1 text-blue-500 font-semibold hover:underline">EDIT</button>
          <div className="border-l" />
          <button className="flex-1 text-blue-500 font-semibold hover:underline">REMOVE</button>
        </div>
      </div>
    </div>
  )
}

export default Address