'use client';

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { fetchProducts } from "../../app/api/products/productsAPI";

export default function CategoryContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="flex px-8 py-12 gap-8">
      <div className="w-1/4">
        <Filters />
      </div>

      <div className="w-3/4">
        <h2 className="text-2xl font-semibold mb-4 text-black">Casual</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-6">
            {/* Previous Button */}
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100 flex items-center">
                <span className="mr-1">&#8592;</span> Previous
            </button>
            {/* Page Numbers */}
            <div className="flex space-x-1">
                <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">1</button>
                <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">2</button>
                <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">3</button>
                <span className="px-2 py-1 text-black">...</span>
                <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">9</button>
                <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">10</button>
            </div>
            {/* Next Button */}
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100 flex items-center">
                Next <span className="ml-1">&#8594;</span>
            </button>
        </div>
      </div>
    </main>
  );
}
