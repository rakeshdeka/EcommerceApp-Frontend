

const Sellers = () => {

  const sellers = [
    { id: 1, name: 'Seller 1', email: 'seller1@example.com', productsCount: 20 },
    { id: 2, name: 'Seller 2', email: 'seller2@example.com', productsCount: 15 },
    { id: 3, name: 'Seller 3', email: 'seller3@example.com', productsCount: 25 },
   
  ];


  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
      <table className="min-w-full border border-gray-300 bg-[#00800059]">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Customer ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Total Products</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id} className="bg-white">
              <td className="py-2 px-4 border">{seller.id}</td>
              <td className="py-2 px-4 border">{seller.name}</td>
              <td className="py-2 px-4 border">{seller.email}</td>
              <td className="py-2 px-4 border">{seller.productsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellers;

