
import asset116 from "../../assets/landing_images/asset_116.png"
import asset117 from "../../assets/landing_images/asset_117.png"

import asset122 from "../../assets/landing_images/asset_122.png"
import asset123 from "../../assets/landing_images/asset_123.png"
import facebook from "../../assets/landing_images/asset_118.png"
import twitter from "../../assets/landing_images/asset_119.png"
import instagram from "../../assets/landing_images/asset_121.png"
import youtube from "../../assets/landing_images/asset_120.png"
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Sections */}
        <div className="grid grid-cols-4 gap-8">
          {/* Online Shopping */}
          <div>
            <h4 className="font-semibold mb-4">ONLINE SHOPPING</h4>
            <ul className="space-y-2">
              {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Gift Cards', 'Myntra Insider'].map((item) => (
                <li key={item} className="text-sm hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Customer Policies */}
          <div>
            <h4 className="font-semibold mb-4">CUSTOMER POLICIES</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'T&C', 'Terms Of Use', 'Track Orders', 'Shipping', 'Cancellation', 'Returns', 'Privacy policy', 'Grievance Officer'].map((item) => (
                <li key={item} className="text-sm hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Experience and Social Media */}
          <div>
            <h4 className="font-semibold mb-4">EXPERIENCE MYNTRA APP ON MOBILE</h4>
            <div className="flex space-x-2 mb-4">
              <img src={asset116} alt="Google Play" className="w-24 cursor-pointer"/>
              <img src={asset117} alt="App Store" className="w-24 cursor-pointer"/>
            </div>
            <h4 className="font-semibold mb-4">KEEP IN TOUCH</h4>
            <div className="flex space-x-4 text-2xl">
              {/* {['facebook', 'twitter', 'youtube', 'instagram'].map((platform) => (
                <i key={platform} className={`fab fa-${platform} cursor-pointer hover:text-gray-500`}></i>
              ))} */}
              <img src={facebook} alt="facebook" className=" w-6 h-6" />
              <img src={twitter} alt="twitter" className=" w-6 h-6"  />
               <img src={youtube} alt="youtube" className=" w-6 h-6"  />
              <img src={instagram} alt="instagram" className=" w-6 h-6"  />
            </div>
          </div>
              {/* Guarantee & Returns */}
        <div className="flex flex-col items-center gap-4 text-sm">
          <div className="flex items-center space-x-2">
          
            <img src={asset122} alt="asset122" className=" w-14 h-10" />
            <p className=" text-sm"> <span className="font-bold"> 100% ORIGINAL</span> guarantee for all products at myntra.com</p>
          </div>
          <div className="flex items-center space-x-2">
          
            <img src={asset123} alt="asset123" className=" w-10 h-10" />
            <p className=" text-sm"> <span className=" font-bold"> Return within 14 days</span>  of receiving your order</p>
          </div>
        </div>

        </div>

    
        {/* Popular Searches */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold mb-2">POPULAR SEARCHES</h4>
          <p className="text-sm text-gray-600 flex flex-wrap">
            {[
              'Makeup', 'Dresses For Girls', 'T-Shirts', 'Sandals', 'Headphones', 'Babydolls', 'Blazers For Men',
              'Handbags', 'Ladies Watches', 'Bags', 'Sport Shoes', 'Reebok Shoes', 'Puma Shoes', 'Boxers',
              'Wallets', 'Tops', 'Earrings', 'Fastrack Watches', 'Kurtis', 'Nike', 'Smart Watches',
              'Titan Watches', 'Designer Blouse', 'Gowns', 'Rings', 'Cricket Shoes', 'Forever 21', 'Eye Makeup',
              'Photo Frames', 'Punjabi Suits', 'Bikini', 'Myntra Fashion Show', 'Lipstick', 'Saree', 'Watches',
              'Dresses', 'Lehenga', 'Nike Shoes', 'Goggles', 'Bras', 'Suit', 'Chinos', 'Shoes', 'Adidas Shoes',
              'Woodland Shoes', 'Jewellery', 'Designers Sarees'
            ].map((item, index, arr) => (
             <span key={index} className="mr-2 hover:underline cursor-pointer">
      {item}
      {index < arr.length - 1 && <span className="mx-1">|</span>}
    </span>
            ))}
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-4 text-sm mt-4 flex justify-between">
          <p>In case of any concern, <span className=" font-semibold text-blue-700">Contact Us</span></p>
          <p>&copy; 2024 www.myntra.com. All rights reserved.</p>
          <p>A Flipkart company</p>
        </div>

    
      </div>
    </footer>
  );
};

export default Footer;
