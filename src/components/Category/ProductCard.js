import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-md border shadow-sm hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.name}
        width={product.width}
        height={product.height}
        className="w-full h-48 sm:h-60 object-contain mb-3"
      />
      <h3 className="font-medium text-base sm:text-lg text-black">{product.name}</h3>
      <p className="text-gray-500 mb-2 text-sm sm:text-base text-black">{product.category}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-black">${product.price}</span>
        <span className="text-sm text-yellow-500">★ {product.rating}</span>
      </div>
    </div>
  );
}
