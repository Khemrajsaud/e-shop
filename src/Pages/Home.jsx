
import React from "react";

import InfoSection from "../Components/InfoSection";
import CategorySection from "../Components/CategoriSection";
import { useDispatch } from "react-redux";
import { Categories } from "../assets/mockData";
import ProductCard from "../Components/ProductCard";

import Image1 from "../assets/Images/product1.jpg";
import Image2 from "../assets/Images/product2.jpg";
import Image3 from "../assets/Images/product3.jpg";
import Image4 from "../assets/Images/product4.jpg";
import Image5 from "../assets/Images/product5.jpg";
import LandingPage from "../Components/LandingPage";



export const products = [
  {
    id: 1,
    image: Image1,
    name: "Product 1",
    price: 29.33,
  },
  {
    id: 2,
    image: Image2,
    name: "Product 2",
    price: 29.33,
  },
  {
    id: 3,
    image: Image3,
    name: "Product 3",
    price: 29.33,
  },
  {
    id: 4,
    image: Image4,
    name: "Product 4",
    price: 29.33,
  },
  {
    id: 5,
    image: Image5,
    name: "Product 5",
    price: 29.33,
  },
];

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white mt-2 px-4">
      <LandingPage/>
    
  
      <InfoSection />
      <CategorySection />

      <div className="my-12">
        <h1>Top Product</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-white">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={() => dispatch(addToCart(product))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

