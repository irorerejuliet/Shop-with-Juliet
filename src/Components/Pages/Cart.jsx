import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux"

useSelector

const Cart = () => {
  const cart = useSelector((state )=> state.cart)
  const [address, setAddress] = useState('main stret, 0012')
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className=" mb-4 text-xs font-bold">
                <div className="flex justify-between">
                  <p>PRODUCTS</p>
                  <div className="flex space-x-8">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border border-gray-100"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-xl px-1 border-1">+</button>
                      </div>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                      {/* <p>${(product.quality * product.price).toFixed(2)}</p> */}
                      <button className="text-red-500 hover:text-red-800">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>CART TOTAL</h3>
              <div>
                <span>Total items</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div>
                <p>Shipping:</p>
                <p>Shipping to:</p>
                <span>{address}</span>
                <button>change address</button>
              </div>
              <div>
                <span>Total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button>Proced to checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src="/Images/emptyCart.jpg" alt="emptyCart" />
        </div>
      )}
    </div>
  );
}

export default Cart
