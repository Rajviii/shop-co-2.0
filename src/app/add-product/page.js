'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProduct(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price }),
        });
        router.push('/');
    }

    return (
        <div className="p-4">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit" className='cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}