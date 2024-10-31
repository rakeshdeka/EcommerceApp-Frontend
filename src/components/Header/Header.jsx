
import {  FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import StudioMenu from './StudioMenu';
import ProfileMenu from './ProfileMenu';

function Header() {
    const manCategories = [
  {
    title: "Topwear",
    items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"],
  },
  {
    title: "Indian & Festive Wear",
    items: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"],
  },
  {
    title: "Bottomwear",
    items: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"],
  },
  {
    title: "Innerwear & Sleepwear",
    items: ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"],
  },
  {
    title: "Plus Size",
    items: [],
  },
  {
    title: "Footwear",
    items: ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"],
  },
  {
    title: "Personal Care & Grooming",
    items: [],
  },
  {
    title: "Sunglasses & Frames",
    items: [],
  },
  {
    title: "Watches",
    items: [],
  },
  {
    title: "Sports & Active Wear",
    items: ["Sports Shoes", "Sports Sandals", "Active T-Shirts", "Track Pants & Shorts", "Tracksuits", "Jackets & Sweatshirts", "Sports Accessories", "Swimwear"],
  },
  {
    title: "Gadgets",
    items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
  },
  {
    title: "Fashion Accessories",
    items: ["Wallets", "Belts", "Perfumes & Body Mists", "Trimmers", "Deodorants", "Ties, Cufflinks & Pocket Squares", "Accessory Gift Sets", "Caps & Hats", "Mufflers, Scarves & Gloves", "Phone Cases", "Rings & Wristwear", "Helmets"],
  },
  {
    title: "Bags & Backpacks",
    items: [],
  },
  {
    title: "Luggages & Trolleys",
    items: [],
  }
];

const womanCategories = [
  {
    title: "Indian & Fusion Wear",
    items: [
      "Kurtas & Suits",
      "Kurtis, Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings, Salwars & Churidars",
      "Skirts & Palazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
      "Belts, Scarves & More",
      "Watches & Wearables",
    ],
  },
  {
    title: "Western Wear",
    items: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Jeans",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Co-ords",
      "Playsuits",
      "Jumpsuits",
      "Shrugs",
      "Sweaters & Sweatshirts",
      "Jackets & Coats",
      "Blazers & Waistcoats",
    ],
  },
  {
    title: "Plus Size",
    items: ["Maternity"],
  },
  {
    title: "Sunglasses & Frames",
    items: [],
  },
  {
    title: "Footwear",
    items: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
    ],
  },
  {
    title: "Sports & Active Wear",
    items: [
      "Clothing",
      "Footwear",
      "Sports Accessories",
      "Sports Equipment",
    ],
  },
  {
    title: "Lingerie & Sleepwear",
    items: [
      "Bra",
      "Briefs",
      "Shapewear",
      "Sleepwear & Loungewear",
      "Swimwear",
      "Camisoles & Thermals",
    ],
  },
  {
    title: "Beauty & Personal Care",
    items: ["Makeup", "Skincare", "Premium Beauty", "Lipsticks", "Fragrances"],
  },
  {
    title: "Gadgets",
    items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
  },
  {
    title: "Jewellery",
    items: ["Fashion Jewellery", "Fine Jewellery", "Earrings"],
  },
  {
    title: "Bags & Backpacks",
    items: ["Backpacks", "Handbags, Bags & Wallets"],
  },
  {
    title: "Luggages & Trolleys",
    items: [],
  },
];

