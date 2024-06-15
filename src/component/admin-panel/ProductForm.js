import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        stock: 0,
        images: '',
        rating: '',
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                description: product.description || '',
                price: product.price || 0,
                category: product.category.join(', ') || '',
                stock: product.stock || 0,
                images: product.images || '',
                rating: product.rating || '',
            });
        }
    }, [product]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files[0], // Store the selected file
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithImage = new FormData();
            formDataWithImage.append('name', formData.name);
            formDataWithImage.append('description', formData.description);
            formDataWithImage.append('price', Number(formData.price));
            formDataWithImage.append('category', formData.category.split(',').map(cat => cat.trim()));
            formDataWithImage.append('stock', Number(formData.stock));
            formDataWithImage.append('rating', formData.rating);
            formDataWithImage.append('images', formData.images); // Append the selected file

            if (product) {
                await axios.put(`http://localhost:5000/products/${product._id}`, formDataWithImage, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                await axios.post('http://localhost:5000/products', formDataWithImage, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            setFormData({
                name: '',
                description: '',
                price: 0,
                category: '',
                stock: 0,
                images: '',
                rating: '',
            });
            onSave();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <input
                type="file"
                name="images"
                accept="image/*"
                onChange={handleImageChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleChange}
                className="border rounded px-4 py-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {product ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default ProductForm;
