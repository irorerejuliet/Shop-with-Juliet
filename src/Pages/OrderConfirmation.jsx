import React from 'react'
import { Navigate, useNavigate } from 'react-router';

const OrderConfirmation = ({order}) => {

const navigate = useNavigate()

// An error happens because when i navigate directly to /orderConfirmation, the order prop was  still null (since i initialized useState(null) in App.js). s order.orderNumber
// React tries to read a property from null, which crashes the app.


  if (!order) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">No order found ❌</h2>
        <p>Please place an order first.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order 🎉</h2>
      <p>
        YOur order has been placed successfully you will recieve an email
        confirmation
      </p>
      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p>Order Number: {order?.orderNumber}</p>
        <div className='mt-4'> 
          <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className='mt-4'>
          <h3 className='text-md font-semibold mb-2'>Item Orederd</h3>
          {order.products.map((product) => (
            <div key={product.id}
            className='flex justify-between mt-2'>
              <p>
                {product.name} * {product.quantity}
              </p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className='mt-4 flex justify-between'>
          <span>TOtal Price:</span>
          <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
        </div>
        <div className='mt-6'>
          <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Order tracking</button>
          <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800' onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation
