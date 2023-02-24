import React from "react";

const Product = ({ imgUrl, title, brand, price, productID, handleAddToCart }) => {
  return (
    <div className="max-w-[350px] max-h-[450px] overflow-hidden bg-[#D0EDE8] shadow-lg rounded-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      <div className="max-w-full flow-hidden max-h-[350px]">
        <img className="w-[350px] h-[350px]" src={`${imgUrl}`} alt={brand} />
      </div>
      {/* <div className="p-3 flex gap-4 ">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-lg font-semibold dark:text-gray-100 text-gray-900">
            ASUS Vivobook Pro
          </h1>
          <p className="text-[10px]  dark:text-gray-100 text-gray-900">
            6-inch 4K OLED Laptop (AMD Ryzen 7-5800H, Nvidia GeForce RTX 3050,
            16 GB RAM, 1TB SSD, Backlit Keyboard, Windows 10 with free Windows
            11 Upgrade)
          </p>
        </div>
        <div className="flex flex-col items-end justify-around">
          <h1 className="text-2xl font-semibold dark:text-gray-100 text-gray-900">
            $520
          </h1>
          <button className="bg-[#F0371E] py-2 px-4 hover:bg-[#e67465] transition duration-500 ease-in-out rounded-md text-[#E3DDDD] font-normal text-sm">
            Add to Cart
          </button>
        </div>
      </div> */}

      <div className="p-3 h-[100px] flex gap-4 ">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-sm font-bold dark:text-gray-100 1 text-gray-900">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </h1>
          <p className="text-xs font-semibold flex gap-2 dark:text-gray-100 text-gray-900">
            Brand: <p dangerouslySetInnerHTML={{ __html: brand }}></p>
          </p>
        </div>
        <div className="flex flex-col h-fit items-end gap-2">
          <h1 className="text-2xl font-semibold dark:text-gray-100 text-gray-900">
            {price}
          </h1>
          <button className="bg-[#F0371E] py-2 px-4 hover:bg-[#e67465] transition duration-500 ease-in-out rounded-md text-[#E3DDDD] font-normal text-sm" onClick={()=> handleAddToCart(productID,1)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
