

const WishList = () => {
 

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 mt-20">My Wishlist</h2>
      
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         
            <li className="bg-white rounded-md overflow-hidden shadow-md">
              <img
                src={`https://images.ctfassets.net/hnk2vsx53n6l/yHglyjIBRFs9J2L9mZNE0/72fadcf8756b77c234996a599b451b45/r5ppx8bw886aeazj0hls.png?fm=webp`}
              
                className="w-full h-32 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">product 1</h3>
                  <p className="text-gray-600">$200</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    
                    className="p-2 bg-black text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    className="p-2 bg-black text-white rounded-md hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          
        </ul>
     
    </div>
  );
};

export default WishList;
