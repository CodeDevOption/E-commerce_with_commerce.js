import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { commerce } from "./lib/commerce";
import { Cart, Checkout, Products } from "./pages";

const App = () => {
  const [product, setProduct] = useState([]);
  const [carts, setCart] = useState({});
  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setProduct(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, Quantity) => {
    await commerce.cart.add(productId, Quantity);
    fetchCart();
  };

  const handleCartQty = async (productId, Quantity) => {
    await commerce.cart.update(productId, {
      quantity: Quantity,
    });
    fetchCart();
  };

  const handleRemoveFromCart = async (productId) => {
    await commerce.cart.remove(productId);
    fetchCart();
  };

  const handleEmptyCart = async () => {
    await commerce.cart.empty();
    fetchCart();
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-main-bg">
      <Navbar cart={carts} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products product={product} handleAddToCart={handleAddToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart
                cart={carts}
                handleCartQty={handleCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </>
          }
        />
        <Route path="/checkout" element={<><Checkout /></>} />
      </Routes>
    </div>
  );
};

export default App;
