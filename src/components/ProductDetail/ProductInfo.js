import { useState } from "react";
import Image from "next/image";
import shirtImage from "../../assets/images/product09.png"; 
import thumb1 from "../../assets/images/product09.png";
import thumb2 from "../../assets/images/product009.png";
import thumb3 from "../../assets/images/product0009.png";

export default function ProductInfo() {
  const [size, setSize] = useState("Large");

const [selectedImage, setSelectedImage] = useState(shirtImage);

const thumbnails = [thumb1, thumb2, thumb3];

const [selectedColor, setSelectedColor] = useState(0);

return (
    <div className="px-6 py-10 max-w-screen-xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="list-reset flex">
                <li>
                    <a href="/" className="hover:underline">Home</a>
                    <span className="mx-2">{'>'}</span>
                </li>
                <li>
                    <a href="#" className="hover:underline">Shop</a>
                    <span className="mx-2">{'>'}</span>
                </li>
                <li>
                    <a href="#" className="hover:underline">Men</a>
                    <span className="mx-2">{'>'}</span>
                </li>
                <li className="text-black">Tshirt</li>
            </ol>
        </nav>
        <div className="grid md:grid-cols-2 gap-8">
            
            <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col flex-row md:space-y-4 space-x-4 md:space-x-0 mb-4 md:mb-0">
                    {thumbnails.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            className={`border ${selectedImage === img ? "border-black" : "border-transparent"} focus:outline-none rounded-2xl`}
                            style={{ padding: 2 }}
                            tabIndex={0}
                            aria-label={`Select image ${idx + 1}`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                width={60}
                                height={60}
                                className="object-cover rounded-2xl"
                            />
                        </button>
                    ))}
                </div>
                {/* Main Image */}
                <Image
                    src={selectedImage}
                    alt='Product Image'
                    className="rounded-2xl w-full"
                    width={selectedImage.width || 444}
                    height={selectedImage.height || 530}
                />
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-2 text-black">ONE LIFE GRAPHIC T-SHIRT</h1>
                <div className="mt-2 text-yellow-500 flex items-center">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="relative" style={{ width: 16, display: 'inline-block' }}>
                        <span style={{ position: 'absolute', overflow: 'hidden', width: '50%' }}>★</span>
                        <span style={{ color: '#d1d5db' }}>★</span>
                    </span>
                    <span className="ml-2 text-black font-medium">4.5(5)</span>
                </div>
                <p className="text-xl text-black font-semibold">
                    $260 <span className="line-through text-gray-500 ml-2">$300</span> <span className="text-red-500 ml-2">-40%</span>
                </p>
                <p className="text-sm mt-4 text-gray-600">
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                </p>

                <div className="mt-4">
                    <h4 className="font-medium mb-1 text-black">Select Colors</h4>
                    <div className="flex gap-3 mt-2">
                        {[
                            { name: "Black", code: "#000" },
                            { name: "Red", code: "#EF4444" },
                            { name: "Blue", code: "#3B82F6" }
                        ].map((color, idx) => (
                            <button
                                key={color.name}
                                type="button"
                                onClick={() => setSelectedColor(idx)}
                                className="relative focus:outline-none"
                                aria-label={`Select color ${color.name}`}
                            >
                                <span
                                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center`}
                                    style={{
                                        backgroundColor: color.code,
                                        borderColor: selectedColor === idx ? "#000" : "#e5e7eb",
                                        borderWidth: selectedColor === idx ? 2 : 1,
                                    }}
                                >
                                    {selectedColor === idx && (
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="font-medium mb-1 text-black">Select Size</h4>
                    <div className="flex gap-2">
                        {["Small", "Medium", "Large", "Extra Large"].map(s => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-4 py-2 border rounded-2xl ${size === s ? "bg-black text-white" : "bg-white text-black"}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex gap-3 items-center">
                    <input type="number" defaultValue={1} className="w-16 border px-2 py-1 rounded-2xl text-black" />
                    <button className="bg-black text-white px-6 py-2 rounded-2xl">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
);
}