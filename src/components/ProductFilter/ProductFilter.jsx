

const ProductFilter = () => {
  

  return (
    <div className="bg-gray-200 p-4 hidden sm:block fixed z-50">
      <h2 className="text-lg font-bold mb-4">Filter Options</h2>
      <div className="mb-4 sm:static">
        <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
        <select
         
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Color</label>
        <select
        
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          {/* Add color options dynamically */}
          <option value="all">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          {/* Add more color options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Size</label>
        <select
          
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          {/* Add size options dynamically */}
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          {/* Add more size options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Brand</label>
        <select
         
          className="p-2 border border-gray-300 rounded-md w-full"
        >
        
          <option value="all">All</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
        
        </select>
      </div>
     <div className="flex justify-between">
  <button
    className="p-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
  >
    Apply
  </button>
  <button
    className="p-2 bg-black text-gray-600 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
  >
    Reset
  </button>
</div>

    </div>
  );
};

export default ProductFilter ;
