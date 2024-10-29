import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function SortMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");

  const options = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
    "Customer Rating",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left group">
      {/* Sort by Label */}
      <button
        // onClick={() => setIsOpen(!isOpen)}
        className="flex items-center font-normal text-sm border border-slate-200 p-2 px-5 text-gray-700 hover:opacity-50 cursor-default hover:text-gray-900 focus:outline-none"
      >
        Sort by: <span className="ml-1 font-semibold">{selectedOption}</span>
        {isOpen ? (
          <FaChevronUp className="ml-2 text-sm group-hover:text-gray-900" />
        ) : (
          <FaChevronDown className="ml-2 text-sm group-hover:text-gray-900" />
        )}
      </button>

   
      {/* {isOpen && ( */}
        <div className="absolute right-0 w-52 p-2 opacity-0 group-hover:opacity-100 group-hover:visible bg-white border border-gray-300 shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                option === selectedOption ? "font-normal" : "font-normal"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      {/* )} */}
    </div>
  );
}

export default SortMenu;
