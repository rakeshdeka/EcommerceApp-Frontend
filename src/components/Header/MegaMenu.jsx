
import { Link } from "react-router-dom"
const MegaMenu = ({ Categories }) => {
  return (
    <div className="absolute top-full transition-all duration-500 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 z-50 min-w-[700px]">
      <div className="relative bg-white shadow-xl p-6 ">
        {/* Arrow */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 bg-white rotate-45 z-0"></div> */}

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {Categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <Link to="/product-list">
                <h3 className="font-semibold text-pink-600">{category.title}</h3>
              </Link>
              <ul className="mt-2 space-y-1 text-xs font-normal">
                {
                  category.items.map((item, idx) => (

                    <li key={idx} className="text-gray-700 hover:text-pink-600 cursor-pointer">
                      <Link to="/product-list">
                        {item}
                      </Link>
                    </li>
                  ))
                }
              </ul>
              {category.items.length !== 0 && <div className="border-t border-gray-300 mt-4"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MegaMenu