import { NextResponse } from "next/server";
import { getProducts, addProduct, updateProduct, deleteProduct } from "@/lib/data";

export async function GET(){
    return NextResponse.json(getProducts());
}

export async function POST(request){
    const { name, price } = await request.json();
    const id = Date.now();
    const newProduct = { id, name, price };
    addProduct(newProduct);
    return NextResponse.json({ message: 'Product added successfully', product: newProduct });
}

export async function PUT(request){
    const { id, name, price } = await request.json();
    const updatedProduct = updateProduct(id, { name, price });
    return NextResponse.json({ message: 'Product updated successfully', product: updatedProduct });
}

export async function DELETE(request){
    const { id } = await request.json();
    const deletedProduct = deleteProduct(id);
    return NextResponse.json({ message: 'Product deleted successfully', product: deletedProduct });
}
