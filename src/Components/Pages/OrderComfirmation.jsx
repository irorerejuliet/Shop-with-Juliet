import React from 'react'

const OrderComfirmation = ({order}) => {
  return (
    <div className='bg-red-800 my-40'>
      <h2>Thank you for your other</h2>
      <p>YOur order has been placed successfully you will recieve an email confirmation</p>
      <div>
        <h3>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
      </div>
    </div>
  )
}

export default OrderComfirmation
