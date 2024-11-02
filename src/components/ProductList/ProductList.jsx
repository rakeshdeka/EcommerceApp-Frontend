import { useState } from 'react';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import SortMenu from './components/SortMenu';

const filters = {
  categories: [
    { name: "Tshirts", count: 2061 },
    { name: "Shirts", count: 739 },
    { name: "Jeans", count: 466 },
    { name: "Trousers", count: 226 },
    { name: "Sweatshirts", count: 215 },
    { name: "Sweaters", count: 176 },
    { name: "Shorts", count: 127 },
    { name: "Jackets", count: 95 },
  ],
  brands: [
    { name: "Roadster", count: 4258 },
    { name: "Campus Sutra", count: 1522 },
    { name: "SHOWOFF", count: 1281 },
  ],
  colors: [
    { name: "Black", colorCode: "#333", count: 24782 },
    { name: "White", colorCode: "#FFF", count: 19059 },
    { name: "Blue", colorCode: "#007bff", count: 18924 },
    { name: "Navy Blue", colorCode: "#001f5b", count: 12077 },
    { name: "Green", colorCode: "#28a745", count: 11323 },
    { name: "Grey", colorCode: "#6c757d", count: 9227 },
    { name: "Red", colorCode: "#dc3545", count: 7168 },
  ],
  discounts: [
    "10% and above",
    "20% and above",
    "30% and above",
    "40% and above",
    "50% and above",
  ]
};

const ProductPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([100, 10100]);

  const handleFilterClick = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const handleDiscountChange = (discount) => {
    setSelectedDiscount(discount);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setSelectedPrice((prev) => name === "min" ? [Number(value), prev[1]] : [prev[0], Number(value)]);
  };

  const products = [
    {
      id: 1,
      brand: "Calvin Klein Jeans",
      description: "Front-Open Cotton Sweatshirt",
      price: 5399,
      originalPrice: 8999,
      discount: 40,
      imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240716/n9tw/6696adcd1d763220fac889c2/-473Wx593H-466952704-blue-MODEL.jpg",
      size: "XL",
    },
    {
      id: 2,
      brand: "Tommy Hilfiger",
      description: "Men Cotton Argyle Pullover",
      price: 3599,
      originalPrice: 5999,
      discount: 40,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVz4sA3LYPMIRWe21Qhq4oVY2cV6O7tjbbQ&s",
      size: "L",
    },
    {
      id: 3,
      brand: "Puma",
      description: "Men's Sports Hoodie",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240716/n9tw/6696adcd1d763220fac889c2/-473Wx593H-466952704-blue-MODEL.jpg",
      size: "M",
    },
    {
      id: 4,
      brand: "Nike",
      description: "Dri-FIT Running T-Shirt",
      price: 1899,
      originalPrice: 2699,
      discount: 30,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWwA-_R-7_30T9KDiSa9V7R0j3-trUUfm6A&s",
      size: "S",
    },
    {
      id: 5,
      brand: "Adidas",
      description: "Essentials Track Pants",
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQh3XXYh2fT9JdmEuheR4aiL3V0Ocn9ta-g&s",
      size: "M",
    },
    {
      id: 6,
      brand: "Levi's",
      description: "Slim Fit Jeans",
      price: 3299,
      originalPrice: 4599,
      discount: 28,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2A-5ufR-T_zlpODf8AljYP1BpCuvIGmg7Q&s",
      size: "32",
    },
    {
      id: 7,
      brand: "Zara",
      description: "Men's Denim Jacket",
      price: 4999,
      originalPrice: 6999,
      discount: 29,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkjIFIphqxd4KZClCCtm5S7Kc6Bz-JixQaw&s",
      size: "L",
    },
    {
      id: 8,
      brand: "H&M",
      description: "Round Neck Cotton T-Shirt",
      price: 799,
      originalPrice: 999,
      discount: 20,
      imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240829/6gB4/66d0282d1d763220faaa566f/-473Wx593H-700319258-green-MODEL.jpg",
      size: "M",
    },
    {
      id: 9,
      brand: "Under Armour",
      description: "HeatGear Compression Shirt",
      price: 2199,
      originalPrice: 2999,
      discount: 27,
      imageUrl: "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/1/3/1361518-120230715105711372.jpg",
      size: "L",
    },
    {
      id: 10,
      brand: "Reebok",
      description: "Workout Ready Shorts",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7MekLNLsUy-f9cMWw6-9t135orG82nDNZQ&s",
      size: "XL",
    }
  ];


  return (
    <div>
      <Header />

      <div className=" py-5">
        {/* Breadcrumbs */}
        <nav className="text-gray-800 text-sm px-4">
          <Link to="/" className="hover:text-gray-900">Home</Link> / <Link to="/clothing" className="hover:text-gray-900">Clothing</Link> / <span className=' text-black font-semibold'>Mens Apparel</span>
        </nav>

        {/* Title and Filter Counts */}
        <div className="mt-2 mb-4 flex justify-between items-center px-4">
          <h1 className="text-sm font-semibold">Mens Apparel - <span className='font-normal text-gray-400' >486 items</span> </h1>
          {/* <div className="text-gray-500 text-sm">Sort by: <span className="text-gray-800 font-semibold">Recommended</span></div> */}
          <SortMenu />
        </div>

        <div className="flex space-x-10">
          {/* Sidebar Filters */}
          <aside className="w-[15%] space-y-5">
            <div className="mb-6 flex justify-between items-center px-4">
              <h2 className="text-sm font-bold">FILTERS</h2>
              <button onClick={() => setSelectedFilters([])} className="text-[#FF3F6C] font-semibold text-xs">CLEAR ALL</button>
            </div>

            <div className='border border-slate-200 p-5 px-6 space-y-6'>

              {/* Categories Filter */}
              <div className="text-xs">
                <h3 className="text-gray-800 font-bold mb-2">CATEGORIES</h3>
                {filters.categories.map((category) => (
                  <div key={category.name} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={category.name}
                      onChange={() => handleFilterClick(category.name)}
                      checked={selectedFilters.includes(category.name)}
                      className="mr-2 h-4 w-4 accent-pink-600"
                    />
                    <label htmlFor={category.name} className="text-sm text-gray-700">
                      {category.name}
                      <span className="text-gray-500 ml-1">({category.count})</span>
                    </label>
                  </div>
                ))}
                <p className="text-pink-600 cursor-pointer text-sm">+ 2 more</p>
              </div>

              {/* Brand Filter */}
              <div className="text-xs">
                <h3 className="text-gray-800 font-bold mb-2">BRAND</h3>
                {filters.brands.slice(0, 5).map((brand) => (
                  <div key={brand.name} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={brand.name}
                      onChange={() => handleFilterClick(brand.name)}
                      checked={selectedFilters.includes(brand.name)}
                      className="mr-2 h-4 w-4 accent-pink-600"
                    />
                    <label htmlFor={brand.name} className="text-sm text-gray-700">
                      {brand.name} <span className="text-gray-500 ml-1">({brand.count})</span>
                    </label>
                  </div>
                ))}
                <p className="text-pink-600 cursor-pointer text-sm">+ 857 more</p>
              </div>

              {/* Price Filter */}
              <div className="text-xs">
                <h3 className="text-gray-800 font-bold mb-2">PRICE</h3>
                <input
                  type="range"
                  min="100"
                  max="10100"
                  value={selectedPrice[0]}
                  onChange={handlePriceChange}
                  name="min"
                  className="w-full mb-2"
                />
                <input
                  type="range"
                  min="100"
                  max="10100"
                  value={selectedPrice[1]}
                  onChange={handlePriceChange}
                  name="max"
                  className="w-full"
                />
                <p className="text-gray-700 mt-1">₹{selectedPrice[0]} - ₹{selectedPrice[1]}+</p>
              </div>

              {/* Color Filter */}
              <div className="text-xs">
                <h3 className="text-gray-800 font-bold mb-2">COLOR</h3>
                {filters.colors.slice(0, 4).map((color) => (
                  <div key={color.name} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={color.name}
                      onChange={() => handleFilterClick(color.name)}
                      checked={selectedFilters.includes(color.name)}
                      className="mr-2 h-4 w-4 accent-pink-600"
                    />
                    <label htmlFor={color.name} className="flex items-center text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color.colorCode }}></span>
                      {color.name} <span className="text-gray-500 ml-1">({color.count})</span>
                    </label>
                  </div>
                ))}
                <p className="text-pink-600 cursor-pointer text-sm">+ 46 more</p>
              </div>

              {/* Discount Filter */}
              <div className="text-xs">
                <h3 className="text-gray-800 font-bold mb-2">DISCOUNT RANGE</h3>
                {filters.discounts.map((discount) => (
                  <div key={discount} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="discount"
                      value={discount}
                      checked={selectedDiscount === discount}
                      onChange={() => handleDiscountChange(discount)}
                      className="mr-2 h-4 w-4 accent-pink-600"
                    />
                    <label htmlFor={discount} className="text-sm text-gray-700">{discount}</label>
                  </div>
                ))}
              </div>
            </div>
          </aside>


          {/* Product List */}
          <main className="w-[85%] pr-5">
            {/* Selected Filters */}
            <div className="flex items-center mb-4 space-x-2">
              {selectedFilters.map((filter, index) => (
                <span key={index} className=" border border-slate-200 text-xs hover:border-slate-400 transition-colors px-3 py-1 rounded-full flex items-center">
                  {filter}
                  <button
                    onClick={() => handleFilterClick(filter)}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            {/* <SortMenu/> */}

            {/* Product Cards */}
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>

  );
};

export default ProductPage;