const kidsCategories = [
  {
    title: "Boys Clothing",
    items: [
      "T-Shirts",
      "Shirts",
      "Shorts",
      "Jeans",
      "Trousers",
      "Clothing Sets",
      "Ethnic Wear",
      "Track Pants & Pyjamas",
      "Jacket, Sweater & Sweatshirts",
      "Party Wear",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
  },
  {
    title: "Girls Clothing",
    items: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Clothing Sets",
      "Lehenga choli",
      "Kurta Sets",
      "Party wear",
      "Dungarees & Jumpsuits",
      "Skirts & shorts",
      "Tights & Leggings",
      "Jeans, Trousers & Capris",
      "Jacket, Sweater & Sweatshirts",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
  },
  {
    title: "Footwear",
    items: [
      "Casual Shoes",
      "Flipflops",
      "Sports Shoes",
      "Flats",
      "Sandals",
      "Heels",
      "School Shoes",
      "Socks",
    ],
  },
  {
    title: "Toys & Games",
    items: [
      "Learning & Development",
      "Activity Toys",
      "Soft Toys",
      "Action Figure / Play set",
    ],
  },
  {
    title: "Infants",
    items: [
      "Bodysuits",
      "Rompers & Sleepsuits",
      "Clothing Sets",
      "Tshirts & Tops",
      "Dresses",
      "Bottom wear",
      "Winter Wear",
      "Innerwear & Sleepwear",
      "Infant Care",
    ],
  },
  {
    title: "Home & Bath",
    items: [
      "Personal Care",
    ],
  },
  {
    title: "Kids Accessories",
    items: [
      "Bags & Backpacks",
      "Watches",
      "Jewellery & Hair accessory",
      "Sunglasses",
      "Masks & Protective Gears",
      "Caps & Hats",
    ],
  },
  {
    title: "Brands",
    items: [
      "H&M",
      "Max Kids",
      "Pantaloons",
      "United Colors Of Benetton Kids",
      "YK",
      "U.S. Polo Assn. Kids",
      "Mothercare",
      "HRX",
    ],
  },
];
const homeDecorCategories = [
  {
    title: "Bed Linen & Furnishing",
    items: [
      "Bed Runners",
      "Mattress Protectors",
      "Bedsheets",
      "Bedding Sets",
      "Blankets, Quilts & Dohars",
      "Pillows & Pillow Covers",
      "Bed Covers",
      "Diwan Sets",
      "Chair Pads & Covers",
      "Sofa Covers",
    ],
  },
  {
    title: "Flooring",
    items: [
      "Floor Runners",
      "Carpets",
      "Floor Mats & Dhurries",
      "Door Mats",
    ],
  },
  {
    title: "Bath",
    items: [
      "Bath Towels",
      "Hand & Face Towels",
      "Beach Towels",
      "Towels Set",
      "Bath Rugs",
      "Bath Robes",
      "Bathroom Accessories",
      "Shower Curtains",
    ],
  },
  {
    title: "Lamps & Lighting",
    items: [
      "Floor Lamps",
      "Ceiling Lamps",
      "Table Lamps",
      "Wall Lamps",
      "Outdoor Lamps",
      "String Lights",
    ],
  },
  {
    title: "Home Décor",
    items: [
      "Plants & Planters",
      "Aromas & Candles",
      "Clocks",
      "Mirrors",
      "Wall Décor",
      "Festive Decor",
      "Pooja Essentials",
      "Wall Shelves",
      "Fountains",
      "Showpieces & Vases",
      "Ottoman",
      "Cushions & Cushion Covers",
      "Curtains",
      "Home Gift Sets",
    ],
  },
  {
    title: "Kitchen & Table",
    items: [
      "Table Runners",
      "Dinnerware & Serveware",
      "Cups and Mugs",
      "Bakeware & Cookware",
      "Kitchen Storage & Tools",
      "Bar & Drinkware",
      "Table Covers & Furnishings",
    ],
  },
  {
    title: "Storage",
    items: [
      "Bins",
      "Hangers",
      "Organisers",
      "Hooks & Holders",
      "Laundry Bags",
    ],
  },
  {
    title: "Brands",
    items: [
      "H&M",
      "Marks & Spencer",
      "Home Centre",
      "Spaces",
      "D'Decor",
      "Story@Home",
      "Pure Home & Living",
      "Swayam",
      "Raymond Home",
      "Maspar",
      "My Trident",
      "Cortina",
      "Random",
      "Ellementry",
      "ROMEE",
      "SEJ by Nisha Gupta",
    ],
  },
];

const beautyCategories = [
  {
    title: "Makeup",
    items: [
      "Lipstick",
      "Lip Gloss",
      "Lip Liner",
      "Mascara",
      "Eyeliner",
      "Kajal",
      "Eyeshadow",
      "Foundation",
      "Primer",
      "Concealer",
      "Compact",
      "Nail Polish",
    ],
  },
  {
    title: "Skincare, Bath & Body",
    items: [
      "Face Moisturiser",
      "Cleanser",
      "Masks & Peel",
      "Sunscreen",
      "Serum",
      "Face Wash",
      "Eye Cream",
      "Lip Balm",
      "Body Lotion",
      "Body Wash",
      "Body Scrub",
      "Hand Cream",
      "Baby Care",
      "Masks",
    ],
  },
  {
    title: "Haircare",
    items: [
      "Shampoo",
      "Conditioner",
      "Hair Cream",
      "Hair Oil",
      "Hair Gel",
      "Hair Color",
      "Hair Serum",
      "Hair Accessory",
    ],
  },
  {
    title: "Fragrances",
    items: [
      "Perfume",
      "Deodorant",
      "Body Mist",
    ],
  },
  {
    title: "Appliances",
    items: [
      "Hair Straightener",
      "Hair Dryer",
      "Epilator",
    ],
  },
  {
    title: "Men's Grooming",
    items: [
      "Trimmers",
      "Beard Oil",
      "Hair Wax",
    ],
  },
  {
    title: "Beauty Gift & Makeup Set",
    items: [
      "Beauty Gift",
      "Makeup Kit",
    ],
  },
  {
    title: "Premium Beauty",
    items: [],
  },
  {
    title: "Wellness & Hygiene",
    items: [],
  },
  {
    title: "Top Brands",
    items: [
      "Lakme",
      "Maybelline",
      "L'Oreal",
      "Philips",
      "Bath & Body Works",
      "THE BODY SHOP",
      "Biotique",
      "Mamaearth",
      "MCaffeine",
      "Nivea",
      "Lotus Herbals",
      "L'Oreal Professionnel",
      "KAMA AYURVEDA",
      "M.A.C",
      "Forest Essentials",
    ],
  },
];












  return (
    <header className="flex items-center justify-between px-6 pt-5 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link to='/'>
       
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" // Replace with the actual logo image
          alt="Logo"
          className="h-10"
        />
         </Link>
        <nav className="flex space-x-6 text-gray-700 text-sm font-bold">
    <li className="relative group px-3 py-2 list-none border-b-4 border-transparent hover:border-[#F49473] pb-5">
  <button className="hover:opacity-50 cursor-default h-full" aria-haspopup="true">
    MEN
  </button>
  <MegaMenu Categories={manCategories}/>
</li>

          <li  className="relative group px-3 py-2 list-none border-b-4 border-transparent hover:border-[#FB56C1] pb-5">
             <button className="hover:opacity-50 cursor-default" aria-haspopup="true">
              WOMEN

            </button>
         <MegaMenu Categories={womanCategories}/>
           

          </li>
          <li className="relative group px-3 py-2 list-none border-b-4 border-transparent hover:border-[#FFBF83] pb-5">
             <button className="hover:opacity-50 cursor-default" aria-haspopup="true">
              KIDS
            </button>
       <MegaMenu Categories={kidsCategories}/>
            </li>
          <li className="relative group px-3 py-2 list-none border-b-4 border-transparent hover:border-[#F2C210] pb-5">
              <button className="hover:opacity-50 cursor-default" aria-haspopup="true">
             HOME & LIVING
            </button>
      <MegaMenu Categories={homeDecorCategories}/>
            </li>
          <li className="relative group px-3 py-2 list-none border-b-4 border-transparent hover:border-[#0DB7C1] pb-5">
                <button className="hover:opacity-50 cursor-default" aria-haspopup="true">
           BEAUTY
            </button>
      <MegaMenu Categories={beautyCategories}/>
            </li>
          <li  className="text-pink-500 font-bold relative group px-3 py-2 list-none border-b-4 border-transparent hover:border-[#FF3F6C] pb-5">
            <button className="hover:opacity-50 cursor-default" aria-haspopup="true">

           
            STUDIO <span className=" absolute -top-1 -right-5 text-xs text-pink-500">NEW</span>
             </button>
             <StudioMenu/>
            
            </li>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className=" w-96 px-10 py-2 rounded-md focus:outline-none bg-[#F5F5F6] focus:bg-white focus:ring-1 text-sm focus:ring-slate-200"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        <div className="relative group px-3 py-2 border-b-4 border-transparent hover:border-[#FF3F6C]">
  <Link to='/my/dashboard' className="flex flex-col items-center cursor-pointer hover:text-gray-900 ">
          <FiUser className="text-xl" />
          <span className="text-xs font-bold">Profile</span>
        </Link>
     <ProfileMenu/>

        </div>
      
        <Link to='/wishlist' className="flex flex-col items-center cursor-pointer hover:text-gray-900">
          <CiHeart  className="text-xl" />
          <span className="text-xs font-bold">Wishlist</span>
        </Link>
        <Link to='/checkout/bag' className="relative flex flex-col items-center cursor-pointer hover:text-gray-900">
          <HiOutlineShoppingBag className=" text-xl" />
          <span className="text-xs font-bold">Bag</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
