import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../components";

const Cart = ({
  cart,
  handleEmptyCart,
  handleCartQty,
  handleRemoveFromCart,
}) => {
  console.log(cart);
  const EmptyCart = () => (
    <div className="flex items-center flex-col justify-center mt-28">
      <h4 className="text-gray-900 text-2xl dark:text-gray-100 text-center">You have no items in your shopping cart, start adding some!</h4>
      <Link to='/'  className="text-blue-500 font-semibold mt-10 text-lg">
        Click Here 
      </Link>
    </div>
  );

  const FilledCart = () => (
    <>
      <div className="my-10  w-full  flex flex-wrap justify-center gap-5">
        {cart?.line_items.map((item) => (
          <CartItem
            key={item?.id}
            title={item?.product_name}
            imgUrl={item?.image?.url}
            price={item?.price?.formatted_with_symbol}
            productID={item?.id}
            quantity={item?.quantity}
            handleCartQty={handleCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row  justify-between items-center pb-10 w-full">
        <h1 className="text-2xl mb-3 md:mb-0 text-gray-900 dark:text-gray-100">
          Subtotal:{" "}
          <span className="font-semibold">
            {cart?.subtotal?.formatted_with_symbol}
          </span>{" "}
        </h1>
        <div className="flex items-center  gap-5">
          <button
            className="bg-orange-600 px-4 py-2 hover:scale-105 transition duration-300 ease-in-out rounded-md text-gray-50 shadow-md"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </button>
          <button className="bg-blue-600 font-normal hover:scale-105  transition duration-300 ease-in-out px-4 py-2 rounded-md text-gray-50 shadow-md">
            <a href={cart?.hosted_checkout_url}>Checkout</a>
          </button>
        </div>
      </div>
    </>
  );
  if (!cart?.line_items) return "Loading....";
  return (
    <div className="flex justify-center w-full proHeight ">
      <div className="sm:max-w-5xl w-full p-5">
        <h1 className="text-3xl  text-gray-900 dark:text-gray-100">
          Your Shopping Cart
        </h1>
        {!cart?.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </div>
  );
};

export default Cart;
