'use client';

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { fetchProducts } from "../../app/api/products/productsAPI";

export default function CategoryContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="flex flex-col md:flex-row px-4 md:px-8 py-6 md:py-12 gap-6 md:gap-8">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {showFilters && <Filters />}
      </div>

      {/* Sidebar Filters (Desktop only) */}
      <div className="hidden md:block md:w-1/4">
        <Filters />
      </div>

      {/* Products Section */}
      <div className="w-full md:w-3/4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Casual</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between mt-6 gap-2">
          <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100 flex items-center">
            <span className="mr-1">&#8592;</span> Previous
          </button>

          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">1</button>
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">3</button>
            <span className="px-2 py-1 text-black">...</span>
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">9</button>
            <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100">10</button>
          </div>

          <button className="px-3 py-1 bg-white border border-gray-300 text-black rounded hover:bg-gray-100 flex items-center">
            Next <span className="ml-1">&#8594;</span>
          </button>
        </div>
      </div>
    </main>
  );
}