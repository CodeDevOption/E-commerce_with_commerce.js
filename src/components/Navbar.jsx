import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
const Navbar = ({ cart }) => {
  const location = useLocation();
  return (
    <div className="p-3 bg-main-bg md:py-5 md:px-10 flex justify-between shadow-sm sticky top-0 dark:bg-secondary-dark-bg z-10 items-center">
      <div className="flex gap-3 items-center">
        <FiShoppingBag className="text-3xl text-gray-900 dark:text-gray-100" />
        <h1 className="text-2xl text-gray-900 dark:text-gray-100">Ecommerce</h1>
      </div>
      {location.pathname != "/cart" && (
        <Link to="/cart" className="relative cursor-pointer">
          <AiOutlineShoppingCart className="text-3xl text-gray-900 dark:text-gray-100" />
          <div className="text-xs absolute top-[-7px] md:top-[-15px] right-[-7px] md:right-[-15px] w-5 h-5 md:w-7 md:h-7 p-2 text-white bg-red-500 rounded-full flex justify-center items-center">
            {cart?.total_items}
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
