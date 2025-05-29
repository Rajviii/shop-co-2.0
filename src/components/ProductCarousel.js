'use client';

import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductCarousel({ title, endpoint }) {
  const { data, error } = useSWR(endpoint, fetcher);

  if (error) return <p className="text-center text-red-500">Failed to load products.</p>;
  if (!data) return <p className="text-center">Loading...</p>;

  return (
    <section className="px-6 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {data.map(product => (
          <div
            key={product.id}
            className="w-64 flex-shrink-0 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition"
          >
            <Image
              src={product.image.src}
              alt={product.name}
              width={product.image.width}
              height={product.image.height}
              className="object-cover rounded-lg w-full h-64"
            />
            <h3 className="mt-4 text-sm font-medium text-gray-800">{product.name}</h3>
            <p className="text-sm font-semibold text-black mt-1">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}