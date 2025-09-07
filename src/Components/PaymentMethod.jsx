import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="border p-2 mb-6">
                <div
                  className="flex items-center justify-between"
                  onClick={() => setPaymentToggle(!PaymentToggle)}
                >
                  <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                  {PaymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
    
                <div className={`space-y-4 ${PaymentToggle ? "" : "hidden"}`}>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "Cod"}
                      onChange={() => setPaymentMethod("Cod")}
                    />
                    <label className="block text-gray-700 ml-2">
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "Dc"}
                      onChange={() => setPaymentMethod("Dc")}
                    />
                    <label className="block text-gray-700 ml-2">Debit Card</label>
                  </div>
                  {paymentMethod === "Dc" && (
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                      <h3 className="text-xl font-semibold mb-4 ">
                        Debit Card Information
                      </h3>
                      <div className="mb-4 ">
                        <label className="block text-gray-700 font-semibold mb-2 ">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Card Number"
                          className="border p-2 w-full rounded"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2 ">
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter card holder Name"
                          className="border p-2 w-full rounded"
                          required
                        />
                      </div>
                      <div className="flex justify-between mb-4">
                        <div className="w-1/2 mr-2">
                          <label
                            htmlFor=""
                            className="block text-gray-700 font-semibold mb-2"
                          >
                            Expering Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="border p-2 w-full rounded"
                            required
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2">
                            CW
                          </label>
                          <input
                            type="text"
                            className="border p-2 w-full rounded"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
  )
}

export default PaymentMethod
