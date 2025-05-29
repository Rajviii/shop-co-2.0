'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductDetails() {
  const [products, setProducts] = useState([]);

  console.log('products', products);

  useEffect(() => {
    fetch('/api/products')
    .then((res) => res.json())
    .then((data) => {setProducts(data);})
  }, []);


  const handleDelete = (id) =>{
    fetch('/api/products', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id }),
    });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }


  return (
    <div className='p-4'>
        <h1>Products</h1>

        <Link href='/add-product'>
          <button className='bg-blue-500 text-white p-2 rounded cursor-pointer'>Add Product</button>
        </Link>

        <table className='w-full border border-collapse border-gray=200'>
          <thead className='bg-gray-100'>
            <tr key={products.id}>
              <th className='border p-2 text-black'>Name</th>
              <th className='border p-2 text-black'>Price</th>
              <th className='border p-2 text-black'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={products.id}>
                <td className='border p-2'>{p.name}</td>
                <td className='border p-2'>{p.price}</td>
                <td className="border p-2">
                  <Link href={`/edit-product/${p.id}`}>
                    <button className='bg-yellow-500 text-white p-2 rounded cursor-pointer'>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(p.id)} className='bg-red-500 text-white p-2 rounded ml-2 cursor-pointer'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
