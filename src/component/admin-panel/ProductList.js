import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/products');
        setProducts(res.data);
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <ProductForm
                product={editingProduct}
                onSave={() => { setEditingProduct(null); fetchProducts(); }}
            />
            <ul>
                {products.map(product => (
                    <li key={product._id} className="flex justify-between items-center border-b py-2">
                        <div>
                            <p className="text-lg">{product.category} ~ {product.name}</p>
                            <p className="text-gray-600">{product.stock} Left</p>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                        <div>
                            <button
                                className="text-blue-500 mr-2"
                                onClick={() => handleEdit(product)}
                            >
                                Edit
                            </button>
                            <button
                                className="text-red-500"
                                onClick={() => handleDelete(product._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
