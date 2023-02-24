import React from "react";
import { Product } from "../components";
const Products = ({product,handleAddToCart}) => {


  return (
    <div className="w-full my-5 dark:bg-main-dark-bg  proHeight flex justify-center  flex-wrap gap-5">
        {
            product.map((item)=>(

                <Product key={item?.id} handleAddToCart={handleAddToCart} title={item?.name} brand={item?.description} imgUrl={item?.image?.url} price={item?.price?.formatted_with_symbol} productID={item?.id}/>
            ))
        }
    </div>
  );
};

export default Products;
