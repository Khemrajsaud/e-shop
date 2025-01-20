
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddtocart = (e, product) => {
    e.stopPropagation(); 
    e.preventDefault();

   
    dispatch(addToCart(product));


    alert('Product Added Successfully!');
  };

  return (
    <div className="bg-white shadow-md rounded-md p-3 relative border transform transition-transform duration-300 hover:scale-105">
      <div>
        <img className="w-[200px]" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <div className="flex items-center text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
        onClick={(e) => handleAddtocart(e, product)} 
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block cursor-pointer">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;

