
import React from "react";
import landingpage from "../assets/Images/landing page canva1.png";
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
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xl font-bold px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="space-y-4 bg-gray-100 pb-4 rounded-md">
            {Categories.map((category, index) => (
              <li className="flex items-center text-sm font-medium" key={index}>
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 h-96 relative">
          <img src={landingpage} alt="" className="h-full w-full rounded-md" />
          <div className="absolute top-16 left-6">
            <p className="text-xl text-gray-800">e-Shop</p>
            <h2 className="text-3xl font-bold my-3">WELCOME TO E-SHOP</h2>
            <p className="text-2xl font-semibold my-3">MILLIONS + PRODUCTS</p>
            <button className="bg-red-600 rounded-md p-2 my-2 text-white">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
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

