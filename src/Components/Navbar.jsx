import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };
  const products = useSelector((state) => state.cart?.Products || []);
  console.log(products);

  return (
    <nav className="bg-white shadow-md block">
      <div className="flex items-center py-4 mx-3">
        <div className="text-xl font-semibold"> 
          <Link to="/">E-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4 text-md">
          <form>
            <input
              className="w-full outline-none border py-2 px-4"
              type="text"
              placeholder="Search Product"
            />
            <CiSearch className="absolute top-1/3 right-3 text-sm" />
          </form>
        </div>
        <div className="flex items-center relative">
          <Link to="/cart" className="relative">
            <CiShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>

          <button
            className=" hidden lg:block"
            onClick={() => setIsModelOpen(true)}
          >
            Login | Register
          </button>

          <button className=" block md:hidden">
            <CiUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-3 font-bold">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/shop">
          Shop
        </Link>
        <Link className="hover:underline" to="/">
          Contact
        </Link>
        <Link className="hover:underline" to="/">
          About
        </Link>
      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Model>
    </nav>
  );
};

export default Navbar;   
