import { FiFilter } from "react-icons/fi";
import { useState } from "react";

export default function Filters() {
  const clothesCategory = ['Tshirts', 'Shorts', 'Shirts', 'Hoodie', 'jeans']
  const colorOptions = [
    "bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500", "bg-purple-500",
    "bg-pink-500", "bg-orange-500", "bg-gray-500", "bg-black", "bg-white border"
  ];
  const sizeOptions = ["XX-Small","X-Small", "Medium", "X-Large", "XX-Large", '3X-Large', "4X-Large"];
  const dressStyles = ["Tshirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  const [open, setOpen] = useState({
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-black">Filters</h3>
        <FiFilter className="text-xl text-black" />
      </div>
      <hr className="border-grey mb-3" />

      <div className="flex flex-col gap-1 mt-2">
            {clothesCategory.map((style) => (
              <span key={style} className="px-2 py-1 rounded text-black">
                {style}
              </span>
            ))}
      </div>
      <hr className="border-grey mb-3" />

      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("price")}
        >
          <p className="text-lg font-bold text-black">Price</p>
          <span className="text-black">{open.price ? "▲" : "▼"}</span>
        </div>
        {open.price && (
          <div className="mt-2">
            <input type="range" min="0" max="1000" className="w-full" />
            <div className="flex justify-between text-xs text-gray-600">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        )}
      </div>
      <hr className="border-grey my-3" />
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle("colors")}
          >
            <p className="text-lg font-bold text-black">Colors</p>
            <span>{open.colors ? "▲" : "▼"}</span>
          </div>
          {open.colors && (
            <div className="mt-2 grid grid-cols-5 gap-4">
          {colorOptions.map((color) => (
            <span
              key={color}
              className={`w-12 h-12 rounded-full border ${color} flex items-center justify-center`}
            ></span>
          ))}
            </div>
          )}
        </div>
        <hr className="border-grey my-3" />

        {/* Size Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("size")}
        >
          <p className="text-lg font-bold text-black">Size</p>
          <span>{open.size ? "▲" : "▼"}</span>
        </div>
        {open.size && (
    
          <div className="flex flex-col gap-1 mt-2">
            {sizeOptions.map((size) => (
              <span key={size} className="px-2 py-1 rounded text-black">
                {size}
              </span>
            ))}
      </div>
        )}
      </div>
      <hr className="border-grey my-3" />

      {/* Dress Style Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("dressStyle")}
        >
          <p className="text-lg font-bold text-black">Dress Style</p>
          <span>{open.dressStyle ? "▲" : "▼"}</span>
        </div>
        {open.dressStyle && (
          <div className="flex flex-col gap-1 mt-2">
            {dressStyles.map((style) => (
              <span key={style} className="px-2 py-1 rounded text-black">
                {style}
              </span>
            ))}
          </div>
        )}
      </div>
      <hr className="border-grey my-3" />

      {/* Apply Filter Button */}
      <button className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Apply Filter
      </button>
    </div>
  );
}
