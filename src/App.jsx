import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import OrderConfirmation from "./Pages/OrderConfirmation";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import FilterData from "./Pages/FilterData";
import { Toaster } from "react-hot-toast";






const App = () => {
  const [order, setOrder] = useState(null)

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route
          path="/orderConfirmation"
          element={<OrderConfirmation order={order} />}
        />
        <Route path="/filterData" element={<FilterData />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
