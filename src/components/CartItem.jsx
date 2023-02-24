import React from "react";

const CartItem = ({
  imgUrl,
  title,
  quantity,
  price,
  productID,
  handleCartQty,
  handleRemoveFromCart,
}) => {
  return (
    <div className="max-w-[250px] max-h-[370px] overflow-hidden bg-[#D0EDE8] shadow-lg ">
      <div className="max-w-full flow-hidden max-h-[250px]">
        <img
          className="w-[250px] h-[250px]"
          src={`${imgUrl}`}
          alt="Product Image"
        />
      </div>
      <div className="p-3 h-[120px] flex gap-4 ">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-xs font-bold transform  dark:text-gray-100  text-gray-900">
            {title?.length > 50 ? title.slice(0, 50) + "..." : title}
          </h1>
          <div className="flex  gap-4 items-center text-gray-900 dark:text-gray-100">
            <button
              className="text-lg font-semibold"
              onClick={() =>
                handleCartQty(productID, quantity > 1 && quantity - 1)
              }
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handleCartQty(productID, quantity + 1)}
              className="text-lg font-semibold"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col h-fit items-end gap-3">
          <h1 className="text-2xl font-semibold dark:text-gray-100 text-gray-900">
            {price}
          </h1>
          <button
            className="bg-[#f01e6e] capitalize py-2 px-4 hover:bg-[#e04480] transition duration-500 ease-in-out rounded-md text-[#E3DDDD] font-normal text-sm"
            onClick={() => handleRemoveFromCart(productID)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
