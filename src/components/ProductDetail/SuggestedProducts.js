import Image from "next/image";
import product10 from '../../assets/images/product10.png';
import product11 from "../../assets/images/product11.png";
import product12 from "../../assets/images/product12.png";
import product13 from "../../assets/images/product13.png";

const suggested = [
  { name: "Polo with Contrast Trims", price: "$212", image: product10, crossPrice: "$300", discount: "-22%", stars: 4 },
  { name: "Gradient Graphic T-shirt", price: "$145", image: product11, crossPrice: "", discount: "", stars: 3.5  },
  { name: "Polo with Contrast Trims", price: "$212", image: product12, crossPrice: "", discount: "", stars: 4.5  },
  { name: "Gradient Graphic T-shirt", price: "$145", image: product13, crossPrice: "$300", discount: "-30%", stars: 5 },
];

export default function SuggestedProducts() {
return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto text-black">
        <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suggested.map((item, idx) => (
                <div key={idx} className="text-left">
                    <Image
                        src={item.image}
                        alt={item.name}
                        className="rounded-lg w-full"
                        width={item.image.width || 295}
                        height={item.image.height || 298}
                    />
                    <h4 className="mt-2 text-sm font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600"></p>
                    <p className="text-sm text-black font-semibold">
                        {item.price}
                        {item.crossPrice && (
                            <span className="line-through text-gray-500 ml-2">{item.crossPrice}</span>
                        )}
                        {item.discount && (
                            <span className="text-red-500 ml-2">{item.discount}</span>
                        )}
                    </p>
                </div>
            ))}
        </div>
    </div>
);
}