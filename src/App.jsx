import { Route, Routes } from "react-router";
import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import { useState } from "react";
import OrderConfirmation from "./Components/Pages/OrderConfirmation";
import FilterData from "./Components/Pages/FilterData";
import ProductDetails from "./Components/Pages/ProductDetails";


const App = () => {
  const [order, setOrder] = useState(null)

  return (
    <>
      <Navbar />
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
