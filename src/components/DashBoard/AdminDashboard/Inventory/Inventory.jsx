

const Inventory = () => {
  const inventoryItems = [
      { id: 1, productName: 'Product 1', quantity: 100, lowStockThreshold: 20 },
    { id: 2, productName: 'Product 2', quantity: 50, lowStockThreshold: 10 },
    { id: 3, productName: 'Product 3', quantity: 75, lowStockThreshold: 15 },
  
  ];


  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Product Name</th>
            <th className="py-2 px-4 border">Quatity</th>
            <th className="py-2 px-4 border">Low stock Threshold</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id} className="bg-white">
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.productName}</td>
              <td className="py-2 px-4 border">${item.quantity}</td>
              <td className="py-2 px-4 border">{item.lowStockThreshold}</td>
              <td className="py-2 px-4 border">
                <button
                 
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
               
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;

