

const Products = () => {
  
  const products = [
    { id: 1, name: 'Product 1', price: 20, stock: 50 },
    { id: 2, name: 'Product 2', price: 30, stock: 30 },
  
  ];



  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Stock</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white">
              <td className="py-2 px-4 border">{product.id}</td>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">${product.price}</td>
              <td className="py-2 px-4 border">{product.stock}</td>
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

export default Products;
