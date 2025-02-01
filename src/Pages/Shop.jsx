import React from "react";
import Image1 from "../assets/Images/product1.jpg"
import Image2 from "../assets/Images/product2.jpg"

import Image3 from "../assets/Images/product3.jpg"

import Image4 from "../assets/Images/product4.jpg"

import Image5 from "../assets/Images/product5.jpg"
import Image6 from "../assets/Images/product6.jpg"


export const products = [
    
    {
        id: 1,
        image: Image1,
        name: "product 1",
        price: 29.33
    },
    {
        id: 2,
        image: Image2,
        name: "product 2",
        price: 29.33
    },
    {
        id: 3,
        image: Image3,
        name: "product 1",
        price: 29.33
    },
    {
        id: 4,
        image: Image4,
        name: "product 1",
        price: 29.33
    },
    {
        id: 5,
        image: Image5,
        name: "product 1",
        price: 29.33
    },

    {
      id: 6,
      image: Image5,
      name: "product 6",
      price: 29.33
  },
]
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


  


const Shop = ({product}) => {
  const dispatch = useDispatch();

  const handleAddtocart = (e, product) => {
    e.stopPropagation(); // Fixed typo
    e.preventDefault();

    // Dispatch the product to Redux
    dispatch(addToCart(product));

    // Show success alert
    alert('Product Added Successfully!');
  };

  return (
    <div className="mb-10">
      <h1 className="text-center text-xl font-bold my-5">Shop</h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-4 text-center hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={`Image of ${product.name}`}
              className="w-full h-40 object-cover mb-3 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
            onClick={(e)=> handleAddtocart(e,product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
