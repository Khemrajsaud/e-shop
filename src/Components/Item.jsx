// src/components/Item.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };



  return (
    <div>
      <h3>{item.name}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;