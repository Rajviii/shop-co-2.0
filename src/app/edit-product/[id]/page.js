// 'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default async function EditProduct({ params }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();
    const { id } = await params;

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                setPrice(data.price);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/products', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name, price }),
        });
        router.push('/');
    };

    return (
        <div className="p-4">
            <h1>Edit Product</h1>
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
    );
}