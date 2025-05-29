let products = [];

export function getProducts(){
    return products;
}

export function addProduct(product){
    return products.push(product);
}

export function updateProduct(id, updated){
    const index = products.findIndex((p)=> p.id === id);
    if(index !== -1){
        products[index] = {...products[index], ...updated};
        return products[index];
    }
}

export function deleteProduct(id){
    const index = products.findIndex((p)=> p.id === id);
    if(index !== -1){
        const deleted = products[index]; 
        products = products.filter((p)=> p.id !== id);
        return deleted;
    }
}